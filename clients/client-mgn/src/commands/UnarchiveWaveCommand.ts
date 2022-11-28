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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  UnarchiveWaveRequest,
  UnarchiveWaveRequestFilterSensitiveLog,
  Wave,
  WaveFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UnarchiveWaveCommand,
  serializeAws_restJson1UnarchiveWaveCommand,
} from "../protocols/Aws_restJson1";

export interface UnarchiveWaveCommandInput extends UnarchiveWaveRequest {}
export interface UnarchiveWaveCommandOutput extends Wave, __MetadataBearer {}

/**
 * <p>Unarchive wave.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UnarchiveWaveCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UnarchiveWaveCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new UnarchiveWaveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnarchiveWaveCommandInput} for command's `input` shape.
 * @see {@link UnarchiveWaveCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class UnarchiveWaveCommand extends $Command<
  UnarchiveWaveCommandInput,
  UnarchiveWaveCommandOutput,
  MgnClientResolvedConfig
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

  constructor(readonly input: UnarchiveWaveCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnarchiveWaveCommandInput, UnarchiveWaveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UnarchiveWaveCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "UnarchiveWaveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnarchiveWaveRequestFilterSensitiveLog,
      outputFilterSensitiveLog: WaveFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnarchiveWaveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnarchiveWaveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnarchiveWaveCommandOutput> {
    return deserializeAws_restJson1UnarchiveWaveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
