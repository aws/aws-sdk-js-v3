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
  DeleteWebACLRequest,
  DeleteWebACLRequestFilterSensitiveLog,
  DeleteWebACLResponse,
  DeleteWebACLResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteWebACLCommand,
  serializeAws_json1_1DeleteWebACLCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface DeleteWebACLCommandInput extends DeleteWebACLRequest {}
export interface DeleteWebACLCommandOutput extends DeleteWebACLResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified <a>WebACL</a>. </p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified
 *             <a>WebACL</a>. </p>
 *          <note>
 *             <p>Before deleting any web ACL, first disassociate it from all resources.</p>
 *             <ul>
 *                <li>
 *                   <p>To retrieve a list of the resources that are associated with a web ACL, use the
 *                   following calls:</p>
 *                   <ul>
 *                      <li>
 *                         <p>For regional resources, call <a>ListResourcesForWebACL</a>.</p>
 *                      </li>
 *                      <li>
 *                         <p>For Amazon CloudFront distributions, use the CloudFront call
 *                            <code>ListDistributionsByWebACLId</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html">ListDistributionsByWebACLId</a>.</p>
 *                      </li>
 *                   </ul>
 *                </li>
 *                <li>
 *                   <p>To disassociate a resource from a web ACL, use the following calls:</p>
 *                   <ul>
 *                      <li>
 *                         <p>For regional resources, call <a>DisassociateWebACL</a>.</p>
 *                      </li>
 *                      <li>
 *                         <p>For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call
 *                            <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
 *                      </li>
 *                   </ul>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebACLCommandInput} for command's `input` shape.
 * @see {@link DeleteWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class DeleteWebACLCommand extends $Command<
  DeleteWebACLCommandInput,
  DeleteWebACLCommandOutput,
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

  constructor(readonly input: DeleteWebACLCommandInput) {
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
  ): Handler<DeleteWebACLCommandInput, DeleteWebACLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteWebACLCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "DeleteWebACLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWebACLRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteWebACLResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWebACLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWebACLCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWebACLCommandOutput> {
    return deserializeAws_json1_1DeleteWebACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
