// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTableBucketReplicationRequest, PutTableBucketReplicationResponse } from "../models/models_0";
import { PutTableBucketReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates the replication configuration for a table bucket. This operation defines how tables in the source bucket are replicated to destination buckets. Replication helps ensure data availability and disaster recovery across regions or accounts.
 *
 * - **Permissions**
 *
 *   - You must have the `s3tables:PutTableBucketReplication` permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source bucket and write permissions to all destination buckets.
 *   - You must also have the following permissions:
 *
 *     - `s3tables:GetTable` permission on the source table.
 *     - `s3tables:ListTables` permission on the bucket containing the table.
 *     - `s3tables:CreateTable` permission for the destination.
 *     - `s3tables:CreateNamespace` permission for the destination.
 *     - `s3tables:GetTableMaintenanceConfig` permission for the source bucket.
 *     - `s3tables:PutTableMaintenanceConfig` permission for the destination bucket.
 *   - You must have `iam:PassRole` permission with condition allowing roles to be passed to `replication.s3tables.amazonaws.com`.
 *
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
 *
 * The action cannot be performed because you do not have the required permission.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is invalid or malformed.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because there is a conflict with a previous write. You can retry the request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request failed due to an internal server error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link S3TablesServiceException}
 *
 * Base exception class for all service exceptions from S3Tables service.
 *
 * @public
 */
export class PutTableBucketReplicationCommand extends command<PutTableBucketReplicationCommandInput, PutTableBucketReplicationCommandOutput>(
  _ep0,
  _mw0,
  "PutTableBucketReplication",
  PutTableBucketReplication$
) {
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
