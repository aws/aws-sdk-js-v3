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
} from "@smithy/types";

import { PutLoggingConfigurationRequest, PutLoggingConfigurationResponse } from "../models/models_0";
import { de_PutLoggingConfigurationCommand, se_PutLoggingConfigurationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutLoggingConfigurationCommand}.
 */
export interface PutLoggingConfigurationCommandInput extends PutLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutLoggingConfigurationCommand}.
 */
export interface PutLoggingConfigurationCommandOutput extends PutLoggingConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a
 *          web ACL, according to the configuration provided. </p>
 *          <note>
 *             <p>This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call. </p>
 *             <p>To modify an existing logging configuration, do the following: </p>
 *             <ol>
 *                <li>
 *                   <p>Retrieve it by calling <a>GetLoggingConfiguration</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Update its settings as needed</p>
 *                </li>
 *                <li>
 *                   <p>Provide the complete logging configuration specification to this call</p>
 *                </li>
 *             </ol>
 *          </note>
 *          <note>
 *             <p>You can define one logging destination per web ACL.</p>
 *          </note>
 *          <p>You can access information about the traffic that WAF inspects using the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p>
 *                <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p>
 *                <p>For configuration requirements and pricing information for each destination type, see
 *                  <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a>
 *                  in the <i>WAF Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Associate your logging destination to your web ACL using a
 *                   <code>PutLoggingConfiguration</code> request.</p>
 *             </li>
 *          </ol>
 *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code>
 *           request, WAF creates an additional role or policy that is required to write
 *               logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group.
 *           For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p>
 *          <p>For additional information about web ACL logging, see
 *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a>
 *                in the <i>WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutLoggingConfigurationCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutLoggingConfigurationCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // PutLoggingConfigurationRequest
 *   LoggingConfiguration: { // LoggingConfiguration
 *     ResourceArn: "STRING_VALUE", // required
 *     LogDestinationConfigs: [ // LogDestinationConfigs // required
 *       "STRING_VALUE",
 *     ],
 *     RedactedFields: [ // RedactedFields
 *       { // FieldToMatch
 *         SingleHeader: { // SingleHeader
 *           Name: "STRING_VALUE", // required
 *         },
 *         SingleQueryArgument: { // SingleQueryArgument
 *           Name: "STRING_VALUE", // required
 *         },
 *         AllQueryArguments: {},
 *         UriPath: {},
 *         QueryString: {},
 *         Body: { // Body
 *           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *         },
 *         Method: {},
 *         JsonBody: { // JsonBody
 *           MatchPattern: { // JsonMatchPattern
 *             All: {},
 *             IncludedPaths: [ // JsonPointerPaths
 *               "STRING_VALUE",
 *             ],
 *           },
 *           MatchScope: "ALL" || "KEY" || "VALUE", // required
 *           InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *         },
 *         Headers: { // Headers
 *           MatchPattern: { // HeaderMatchPattern
 *             All: {},
 *             IncludedHeaders: [ // HeaderNames
 *               "STRING_VALUE",
 *             ],
 *             ExcludedHeaders: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           MatchScope: "ALL" || "KEY" || "VALUE", // required
 *           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *         },
 *         Cookies: { // Cookies
 *           MatchPattern: { // CookieMatchPattern
 *             All: {},
 *             IncludedCookies: [ // CookieNames
 *               "STRING_VALUE",
 *             ],
 *             ExcludedCookies: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           MatchScope: "ALL" || "KEY" || "VALUE", // required
 *           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *         },
 *         HeaderOrder: { // HeaderOrder
 *           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *         },
 *       },
 *     ],
 *     ManagedByFirewallManager: true || false,
 *     LoggingFilter: { // LoggingFilter
 *       Filters: [ // Filters // required
 *         { // Filter
 *           Behavior: "KEEP" || "DROP", // required
 *           Requirement: "MEETS_ALL" || "MEETS_ANY", // required
 *           Conditions: [ // Conditions // required
 *             { // Condition
 *               ActionCondition: { // ActionCondition
 *                 Action: "ALLOW" || "BLOCK" || "COUNT" || "CAPTCHA" || "CHALLENGE" || "EXCLUDED_AS_COUNT", // required
 *               },
 *               LabelNameCondition: { // LabelNameCondition
 *                 LabelName: "STRING_VALUE", // required
 *               },
 *             },
 *           ],
 *         },
 *       ],
 *       DefaultBehavior: "KEEP" || "DROP", // required
 *     },
 *   },
 * };
 * const command = new PutLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutLoggingConfigurationResponse
 * //   LoggingConfiguration: { // LoggingConfiguration
 * //     ResourceArn: "STRING_VALUE", // required
 * //     LogDestinationConfigs: [ // LogDestinationConfigs // required
 * //       "STRING_VALUE",
 * //     ],
 * //     RedactedFields: [ // RedactedFields
 * //       { // FieldToMatch
 * //         SingleHeader: { // SingleHeader
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         SingleQueryArgument: { // SingleQueryArgument
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         AllQueryArguments: {},
 * //         UriPath: {},
 * //         QueryString: {},
 * //         Body: { // Body
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //         },
 * //         Method: {},
 * //         JsonBody: { // JsonBody
 * //           MatchPattern: { // JsonMatchPattern
 * //             All: {},
 * //             IncludedPaths: [ // JsonPointerPaths
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //           InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //         },
 * //         Headers: { // Headers
 * //           MatchPattern: { // HeaderMatchPattern
 * //             All: {},
 * //             IncludedHeaders: [ // HeaderNames
 * //               "STRING_VALUE",
 * //             ],
 * //             ExcludedHeaders: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //         },
 * //         Cookies: { // Cookies
 * //           MatchPattern: { // CookieMatchPattern
 * //             All: {},
 * //             IncludedCookies: [ // CookieNames
 * //               "STRING_VALUE",
 * //             ],
 * //             ExcludedCookies: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //         },
 * //         HeaderOrder: { // HeaderOrder
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //         },
 * //       },
 * //     ],
 * //     ManagedByFirewallManager: true || false,
 * //     LoggingFilter: { // LoggingFilter
 * //       Filters: [ // Filters // required
 * //         { // Filter
 * //           Behavior: "KEEP" || "DROP", // required
 * //           Requirement: "MEETS_ALL" || "MEETS_ANY", // required
 * //           Conditions: [ // Conditions // required
 * //             { // Condition
 * //               ActionCondition: { // ActionCondition
 * //                 Action: "ALLOW" || "BLOCK" || "COUNT" || "CAPTCHA" || "CHALLENGE" || "EXCLUDED_AS_COUNT", // required
 * //               },
 * //               LabelNameCondition: { // LabelNameCondition
 * //                 LabelName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       DefaultBehavior: "KEEP" || "DROP", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutLoggingConfigurationCommandInput - {@link PutLoggingConfigurationCommandInput}
 * @returns {@link PutLoggingConfigurationCommandOutput}
 * @see {@link PutLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLoggingConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFLogDestinationPermissionIssueException} (client fault)
 *  <p>The operation failed because you don't have the permissions that your logging
 *          configuration requires. For information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a>
 *          in the <i>WAF Developer Guide</i>.</p>
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
 * @throws {@link WAFServiceLinkedRoleErrorException} (client fault)
 *  <p>WAF is not able to access the service linked role. This can be caused by a
 *          previous <code>PutLoggingConfiguration</code> request, which can lock the service linked
 *          role for about 20 seconds. Please try your request again. The service linked role can also
 *          be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the
 *          role for 15 minutes or more. If you recently made a call to
 *             <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request
 *          again. If you receive this same exception again, you will have to wait additional time
 *          until the role is unlocked.</p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class PutLoggingConfigurationCommand extends $Command<
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
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
  constructor(readonly input: PutLoggingConfigurationCommandInput) {
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
  ): Handler<PutLoggingConfigurationCommandInput, PutLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutLoggingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "PutLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: PutLoggingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutLoggingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLoggingConfigurationCommandOutput> {
    return de_PutLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
