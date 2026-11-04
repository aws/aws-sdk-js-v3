// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTableReplicationRequest, PutTableReplicationResponse } from "../models/models_0";
import { PutTableReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTableReplicationCommand}.
 */
export interface PutTableReplicationCommandInput extends PutTableReplicationRequest {}
/**
 * @public
 *
 * The output of {@link PutTableReplicationCommand}.
 */
export interface PutTableReplicationCommandOutput extends PutTableReplicationResponse, __MetadataBearer {}

/**
 * Creates or updates the replication configuration for a specific table. This operation allows you to define table-level replication independently of bucket-level replication, providing granular control over which tables are replicated and where.
 *
 * - **Permissions**
 *
 *   - You must have the `s3tables:PutTableReplication` permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source table and write to all destination tables.
 *   - You must also have the following permissions:
 *
 *     - `s3tables:GetTable` permission on the source table being replicated.
 *     - `s3tables:CreateTable` permission for the destination.
 *     - `s3tables:CreateNamespace` permission for the destination.
 *     - `s3tables:GetTableMaintenanceConfig` permission for the source table.
 *     - `s3tables:PutTableMaintenanceConfig` permission for the destination table.
 *   - You must have `iam:PassRole` permission with condition allowing roles to be passed to `replication.s3tables.amazonaws.com`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableReplicationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableReplicationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // PutTableReplicationRequest
 *   tableArn: "STRING_VALUE", // required
 *   versionToken: "STRING_VALUE",
 *   configuration: { // TableReplicationConfiguration
 *     role: "STRING_VALUE", // required
 *     rules: [ // TableReplicationRules // required
 *       { // TableReplicationRule
 *         destinations: [ // ReplicationDestinations // required
 *           { // ReplicationDestination
 *             destinationTableBucketARN: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new PutTableReplicationCommand(input);
 * const response = await client.send(command);
 * // { // PutTableReplicationResponse
 * //   versionToken: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutTableReplicationCommandInput - {@link PutTableReplicationCommandInput}
 * @returns {@link PutTableReplicationCommandOutput}
 * @see {@link PutTableReplicationCommandInput} for command's `input` shape.
 * @see {@link PutTableReplicationCommandOutput} for command's `response` shape.
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
export class PutTableReplicationCommand extends command<PutTableReplicationCommandInput, PutTableReplicationCommandOutput>(
  _ep0,
  _mw0,
  "PutTableReplication",
  PutTableReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableReplicationRequest;
      output: PutTableReplicationResponse;
    };
    sdk: {
      input: PutTableReplicationCommandInput;
      output: PutTableReplicationCommandOutput;
    };
  };
}
