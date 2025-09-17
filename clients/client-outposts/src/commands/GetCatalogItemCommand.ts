// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCatalogItemInput, GetCatalogItemOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_GetCatalogItemCommand, se_GetCatalogItemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCatalogItemCommand}.
 */
export interface GetCatalogItemCommandInput extends GetCatalogItemInput {}
/**
 * @public
 *
 * The output of {@link GetCatalogItemCommand}.
 */
export interface GetCatalogItemCommandOutput extends GetCatalogItemOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified catalog item.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetCatalogItemCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetCatalogItemCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetCatalogItemInput
 *   CatalogItemId: "STRING_VALUE", // required
 * };
 * const command = new GetCatalogItemCommand(input);
 * const response = await client.send(command);
 * // { // GetCatalogItemOutput
 * //   CatalogItem: { // CatalogItem
 * //     CatalogItemId: "STRING_VALUE",
 * //     ItemStatus: "AVAILABLE" || "DISCONTINUED",
 * //     EC2Capacities: [ // EC2CapacityListDefinition
 * //       { // EC2Capacity
 * //         Family: "STRING_VALUE",
 * //         MaxSize: "STRING_VALUE",
 * //         Quantity: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PowerKva: Number("float"),
 * //     WeightLbs: Number("int"),
 * //     SupportedUplinkGbps: [ // SupportedUplinkGbpsListDefinition
 * //       Number("int"),
 * //     ],
 * //     SupportedStorage: [ // SupportedStorageList
 * //       "EBS" || "S3",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCatalogItemCommandInput - {@link GetCatalogItemCommandInput}
 * @returns {@link GetCatalogItemCommandOutput}
 * @see {@link GetCatalogItemCommandInput} for command's `input` shape.
 * @see {@link GetCatalogItemCommandOutput} for command's `response` shape.
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
export class GetCatalogItemCommand extends $Command
  .classBuilder<
    GetCatalogItemCommandInput,
    GetCatalogItemCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "GetCatalogItem", {})
  .n("OutpostsClient", "GetCatalogItemCommand")
  .f(void 0, void 0)
  .ser(se_GetCatalogItemCommand)
  .de(de_GetCatalogItemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCatalogItemInput;
      output: GetCatalogItemOutput;
    };
    sdk: {
      input: GetCatalogItemCommandInput;
      output: GetCatalogItemCommandOutput;
    };
  };
}
