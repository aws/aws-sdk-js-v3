import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetThreatIntelSetRequest, GetThreatIntelSetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetThreatIntelSetCommand,
  serializeAws_restJson1GetThreatIntelSetCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetThreatIntelSetCommandInput extends GetThreatIntelSetRequest {}
export interface GetThreatIntelSetCommandOutput extends GetThreatIntelSetResponse, __MetadataBearer {}

/**
 * <p>Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link GetThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetThreatIntelSetCommand extends $Command<
  GetThreatIntelSetCommandInput,
  GetThreatIntelSetCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetThreatIntelSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetThreatIntelSetCommandInput, GetThreatIntelSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetThreatIntelSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetThreatIntelSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetThreatIntelSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetThreatIntelSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetThreatIntelSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetThreatIntelSetCommandOutput> {
    return deserializeAws_restJson1GetThreatIntelSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
