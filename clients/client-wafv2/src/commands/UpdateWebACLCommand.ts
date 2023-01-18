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

import {
  UpdateWebACLRequest,
  UpdateWebACLRequestFilterSensitiveLog,
  UpdateWebACLResponse,
  UpdateWebACLResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateWebACLCommand,
  serializeAws_json1_1UpdateWebACLCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface UpdateWebACLCommandInput extends UpdateWebACLRequest {}
export interface UpdateWebACLCommandOutput extends UpdateWebACLResponse, __MetadataBearer {}

/**
 * <p>Updates the specified <a>WebACL</a>. While updating a web ACL, WAF provides
 *          continuous coverage to the resources that you have associated with the web ACL. </p>
 *          <note>
 *             <p>This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. </p>
 *             <p>To modify a web ACL, do the following: </p>
 *             <ol>
 *                <li>
 *                   <p>Retrieve it by calling <a>GetWebACL</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Update its settings as needed</p>
 *                </li>
 *                <li>
 *                   <p>Provide the complete web ACL specification to this call</p>
 *                </li>
 *             </ol>
 *          </note>
 *          <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
 *          <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, or an Amazon Cognito user pool.  </p>
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
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class UpdateWebACLCommand extends $Command<
  UpdateWebACLCommandInput,
  UpdateWebACLCommandOutput,
  WAFV2ClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateWebACLCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateWebACLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWebACLRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateWebACLResponseFilterSensitiveLog,
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
