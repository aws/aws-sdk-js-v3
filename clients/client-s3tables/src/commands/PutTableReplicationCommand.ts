// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutTableReplicationRequest, PutTableReplicationResponse } from "../models/models_0";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { PutTableReplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates or updates the replication configuration for a specific table. This operation allows you to define table-level replication independently of bucket-level replication, providing granular control over which tables are replicated and where.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:PutTableReplication</code> permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source table and write to all destination tables.</p> </li> <li> <p>You must also have the following permissions:</p> <ul> <li> <p> <code>s3tables:GetTable</code> permission on the source table being replicated.</p> </li> <li> <p> <code>s3tables:CreateTable</code> permission for the destination.</p> </li> <li> <p> <code>s3tables:CreateNamespace</code> permission for the destination.</p> </li> <li> <p> <code>s3tables:GetTableMaintenanceConfig</code> permission for the source table.</p> </li> <li> <p> <code>s3tables:PutTableMaintenanceConfig</code> permission for the destination table.</p> </li> </ul> </li> <li> <p>You must have <code>iam:PassRole</code> permission with condition allowing roles to be passed to <code>replication.s3tables.amazonaws.com</code>.</p> </li> </ul> </dd> </dl>
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
export class PutTableReplicationCommand extends $Command
  .classBuilder<
    PutTableReplicationCommandInput,
    PutTableReplicationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "PutTableReplication", {})
  .n("S3TablesClient", "PutTableReplicationCommand")
  .sc(PutTableReplication)
  .build() {
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
