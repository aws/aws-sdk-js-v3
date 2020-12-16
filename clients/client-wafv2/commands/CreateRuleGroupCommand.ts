import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { CreateRuleGroupRequest, CreateRuleGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateRuleGroupCommand,
  serializeAws_json1_1CreateRuleGroupCommand,
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

export type CreateRuleGroupCommandInput = CreateRuleGroupRequest;
export type CreateRuleGroupCommandOutput = CreateRuleGroupResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Creates a <a>RuleGroup</a> per the specifications provided. </p>
 *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 */
export class CreateRuleGroupCommand extends $Command<
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRuleGroupCommandInput) {
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
  ): Handler<CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "CreateRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRuleGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRuleGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRuleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRuleGroupCommandOutput> {
    return deserializeAws_json1_1CreateRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
