// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { UpdateTableObjectsRequest, UpdateTableObjectsResponse } from "../models/models_0";
import { de_UpdateTableObjectsCommand, se_UpdateTableObjectsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTableObjectsCommand}.
 */
export interface UpdateTableObjectsCommandInput extends UpdateTableObjectsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableObjectsCommand}.
 */
export interface UpdateTableObjectsCommandOutput extends UpdateTableObjectsResponse, __MetadataBearer {}

/**
 * <p>Updates the manifest of Amazon S3 objects that make up the specified governed table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateTableObjectsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateTableObjectsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateTableObjectsRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE",
 *   WriteOperations: [ // WriteOperationList // required
 *     { // WriteOperation
 *       AddObject: { // AddObjectInput
 *         Uri: "STRING_VALUE", // required
 *         ETag: "STRING_VALUE", // required
 *         Size: Number("long"), // required
 *         PartitionValues: [ // PartitionValuesList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       DeleteObject: { // DeleteObjectInput
 *         Uri: "STRING_VALUE", // required
 *         ETag: "STRING_VALUE",
 *         PartitionValues: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateTableObjectsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTableObjectsCommandInput - {@link UpdateTableObjectsCommandInput}
 * @returns {@link UpdateTableObjectsCommandOutput}
 * @see {@link UpdateTableObjectsCommandInput} for command's `input` shape.
 * @see {@link UpdateTableObjectsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>Contains details about an error related to a resource which is not ready for a transaction.</p>
 *
 * @throws {@link TransactionCanceledException} (client fault)
 *  <p>Contains details about an error related to a transaction that was cancelled.</p>
 *
 * @throws {@link TransactionCommitInProgressException} (client fault)
 *  <p>Contains details about an error related to a transaction commit that was in progress.</p>
 *
 * @throws {@link TransactionCommittedException} (client fault)
 *  <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class UpdateTableObjectsCommand extends $Command
  .classBuilder<
    UpdateTableObjectsCommandInput,
    UpdateTableObjectsCommandOutput,
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
  .s("AWSLakeFormation", "UpdateTableObjects", {})
  .n("LakeFormationClient", "UpdateTableObjectsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTableObjectsCommand)
  .de(de_UpdateTableObjectsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTableObjectsRequest;
      output: {};
    };
    sdk: {
      input: UpdateTableObjectsCommandInput;
      output: UpdateTableObjectsCommandOutput;
    };
  };
}
