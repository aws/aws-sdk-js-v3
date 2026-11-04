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
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Associates a LoggingConfiguration with a specified web ACL.
 *
 * You can access information about all traffic that AWS WAF inspects using the following steps:
 *
 * 1. Create an Amazon Kinesis Data Firehose.
 *
 *    Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia).
 *
 *    > **Note:** Do not create the data firehose using a `Kinesis stream` as your source.
 * 2. Associate that firehose to your web ACL using a `PutLoggingConfiguration` request.
 *
 *
 *
 * When you successfully enable logging using a `PutLoggingConfiguration` request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see [Logging Web ACL Traffic Information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *AWS WAF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, PutLoggingConfigurationCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, PutLoggingConfigurationCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // PutLoggingConfigurationRequest
 *   LoggingConfiguration: { // LoggingConfiguration
 *     ResourceArn: "STRING_VALUE", // required
 *     LogDestinationConfigs: [ // LogDestinationConfigs // required
 *       "STRING_VALUE",
 *     ],
 *     RedactedFields: [ // RedactedFields
 *       { // FieldToMatch
 *         Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 *         Data: "STRING_VALUE",
 *       },
 *     ],
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
 * //         Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 * //         Data: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutLoggingConfigurationCommandInput - {@link PutLoggingConfigurationCommandInput}
 * @returns {@link PutLoggingConfigurationCommandOutput}
 * @see {@link PutLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFServiceLinkedRoleErrorException} (client fault)
 *
 * AWS WAF is not able to access the service linked role. This can be caused by a previous `PutLoggingConfiguration` request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous `DeleteServiceLinkedRole` request, which can lock the role for 15 minutes or more. If you recently made a `DeleteServiceLinkedRole`, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
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
