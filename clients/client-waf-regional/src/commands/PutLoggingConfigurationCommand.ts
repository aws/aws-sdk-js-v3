// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutLoggingConfigurationRequest, PutLoggingConfigurationResponse } from "../models/models_0";
import { de_PutLoggingConfigurationCommand, se_PutLoggingConfigurationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p>
 * 	        <p>You can access information about all traffic that AWS WAF inspects using the following
 *          steps:</p>
 * 	        <ol>
 *             <li>
 *                <p>Create an Amazon Kinesis Data
 *                Firehose. </p>
 * 	              <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p>
 * 	              <note>
 *                   <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p>
 *             </li>
 *          </ol>
 *
 *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose.  For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, PutLoggingConfigurationCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, PutLoggingConfigurationCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
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
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceLinkedRoleErrorException} (client fault)
 *  <p>AWS WAF is not able to access the service linked role. This can be caused by a previous <code>PutLoggingConfiguration</code> request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the role for 15 minutes or more. If you recently made a <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.</p>
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @public
 */
export class PutLoggingConfigurationCommand extends $Command
  .classBuilder<
    PutLoggingConfigurationCommandInput,
    PutLoggingConfigurationCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_Regional_20161128", "PutLoggingConfiguration", {})
  .n("WAFRegionalClient", "PutLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutLoggingConfigurationCommand)
  .de(de_PutLoggingConfigurationCommand)
  .build() {
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
