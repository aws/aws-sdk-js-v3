// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceCatalogsRequest, ListResourceCatalogsResponse } from "../models/models_4";
import { de_ListResourceCatalogsCommand, se_ListResourceCatalogsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceCatalogsCommand}.
 */
export interface ListResourceCatalogsCommandInput extends ListResourceCatalogsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceCatalogsCommand}.
 */
export interface ListResourceCatalogsCommandOutput extends ListResourceCatalogsResponse, __MetadataBearer {}

/**
 * <p> Lists Amazon SageMaker Catalogs based on given filters and orders. The maximum number of <code>ResourceCatalog</code>s viewable is 1000. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListResourceCatalogsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListResourceCatalogsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListResourceCatalogsRequest
 *   NameContains: "STRING_VALUE",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "CreationTime",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceCatalogsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceCatalogsResponse
 * //   ResourceCatalogs: [ // ResourceCatalogList
 * //     { // ResourceCatalog
 * //       ResourceCatalogArn: "STRING_VALUE", // required
 * //       ResourceCatalogName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceCatalogsCommandInput - {@link ListResourceCatalogsCommandInput}
 * @returns {@link ListResourceCatalogsCommandOutput}
 * @see {@link ListResourceCatalogsCommandInput} for command's `input` shape.
 * @see {@link ListResourceCatalogsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListResourceCatalogsCommand extends $Command
  .classBuilder<
    ListResourceCatalogsCommandInput,
    ListResourceCatalogsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListResourceCatalogs", {})
  .n("SageMakerClient", "ListResourceCatalogsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceCatalogsCommand)
  .de(de_ListResourceCatalogsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceCatalogsRequest;
      output: ListResourceCatalogsResponse;
    };
    sdk: {
      input: ListResourceCatalogsCommandInput;
      output: ListResourceCatalogsCommandOutput;
    };
  };
}
