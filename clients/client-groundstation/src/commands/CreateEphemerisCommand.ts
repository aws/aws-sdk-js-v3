// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import {
  CreateEphemerisRequest,
  CreateEphemerisRequestFilterSensitiveLog,
  EphemerisIdResponse,
  EphemerisIdResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateEphemerisCommand,
  serializeAws_restJson1CreateEphemerisCommand,
} from "../protocols/Aws_restJson1";

export interface CreateEphemerisCommandInput extends CreateEphemerisRequest {}
export interface CreateEphemerisCommandOutput extends EphemerisIdResponse, __MetadataBearer {}

/**
 * <p>Creates an Ephemeris with the specified <code>EphemerisData</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CreateEphemerisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEphemerisCommandInput} for command's `input` shape.
 * @see {@link CreateEphemerisCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 */
export class CreateEphemerisCommand extends $Command<
  CreateEphemerisCommandInput,
  CreateEphemerisCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreateEphemerisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEphemerisCommandInput, CreateEphemerisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEphemerisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "CreateEphemerisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEphemerisRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EphemerisIdResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEphemerisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateEphemerisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEphemerisCommandOutput> {
    return deserializeAws_restJson1CreateEphemerisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
