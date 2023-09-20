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

import {
  UpdateManagedRuleSetVersionExpiryDateRequest,
  UpdateManagedRuleSetVersionExpiryDateResponse,
} from "../models/models_0";
import {
  de_UpdateManagedRuleSetVersionExpiryDateCommand,
  se_UpdateManagedRuleSetVersionExpiryDateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateManagedRuleSetVersionExpiryDateCommand}.
 */
export interface UpdateManagedRuleSetVersionExpiryDateCommandInput
  extends UpdateManagedRuleSetVersionExpiryDateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateManagedRuleSetVersionExpiryDateCommand}.
 */
export interface UpdateManagedRuleSetVersionExpiryDateCommandOutput
  extends UpdateManagedRuleSetVersionExpiryDateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the expiration information for your managed rule set. Use this to initiate the
 *          expiration of a managed rule group version. After you initiate expiration for a version,
 *          WAF excludes it from the response to <a>ListAvailableManagedRuleGroupVersions</a> for the managed rule group. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateManagedRuleSetVersionExpiryDateCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateManagedRuleSetVersionExpiryDateCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // UpdateManagedRuleSetVersionExpiryDateRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 *   LockToken: "STRING_VALUE", // required
 *   VersionToExpire: "STRING_VALUE", // required
 *   ExpiryTimestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new UpdateManagedRuleSetVersionExpiryDateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateManagedRuleSetVersionExpiryDateResponse
 * //   ExpiringVersion: "STRING_VALUE",
 * //   ExpiryTimestamp: new Date("TIMESTAMP"),
 * //   NextLockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateManagedRuleSetVersionExpiryDateCommandInput - {@link UpdateManagedRuleSetVersionExpiryDateCommandInput}
 * @returns {@link UpdateManagedRuleSetVersionExpiryDateCommandOutput}
 * @see {@link UpdateManagedRuleSetVersionExpiryDateCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedRuleSetVersionExpiryDateCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
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
export class UpdateManagedRuleSetVersionExpiryDateCommand extends $Command<
  UpdateManagedRuleSetVersionExpiryDateCommandInput,
  UpdateManagedRuleSetVersionExpiryDateCommandOutput,
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
  constructor(readonly input: UpdateManagedRuleSetVersionExpiryDateCommandInput) {
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
  ): Handler<UpdateManagedRuleSetVersionExpiryDateCommandInput, UpdateManagedRuleSetVersionExpiryDateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateManagedRuleSetVersionExpiryDateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateManagedRuleSetVersionExpiryDateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_20190729",
        operation: "UpdateManagedRuleSetVersionExpiryDate",
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
  private serialize(
    input: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateManagedRuleSetVersionExpiryDateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput> {
    return de_UpdateManagedRuleSetVersionExpiryDateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
