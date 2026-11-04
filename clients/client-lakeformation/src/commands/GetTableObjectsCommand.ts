// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableObjectsRequest, GetTableObjectsResponse } from "../models/models_0";
import { GetTableObjects$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
 *
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
 *
 * A specified entity does not exist.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *
 * Contains details about an error related to a resource which is not ready for a transaction.
 *
 * @throws {@link TransactionCanceledException} (client fault)
 *
 * Contains details about an error related to a transaction that was cancelled.
 *
 * @throws {@link TransactionCommittedException} (client fault)
 *
 * Contains details about an error where the specified transaction has already been committed and cannot be used for `UpdateTableObjects`.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class GetTableObjectsCommand extends command<GetTableObjectsCommandInput, GetTableObjectsCommandOutput>(
  _ep0,
  _mw0,
  "GetTableObjects",
  GetTableObjects$
) {
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
