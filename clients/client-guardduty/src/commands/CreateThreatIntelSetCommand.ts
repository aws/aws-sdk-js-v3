import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateThreatIntelSetRequest, CreateThreatIntelSetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateThreatIntelSetCommand,
  serializeAws_restJson1CreateThreatIntelSetCommand,
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

export interface CreateThreatIntelSetCommandInput extends CreateThreatIntelSetRequest {}
export interface CreateThreatIntelSetCommandOutput extends CreateThreatIntelSetResponse, __MetadataBearer {}

/**
 * <p>Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses.
 *       GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can
 *       use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link CreateThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateThreatIntelSetCommand extends $Command<
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateThreatIntelSetCommandInput) {
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
  ): Handler<CreateThreatIntelSetCommandInput, CreateThreatIntelSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "CreateThreatIntelSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateThreatIntelSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateThreatIntelSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateThreatIntelSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateThreatIntelSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateThreatIntelSetCommandOutput> {
    return deserializeAws_restJson1CreateThreatIntelSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
