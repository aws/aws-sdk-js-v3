// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BuildSuggestersRequest, BuildSuggestersResponse } from "../models/models_0";
import { de_BuildSuggestersCommand, se_BuildSuggestersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BuildSuggestersCommand}.
 */
export interface BuildSuggestersCommandInput extends BuildSuggestersRequest {}
/**
 * @public
 *
 * The output of {@link BuildSuggestersCommand}.
 */
export interface BuildSuggestersCommandOutput extends BuildSuggestersResponse, __MetadataBearer {}

/**
 * <p>Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, BuildSuggestersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, BuildSuggestersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // BuildSuggestersRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new BuildSuggestersCommand(input);
 * const response = await client.send(command);
 * // { // BuildSuggestersResponse
 * //   FieldNames: [ // FieldNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BuildSuggestersCommandInput - {@link BuildSuggestersCommandInput}
 * @returns {@link BuildSuggestersCommandOutput}
 * @see {@link BuildSuggestersCommandInput} for command's `input` shape.
 * @see {@link BuildSuggestersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class BuildSuggestersCommand extends $Command
  .classBuilder<
    BuildSuggestersCommandInput,
    BuildSuggestersCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("A9SearchCloudConfigService2013", "BuildSuggesters", {})
  .n("CloudSearchClient", "BuildSuggestersCommand")
  .f(void 0, void 0)
  .ser(se_BuildSuggestersCommand)
  .de(de_BuildSuggestersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BuildSuggestersRequest;
      output: BuildSuggestersResponse;
    };
    sdk: {
      input: BuildSuggestersCommandInput;
      output: BuildSuggestersCommandOutput;
    };
  };
}
