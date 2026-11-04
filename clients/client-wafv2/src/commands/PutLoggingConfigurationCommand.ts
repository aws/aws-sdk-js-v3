// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLoggingConfigurationRequest, PutLoggingConfigurationResponse } from "../models/models_0";
import { PutLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Enables the specified LoggingConfiguration, to start logging from a web ACL, according to the configuration provided.
 *
 * If you configure data protection for the web ACL, the protection applies to the data that WAF sends to the logs.
 *
 * > **Note:**
 * >
 * > This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call.
 * >
 * > To modify an existing logging configuration, do the following:
 * >
 * > 1. Retrieve it by calling GetLoggingConfiguration
 * > 2. Update its settings as needed
 * > 3. Provide the complete logging configuration specification to this call
 *
 * > **Note:** You can define one logging destination per web ACL.
 *
 * You can access information about the traffic that WAF inspects using the following steps:
 *
 * 1. Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose.
 *
 *    The name that you give the destination must start with `aws-waf-logs-`. Depending on the type of destination, you might need to configure additional settings or permissions.
 *
 *    For configuration requirements and pricing information for each destination type, see [Logging web ACL traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *WAF Developer Guide*.
 * 2. Associate your logging destination to your web ACL using a `PutLoggingConfiguration` request.
 *
 * When you successfully enable logging using a `PutLoggingConfiguration` request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.
 *
 * For additional information about web ACL logging, see [Logging web ACL traffic information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *WAF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutLoggingConfigurationCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutLoggingConfigurationCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
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
 *         JA3Fingerprint: { // JA3Fingerprint
 *           FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *         },
 *         JA4Fingerprint: { // JA4Fingerprint
 *           FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *         },
 *         UriFragment: { // UriFragment
 *           FallbackBehavior: "MATCH" || "NO_MATCH",
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
 *                 Action: "ALLOW" || "BLOCK" || "COUNT" || "CAPTCHA" || "CHALLENGE" || "MONETIZE" || "EXCLUDED_AS_COUNT", // required
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
 *     LogType: "WAF_LOGS",
 *     LogScope: "CUSTOMER" || "SECURITY_LAKE" || "CLOUDWATCH_TELEMETRY_RULE_MANAGED",
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
 * //         JA3Fingerprint: { // JA3Fingerprint
 * //           FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //         },
 * //         JA4Fingerprint: { // JA4Fingerprint
 * //           FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //         },
 * //         UriFragment: { // UriFragment
 * //           FallbackBehavior: "MATCH" || "NO_MATCH",
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
 * //                 Action: "ALLOW" || "BLOCK" || "COUNT" || "CAPTCHA" || "CHALLENGE" || "MONETIZE" || "EXCLUDED_AS_COUNT", // required
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
 * //     LogType: "WAF_LOGS",
 * //     LogScope: "CUSTOMER" || "SECURITY_LAKE" || "CLOUDWATCH_TELEMETRY_RULE_MANAGED",
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
 * @throws {@link WAFFeatureNotIncludedInPricingPlanException} (client fault)
 *
 * The operation failed because the specified WAF feature isn't supported by the CloudFront pricing plan associated with the web ACL.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation isn't valid.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *
 * WAF couldn’t perform the operation because you exceeded your resource limit. For example, the maximum number of `WebACL` objects that you can create for an Amazon Web Services account. For more information, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
 *
 * @throws {@link WAFLogDestinationPermissionIssueException} (client fault)
 *
 * The operation failed because you don't have the permissions that your logging configuration requires. For information, see [Logging web ACL traffic information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *WAF Developer Guide*.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * WAF couldn’t perform the operation because your resource doesn't exist. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate.
 *
 * @throws {@link WAFOptimisticLockException} (client fault)
 *
 * WAF couldn’t save your changes because you tried to update or delete a resource that has changed since you last retrieved it. Get the resource again, make any changes you need to make to the new copy, and retry your operation.
 *
 * @throws {@link WAFServiceLinkedRoleErrorException} (client fault)
 *
 * WAF is not able to access the service linked role. This can be caused by a previous `PutLoggingConfiguration` request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous `DeleteServiceLinkedRole` request, which can lock the role for 15 minutes or more. If you recently made a call to `DeleteServiceLinkedRole`, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class PutLoggingConfigurationCommand extends command<PutLoggingConfigurationCommandInput, PutLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutLoggingConfiguration",
  PutLoggingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLoggingConfigurationRequest;
      output: PutLoggingConfigurationResponse;
    };
    sdk: {
      input: PutLoggingConfigurationCommandInput;
      output: PutLoggingConfigurationCommandOutput;
    };
  };
}
