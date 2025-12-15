// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTableReplicationStatusRequest, GetTableReplicationStatusResponse } from "../models/models_0";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { GetTableReplicationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableReplicationStatusCommand}.
 */
export interface GetTableReplicationStatusCommandInput extends GetTableReplicationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetTableReplicationStatusCommand}.
 */
export interface GetTableReplicationStatusCommandOutput extends GetTableReplicationStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the replication status for a table, including the status of replication to each destination. This operation provides visibility into replication health and progress.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:GetTableReplicationStatus</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableReplicationStatusCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableReplicationStatusCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableReplicationStatusRequest
 *   tableArn: "STRING_VALUE", // required
 * };
 * const command = new GetTableReplicationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTableReplicationStatusResponse
 * //   sourceTableArn: "STRING_VALUE", // required
 * //   destinations: [ // ReplicationDestinationStatuses // required
 * //     { // ReplicationDestinationStatusModel
 * //       replicationStatus: "pending" || "completed" || "failed", // required
 * //       destinationTableBucketArn: "STRING_VALUE", // required
 * //       destinationTableArn: "STRING_VALUE",
 * //       lastSuccessfulReplicatedUpdate: { // LastSuccessfulReplicatedUpdate
 * //         metadataLocation: "STRING_VALUE", // required
 * //         timestamp: new Date("TIMESTAMP"), // required
 * //       },
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTableReplicationStatusCommandInput - {@link GetTableReplicationStatusCommandInput}
 * @returns {@link GetTableReplicationStatusCommandOutput}
 * @see {@link GetTableReplicationStatusCommandInput} for command's `input` shape.
 * @see {@link GetTableReplicationStatusCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
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
export class GetTableReplicationStatusCommand extends $Command
  .classBuilder<
    GetTableReplicationStatusCommandInput,
    GetTableReplicationStatusCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "GetTableReplicationStatus", {})
  .n("S3TablesClient", "GetTableReplicationStatusCommand")
  .sc(GetTableReplicationStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableReplicationStatusRequest;
      output: GetTableReplicationStatusResponse;
    };
    sdk: {
      input: GetTableReplicationStatusCommandInput;
      output: GetTableReplicationStatusCommandOutput;
    };
  };
}
