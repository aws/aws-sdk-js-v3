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
  GetMissionProfileRequest,
  GetMissionProfileRequestFilterSensitiveLog,
  GetMissionProfileResponse,
  GetMissionProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMissionProfileCommand,
  serializeAws_restJson1GetMissionProfileCommand,
} from "../protocols/Aws_restJson1";

export interface GetMissionProfileCommandInput extends GetMissionProfileRequest {}
export interface GetMissionProfileCommandOutput extends GetMissionProfileResponse, __MetadataBearer {}

/**
 * <p>Returns a mission profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMissionProfileCommandInput} for command's `input` shape.
 * @see {@link GetMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 */
export class GetMissionProfileCommand extends $Command<
  GetMissionProfileCommandInput,
  GetMissionProfileCommandOutput,
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

  constructor(readonly input: GetMissionProfileCommandInput) {
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
  ): Handler<GetMissionProfileCommandInput, GetMissionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMissionProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "GetMissionProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMissionProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMissionProfileResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMissionProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMissionProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMissionProfileCommandOutput> {
    return deserializeAws_restJson1GetMissionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
