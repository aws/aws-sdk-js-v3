// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLoggingConfigurationRequest, GetLoggingConfigurationResponse } from "../models/models_0";
import { GetLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLoggingConfigurationCommand}.
 */
export interface GetLoggingConfigurationCommandInput extends GetLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetLoggingConfigurationCommand}.
 */
export interface GetLoggingConfigurationCommandOutput extends GetLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetLoggingConfigurationCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetLoggingConfigurationCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // GetLoggingConfigurationRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetLoggingConfigurationResponse
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
 * @param GetLoggingConfigurationCommandInput - {@link GetLoggingConfigurationCommandInput}
 * @returns {@link GetLoggingConfigurationCommandOutput}
 * @see {@link GetLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 *
 * @public
 */
export class GetLoggingConfigurationCommand extends command<GetLoggingConfigurationCommandInput, GetLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetLoggingConfiguration",
  GetLoggingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoggingConfigurationRequest;
      output: GetLoggingConfigurationResponse;
    };
    sdk: {
      input: GetLoggingConfigurationCommandInput;
      output: GetLoggingConfigurationCommandOutput;
    };
  };
}
