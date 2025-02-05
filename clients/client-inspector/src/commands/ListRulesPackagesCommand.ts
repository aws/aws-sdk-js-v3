// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListRulesPackagesRequest, ListRulesPackagesResponse } from "../models/models_0";
import { de_ListRulesPackagesCommand, se_ListRulesPackagesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRulesPackagesCommand}.
 */
export interface ListRulesPackagesCommandInput extends ListRulesPackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListRulesPackagesCommand}.
 */
export interface ListRulesPackagesCommandOutput extends ListRulesPackagesResponse, __MetadataBearer {}

/**
 * <p>Lists all available Amazon Inspector rules packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new InspectorClient(config);
 * const input = { // ListRulesPackagesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRulesPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesPackagesResponse
 * //   rulesPackageArns: [ // ListReturnedArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesPackagesCommandInput - {@link ListRulesPackagesCommandInput}
 * @returns {@link ListRulesPackagesCommandOutput}
 * @see {@link ListRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link ListRulesPackagesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 * @example List rules packages
 * ```javascript
 * // Lists all available Amazon Inspector rules packages.
 * const input = {
 *   "maxResults": 123
 * };
 * const command = new ListRulesPackagesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "nextToken": "1",
 *   "rulesPackageArns": [
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-9hgA516p",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-H5hpSawc",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-vg5GGHSD"
 *   ]
 * }
 * *\/
 * // example id: list-rules-packages-1481066954883
 * ```
 *
 */
export class ListRulesPackagesCommand extends $Command
  .classBuilder<
    ListRulesPackagesCommandInput,
    ListRulesPackagesCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "ListRulesPackages", {})
  .n("InspectorClient", "ListRulesPackagesCommand")
  .f(void 0, void 0)
  .ser(se_ListRulesPackagesCommand)
  .de(de_ListRulesPackagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRulesPackagesRequest;
      output: ListRulesPackagesResponse;
    };
    sdk: {
      input: ListRulesPackagesCommandInput;
      output: ListRulesPackagesCommandOutput;
    };
  };
}
