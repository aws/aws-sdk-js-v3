import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { UpdateWebACLRequest, UpdateWebACLResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateWebACLCommand,
  serializeAws_json1_1UpdateWebACLCommand,
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

export type UpdateWebACLCommandInput = UpdateWebACLRequest;
export type UpdateWebACLCommandOutput = UpdateWebACLResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Updates the specified <a>WebACL</a>.</p>
 *          <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AWS AppSync GraphQL API.  </p>
 */
export class UpdateWebACLCommand extends $Command<
  UpdateWebACLCommandInput,
  UpdateWebACLCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWebACLCommandInput) {
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
  ): Handler<UpdateWebACLCommandInput, UpdateWebACLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateWebACLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWebACLRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWebACLResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWebACLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateWebACLCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWebACLCommandOutput> {
    return deserializeAws_json1_1UpdateWebACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
