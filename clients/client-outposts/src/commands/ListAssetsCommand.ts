// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssetsInput, ListAssetsOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { ListAssets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssetsCommand}.
 */
export interface ListAssetsCommandInput extends ListAssetsInput {}
/**
 * @public
 *
 * The output of {@link ListAssetsCommand}.
 */
export interface ListAssetsCommandOutput extends ListAssetsOutput, __MetadataBearer {}

/**
 * <p>Lists the hardware assets for the specified Outpost.</p>
 *          <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 *  all of the specified filters. For a filter where you can specify multiple values, the results include
 *  items that match any of the values that you specify for the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListAssetsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListAssetsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // ListAssetsInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   HostIdFilter: [ // HostIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StatusFilter: [ // StatusList
 *     "ACTIVE" || "RETIRING" || "ISOLATED",
 *   ],
 * };
 * const command = new ListAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetsOutput
 * //   Assets: [ // AssetListDefinition
 * //     { // AssetInfo
 * //       AssetId: "STRING_VALUE",
 * //       RackId: "STRING_VALUE",
 * //       AssetType: "COMPUTE",
 * //       ComputeAttributes: { // ComputeAttributes
 * //         HostId: "STRING_VALUE",
 * //         State: "ACTIVE" || "ISOLATED" || "RETIRING",
 * //         InstanceFamilies: [ // InstanceFamilies
 * //           "STRING_VALUE",
 * //         ],
 * //         InstanceTypeCapacities: [ // AssetInstanceCapacityList
 * //           { // AssetInstanceTypeCapacity
 * //             InstanceType: "STRING_VALUE", // required
 * //             Count: Number("int"), // required
 * //           },
 * //         ],
 * //         MaxVcpus: Number("int"),
 * //       },
 * //       AssetLocation: { // AssetLocation
 * //         RackElevation: Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetsCommandInput - {@link ListAssetsCommandInput}
 * @returns {@link ListAssetsCommandOutput}
 * @see {@link ListAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssetsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class ListAssetsCommand extends $Command
  .classBuilder<
    ListAssetsCommandInput,
    ListAssetsCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "ListAssets", {})
  .n("OutpostsClient", "ListAssetsCommand")
  .sc(ListAssets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetsInput;
      output: ListAssetsOutput;
    };
    sdk: {
      input: ListAssetsCommandInput;
      output: ListAssetsCommandOutput;
    };
  };
}
