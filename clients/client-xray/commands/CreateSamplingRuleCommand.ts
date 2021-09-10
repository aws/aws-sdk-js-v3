import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { CreateSamplingRuleRequest, CreateSamplingRuleResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSamplingRuleCommand,
  serializeAws_restJson1CreateSamplingRuleCommand,
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

export interface CreateSamplingRuleCommandInput extends CreateSamplingRuleRequest {}
export interface CreateSamplingRuleCommandOutput extends CreateSamplingRuleResult, __MetadataBearer {}

/**
 * <p>Creates a rule to control sampling behavior for instrumented applications. Services
 *          retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending
 *          order of <i>priority</i> for each request. If a rule matches, the service
 *          records a trace, borrowing it from the reservoir size. After 10 seconds, the service
 *          reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of
 *          each in-use rule. The updated rule contains a trace quota that the service can use instead
 *          of borrowing from the reservoir.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, CreateSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, CreateSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new CreateSamplingRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSamplingRuleCommand extends $Command<
  CreateSamplingRuleCommandInput,
  CreateSamplingRuleCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSamplingRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSamplingRuleCommandInput, CreateSamplingRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "CreateSamplingRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSamplingRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSamplingRuleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSamplingRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSamplingRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSamplingRuleCommandOutput> {
    return deserializeAws_restJson1CreateSamplingRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
