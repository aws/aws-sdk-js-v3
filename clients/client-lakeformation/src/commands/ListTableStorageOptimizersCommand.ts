// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListTableStorageOptimizersRequest, ListTableStorageOptimizersResponse } from "../models/models_0";
import { de_ListTableStorageOptimizersCommand, se_ListTableStorageOptimizersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTableStorageOptimizersCommand}.
 */
export interface ListTableStorageOptimizersCommandInput extends ListTableStorageOptimizersRequest {}
/**
 * @public
 *
 * The output of {@link ListTableStorageOptimizersCommand}.
 */
export interface ListTableStorageOptimizersCommandOutput extends ListTableStorageOptimizersResponse, __MetadataBearer {}

/**
 * <p>Returns the configuration of all storage optimizers associated with a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListTableStorageOptimizersCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListTableStorageOptimizersCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LakeFormationClient(config);
 * const input = { // ListTableStorageOptimizersRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   StorageOptimizerType: "COMPACTION" || "GARBAGE_COLLECTION" || "ALL",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTableStorageOptimizersCommand(input);
 * const response = await client.send(command);
 * // { // ListTableStorageOptimizersResponse
 * //   StorageOptimizerList: [ // StorageOptimizerList
 * //     { // StorageOptimizer
 * //       StorageOptimizerType: "COMPACTION" || "GARBAGE_COLLECTION" || "ALL",
 * //       Config: { // StorageOptimizerConfig
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ErrorMessage: "STRING_VALUE",
 * //       Warnings: "STRING_VALUE",
 * //       LastRunDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTableStorageOptimizersCommandInput - {@link ListTableStorageOptimizersCommandInput}
 * @returns {@link ListTableStorageOptimizersCommandOutput}
 * @see {@link ListTableStorageOptimizersCommandInput} for command's `input` shape.
 * @see {@link ListTableStorageOptimizersCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class ListTableStorageOptimizersCommand extends $Command
  .classBuilder<
    ListTableStorageOptimizersCommandInput,
    ListTableStorageOptimizersCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "ListTableStorageOptimizers", {})
  .n("LakeFormationClient", "ListTableStorageOptimizersCommand")
  .f(void 0, void 0)
  .ser(se_ListTableStorageOptimizersCommand)
  .de(de_ListTableStorageOptimizersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTableStorageOptimizersRequest;
      output: ListTableStorageOptimizersResponse;
    };
    sdk: {
      input: ListTableStorageOptimizersCommandInput;
      output: ListTableStorageOptimizersCommandOutput;
    };
  };
}
