// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeQuerySuggestionsConfigRequest, DescribeQuerySuggestionsConfigResponse } from "../models/models_0";
import { DescribeQuerySuggestionsConfig } from "../schemas/schemas_6_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeQuerySuggestionsConfigCommand}.
 */
export interface DescribeQuerySuggestionsConfigCommandInput extends DescribeQuerySuggestionsConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQuerySuggestionsConfigCommand}.
 */
export interface DescribeQuerySuggestionsConfigCommandOutput
  extends DescribeQuerySuggestionsConfigResponse,
    __MetadataBearer {}

/**
 * <p>Gets information on the settings of query suggestions for an index.</p>
 *          <p>This is used to check the current settings applied
 *             to query suggestions.</p>
 *          <p>
 *             <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // import type { KendraClientConfig } from "@aws-sdk/client-kendra";
 * const config = {}; // type is KendraClientConfig
 * const client = new KendraClient(config);
 * const input = { // DescribeQuerySuggestionsConfigRequest
 *   IndexId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQuerySuggestionsConfigResponse
 * //   Mode: "ENABLED" || "LEARN_ONLY",
 * //   Status: "ACTIVE" || "UPDATING",
 * //   QueryLogLookBackWindowInDays: Number("int"),
 * //   IncludeQueriesWithoutUserInformation: true || false,
 * //   MinimumNumberOfQueryingUsers: Number("int"),
 * //   MinimumQueryCount: Number("int"),
 * //   LastSuggestionsBuildTime: new Date("TIMESTAMP"),
 * //   LastClearTime: new Date("TIMESTAMP"),
 * //   TotalSuggestionsCount: Number("int"),
 * //   AttributeSuggestionsConfig: { // AttributeSuggestionsDescribeConfig
 * //     SuggestableConfigList: [ // SuggestableConfigList
 * //       { // SuggestableConfig
 * //         AttributeName: "STRING_VALUE",
 * //         Suggestable: true || false,
 * //       },
 * //     ],
 * //     AttributeSuggestionsMode: "ACTIVE" || "INACTIVE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeQuerySuggestionsConfigCommandInput - {@link DescribeQuerySuggestionsConfigCommandInput}
 * @returns {@link DescribeQuerySuggestionsConfigCommandOutput}
 * @see {@link DescribeQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 *
 * @public
 */
export class DescribeQuerySuggestionsConfigCommand extends $Command
  .classBuilder<
    DescribeQuerySuggestionsConfigCommandInput,
    DescribeQuerySuggestionsConfigCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSKendraFrontendService", "DescribeQuerySuggestionsConfig", {})
  .n("KendraClient", "DescribeQuerySuggestionsConfigCommand")
  .sc(DescribeQuerySuggestionsConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQuerySuggestionsConfigRequest;
      output: DescribeQuerySuggestionsConfigResponse;
    };
    sdk: {
      input: DescribeQuerySuggestionsConfigCommandInput;
      output: DescribeQuerySuggestionsConfigCommandOutput;
    };
  };
}
