import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { CheckCapacityRequest, CheckCapacityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CheckCapacityCommand,
  serializeAws_json1_1CheckCapacityCommand,
} from "../protocols/Aws_json1_1";
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

export type CheckCapacityCommandInput = CheckCapacityRequest;
export type CheckCapacityCommandOutput = CheckCapacityResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
 *          You can use this to check the capacity requirements for the rules you want to use in a
 *          <a>RuleGroup</a> or <a>WebACL</a>.
 *          </p>
 *          <p>AWS WAF uses WCUs to calculate and control the operating
 *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
 *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
 *          Simple rules that cost little to run use fewer WCUs than more complex rules
 * 				that use more processing power.
 * 				Rule group capacity is fixed at creation, which helps users plan their
 *          web ACL WCU usage when they use a rule group.
 *          The WCU limit for web ACLs is 1,500.  </p>
 */
export class CheckCapacityCommand extends $Command<
  CheckCapacityCommandInput,
  CheckCapacityCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckCapacityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckCapacityCommandInput, CheckCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "CheckCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckCapacityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CheckCapacityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckCapacityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckCapacityCommandOutput> {
    return deserializeAws_json1_1CheckCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
