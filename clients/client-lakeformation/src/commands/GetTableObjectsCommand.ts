// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetTableObjectsRequest, GetTableObjectsResponse } from "../models/models_0";
import { de_GetTableObjectsCommand, se_GetTableObjectsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableObjectsCommand}.
 */
export interface GetTableObjectsCommandInput extends GetTableObjectsRequest {}
/**
 * @public
 *
 * The output of {@link GetTableObjectsCommand}.
 */
export interface GetTableObjectsCommandOutput extends GetTableObjectsResponse, __MetadataBearer {}

/**
 * <p>Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetTableObjectsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetTableObjectsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetTableObjectsRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE",
 *   QueryAsOfTime: new Date("TIMESTAMP"),
 *   PartitionPredicate: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTableObjectsCommand(input);
 * const response = await client.send(command);
 * // { // GetTableObjectsResponse
 * //   Objects: [ // PartitionedTableObjectsList
 * //     { // PartitionObjects
 * //       PartitionValues: [ // PartitionValuesList
 * //         "STRING_VALUE",
 * //       ],
 * //       Objects: [ // TableObjectList
 * //         { // TableObject
 * //           Uri: "STRING_VALUE",
 * //           ETag: "STRING_VALUE",
 * //           Size: Number("long"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTableObjectsCommandInput - {@link GetTableObjectsCommandInput}
 * @returns {@link GetTableObjectsCommandOutput}
 * @see {@link GetTableObjectsCommandInput} for command's `input` shape.
 * @see {@link GetTableObjectsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
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
 * @throws {@link TransactionCommittedException} (client fault)
 *  <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class GetTableObjectsCommand extends $Command
  .classBuilder<
    GetTableObjectsCommandInput,
    GetTableObjectsCommandOutput,
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
  .s("AWSLakeFormation", "GetTableObjects", {})
  .n("LakeFormationClient", "GetTableObjectsCommand")
  .f(void 0, void 0)
  .ser(se_GetTableObjectsCommand)
  .de(de_GetTableObjectsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableObjectsRequest;
      output: GetTableObjectsResponse;
    };
    sdk: {
      input: GetTableObjectsCommandInput;
      output: GetTableObjectsCommandOutput;
    };
  };
}
