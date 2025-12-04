// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import type { ListRulesPackagesRequest, ListRulesPackagesResponse } from "../models/models_0";
import { ListRulesPackages } from "../schemas/schemas_0";

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
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
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
 *
 * @example List rules packages
 * ```javascript
 * // Lists all available Amazon Inspector rules packages.
 * const input = {
 *   maxResults: 123
 * };
 * const command = new ListRulesPackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "1",
 *   rulesPackageArns: [
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-9hgA516p",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-H5hpSawc",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ",
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-vg5GGHSD"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "ListRulesPackages", {})
  .n("InspectorClient", "ListRulesPackagesCommand")
  .sc(ListRulesPackages)
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
