// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/models_0";
import { de_UpdateIPSetCommand, se_UpdateIPSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateIPSetCommand}.
 */
export interface UpdateIPSetCommandInput extends UpdateIPSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIPSetCommand}.
 */
export interface UpdateIPSetCommandOutput extends UpdateIPSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified <a>IPSet</a>. </p>
 *          <note>
 *             <p>This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call. </p>
 *             <p>To modify an IP set, do the following: </p>
 *             <ol>
 *                <li>
 *                   <p>Retrieve it by calling <a>GetIPSet</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Update its settings as needed</p>
 *                </li>
 *                <li>
 *                   <p>Provide the complete IP set specification to this call</p>
 *                </li>
 *             </ol>
 *          </note>
 *          <p>
 *             <b>Temporary inconsistencies during updates</b>
 *          </p>
 *          <p>When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. </p>
 *          <p>The following are examples of the temporary inconsistencies that you might notice during change propagation: </p>
 *          <ul>
 *             <li>
 *                <p>After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. </p>
 *             </li>
 *             <li>
 *                <p>After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.</p>
 *             </li>
 *             <li>
 *                <p>After you change a rule action setting, you might see the old action in some places and the new action in others. </p>
 *             </li>
 *             <li>
 *                <p>After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateIPSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // UpdateIPSetRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Addresses: [ // IPAddresses // required
 *     "STRING_VALUE",
 *   ],
 *   LockToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateIPSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIPSetResponse
 * //   NextLockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateIPSetCommandInput - {@link UpdateIPSetCommandInput}
 * @returns {@link UpdateIPSetCommandOutput}
 * @see {@link UpdateIPSetCommandInput} for command's `input` shape.
 * @see {@link UpdateIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFDuplicateItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you tried to save is
 *          a duplicate of an existing one.</p>
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFOptimisticLockException} (client fault)
 *  <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class UpdateIPSetCommand extends $Command<
  UpdateIPSetCommandInput,
  UpdateIPSetCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UpdateIPSetCommandInput) {
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
  ): Handler<UpdateIPSetCommandInput, UpdateIPSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateIPSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateIPSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_20190729",
        operation: "UpdateIPSet",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateIPSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateIPSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateIPSetCommandOutput> {
    return de_UpdateIPSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
