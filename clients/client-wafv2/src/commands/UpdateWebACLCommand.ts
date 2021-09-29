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

export interface UpdateWebACLCommandInput extends UpdateWebACLRequest {}
export interface UpdateWebACLCommandOutput extends UpdateWebACLResponse, __MetadataBearer {}

/**
 * <p>Updates the specified <a>WebACL</a>.</p>
 *          <note>
 *             <p>This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. To modify the web ACL, retrieve it by calling <a>GetWebACL</a>, update the settings as needed, and then provide the complete web ACL specification to this call.</p>
 *          </note>
 *          <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, or an AppSync GraphQL API.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWebACLCommandInput} for command's `input` shape.
 * @see {@link UpdateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
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
