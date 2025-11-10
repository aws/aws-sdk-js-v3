// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNodesRequest, ListNodesResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { ListNodes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNodesCommand}.
 */
export interface ListNodesCommandInput extends ListNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListNodesCommand}.
 */
export interface ListNodesCommandOutput extends ListNodesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListNodesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListNodesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // ListNodesRequest
 *   Category: "STRING_VALUE",
 *   OwnerAccount: "STRING_VALUE",
 *   PackageName: "STRING_VALUE",
 *   PackageVersion: "STRING_VALUE",
 *   PatchVersion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListNodesResponse
 * //   Nodes: [ // NodesList
 * //     { // Node
 * //       NodeId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Category: "STRING_VALUE", // required
 * //       OwnerAccount: "STRING_VALUE",
 * //       PackageName: "STRING_VALUE", // required
 * //       PackageId: "STRING_VALUE", // required
 * //       PackageArn: "STRING_VALUE",
 * //       PackageVersion: "STRING_VALUE", // required
 * //       PatchVersion: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNodesCommandInput - {@link ListNodesCommandInput}
 * @returns {@link ListNodesCommandOutput}
 * @see {@link ListNodesCommandInput} for command's `input` shape.
 * @see {@link ListNodesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class ListNodesCommand extends $Command
  .classBuilder<
    ListNodesCommandInput,
    ListNodesCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "ListNodes", {})
  .n("PanoramaClient", "ListNodesCommand")
  .sc(ListNodes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNodesRequest;
      output: ListNodesResponse;
    };
    sdk: {
      input: ListNodesCommandInput;
      output: ListNodesCommandOutput;
    };
  };
}
