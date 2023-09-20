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

import { DescribeManagedRuleGroupRequest, DescribeManagedRuleGroupResponse } from "../models/models_0";
import { de_DescribeManagedRuleGroupCommand, se_DescribeManagedRuleGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedRuleGroupCommand}.
 */
export interface DescribeManagedRuleGroupCommandInput extends DescribeManagedRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedRuleGroupCommand}.
 */
export interface DescribeManagedRuleGroupCommandOutput extends DescribeManagedRuleGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides high-level information for a managed rule group, including descriptions of the rules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DescribeManagedRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DescribeManagedRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // DescribeManagedRuleGroupRequest
 *   VendorName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   VersionName: "STRING_VALUE",
 * };
 * const command = new DescribeManagedRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedRuleGroupResponse
 * //   VersionName: "STRING_VALUE",
 * //   SnsTopicArn: "STRING_VALUE",
 * //   Capacity: Number("long"),
 * //   Rules: [ // RuleSummaries
 * //     { // RuleSummary
 * //       Name: "STRING_VALUE",
 * //       Action: { // RuleAction
 * //         Block: { // BlockAction
 * //           CustomResponse: { // CustomResponse
 * //             ResponseCode: Number("int"), // required
 * //             CustomResponseBodyKey: "STRING_VALUE",
 * //             ResponseHeaders: [ // CustomHTTPHeaders
 * //               { // CustomHTTPHeader
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Allow: { // AllowAction
 * //           CustomRequestHandling: { // CustomRequestHandling
 * //             InsertHeaders: [ // required
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Count: { // CountAction
 * //           CustomRequestHandling: {
 * //             InsertHeaders: [ // required
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Captcha: { // CaptchaAction
 * //           CustomRequestHandling: {
 * //             InsertHeaders: [ // required
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Challenge: { // ChallengeAction
 * //           CustomRequestHandling: {
 * //             InsertHeaders: [ // required
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   LabelNamespace: "STRING_VALUE",
 * //   AvailableLabels: [ // LabelSummaries
 * //     { // LabelSummary
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ConsumedLabels: [
 * //     {
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeManagedRuleGroupCommandInput - {@link DescribeManagedRuleGroupCommandInput}
 * @returns {@link DescribeManagedRuleGroupCommandOutput}
 * @see {@link DescribeManagedRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFExpiredManagedRuleGroupVersionException} (client fault)
 *  <p>The operation failed because the specified version for the managed rule group has
 *          expired. You can retrieve the available versions for the managed rule group by calling
 *             <a>ListAvailableManagedRuleGroupVersions</a>.</p>
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
 * @throws {@link WAFInvalidResourceException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you requested isn’t
 *          valid. Check the resource, and try again.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class DescribeManagedRuleGroupCommand extends $Command<
  DescribeManagedRuleGroupCommandInput,
  DescribeManagedRuleGroupCommandOutput,
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
  constructor(readonly input: DescribeManagedRuleGroupCommandInput) {
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
  ): Handler<DescribeManagedRuleGroupCommandInput, DescribeManagedRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeManagedRuleGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "DescribeManagedRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_20190729",
        operation: "DescribeManagedRuleGroup",
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
  private serialize(input: DescribeManagedRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeManagedRuleGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeManagedRuleGroupCommandOutput> {
    return de_DescribeManagedRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
