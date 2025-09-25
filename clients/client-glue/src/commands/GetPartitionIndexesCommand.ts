// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPartitionIndexesRequest, GetPartitionIndexesResponse } from "../models/models_2";
import { GetPartitionIndexes } from "../schemas/schemas_14_Integration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPartitionIndexesCommand}.
 */
export interface GetPartitionIndexesCommandInput extends GetPartitionIndexesRequest {}
/**
 * @public
 *
 * The output of {@link GetPartitionIndexesCommand}.
 */
export interface GetPartitionIndexesCommandOutput extends GetPartitionIndexesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the partition indexes associated with a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionIndexesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionIndexesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetPartitionIndexesRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetPartitionIndexesCommand(input);
 * const response = await client.send(command);
 * // { // GetPartitionIndexesResponse
 * //   PartitionIndexDescriptorList: [ // PartitionIndexDescriptorList
 * //     { // PartitionIndexDescriptor
 * //       IndexName: "STRING_VALUE", // required
 * //       Keys: [ // KeySchemaElementList // required
 * //         { // KeySchemaElement
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       IndexStatus: "CREATING" || "ACTIVE" || "DELETING" || "FAILED", // required
 * //       BackfillErrors: [ // BackfillErrors
 * //         { // BackfillError
 * //           Code: "ENCRYPTED_PARTITION_ERROR" || "INTERNAL_ERROR" || "INVALID_PARTITION_TYPE_DATA_ERROR" || "MISSING_PARTITION_VALUE_ERROR" || "UNSUPPORTED_PARTITION_CHARACTER_ERROR",
 * //           Partitions: [ // BackfillErroredPartitionsList
 * //             { // PartitionValueList
 * //               Values: [ // ValueStringList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPartitionIndexesCommandInput - {@link GetPartitionIndexesCommandInput}
 * @returns {@link GetPartitionIndexesCommandOutput}
 * @see {@link GetPartitionIndexesCommandInput} for command's `input` shape.
 * @see {@link GetPartitionIndexesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetPartitionIndexesCommand extends $Command
  .classBuilder<
    GetPartitionIndexesCommandInput,
    GetPartitionIndexesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetPartitionIndexes", {})
  .n("GlueClient", "GetPartitionIndexesCommand")
  .sc(GetPartitionIndexes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPartitionIndexesRequest;
      output: GetPartitionIndexesResponse;
    };
    sdk: {
      input: GetPartitionIndexesCommandInput;
      output: GetPartitionIndexesCommandOutput;
    };
  };
}
