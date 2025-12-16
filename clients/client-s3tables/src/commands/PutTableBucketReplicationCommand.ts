// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutTableBucketReplicationRequest, PutTableBucketReplicationResponse } from "../models/models_0";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { PutTableBucketReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTableBucketReplicationCommand}.
 */
export interface PutTableBucketReplicationCommandInput extends PutTableBucketReplicationRequest {}
/**
 * @public
 *
 * The output of {@link PutTableBucketReplicationCommand}.
 */
export interface PutTableBucketReplicationCommandOutput extends PutTableBucketReplicationResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the replication configuration for a table bucket. This operation defines how tables in the source bucket are replicated to destination buckets. Replication helps ensure data availability and disaster recovery across regions or accounts.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:PutTableBucketReplication</code> permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source bucket and write permissions to all destination buckets.</p> </li> <li> <p>You must also have the following permissions:</p> <ul> <li> <p> <code>s3tables:GetTable</code> permission on the source table.</p> </li> <li> <p> <code>s3tables:ListTables</code> permission on the bucket containing the table.</p> </li> <li> <p> <code>s3tables:CreateTable</code> permission for the destination.</p> </li> <li> <p> <code>s3tables:CreateNamespace</code> permission for the destination.</p> </li> <li> <p> <code>s3tables:GetTableMaintenanceConfig</code> permission for the source bucket.</p> </li> <li> <p> <code>s3tables:PutTableMaintenanceConfig</code> permission for the destination bucket.</p> </li> </ul> </li> <li> <p>You must have <code>iam:PassRole</code> permission with condition allowing roles to be passed to <code>replication.s3tables.amazonaws.com</code>.</p> </li> </ul> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableBucketReplicationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableBucketReplicationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // PutTableBucketReplicationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   versionToken: "STRING_VALUE",
 *   configuration: { // TableBucketReplicationConfiguration
 *     role: "STRING_VALUE", // required
 *     rules: [ // TableBucketReplicationRules // required
 *       { // TableBucketReplicationRule
 *         destinations: [ // ReplicationDestinations // required
 *           { // ReplicationDestination
 *             destinationTableBucketARN: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new PutTableBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // { // PutTableBucketReplicationResponse
 * //   versionToken: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutTableBucketReplicationCommandInput - {@link PutTableBucketReplicationCommandInput}
 * @returns {@link PutTableBucketReplicationCommandOutput}
 * @see {@link PutTableBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link PutTableBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The action cannot be performed because you do not have the required permission.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the request.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 *
 * @public
 */
export class PutTableBucketReplicationCommand extends $Command
  .classBuilder<
    PutTableBucketReplicationCommandInput,
    PutTableBucketReplicationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "PutTableBucketReplication", {})
  .n("S3TablesClient", "PutTableBucketReplicationCommand")
  .sc(PutTableBucketReplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableBucketReplicationRequest;
      output: PutTableBucketReplicationResponse;
    };
    sdk: {
      input: PutTableBucketReplicationCommandInput;
      output: PutTableBucketReplicationCommandOutput;
    };
  };
}
