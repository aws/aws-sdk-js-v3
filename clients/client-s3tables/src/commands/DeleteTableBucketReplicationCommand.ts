// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTableBucketReplicationRequest } from "../models/models_0";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { DeleteTableBucketReplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTableBucketReplicationCommand}.
 */
export interface DeleteTableBucketReplicationCommandInput extends DeleteTableBucketReplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableBucketReplicationCommand}.
 */
export interface DeleteTableBucketReplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the replication configuration for a table bucket. After deletion, new table updates will no longer be replicated to destination buckets, though existing replicated tables will remain in destination buckets.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:DeleteTableBucketReplication</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, DeleteTableBucketReplicationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, DeleteTableBucketReplicationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // DeleteTableBucketReplicationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   versionToken: "STRING_VALUE",
 * };
 * const command = new DeleteTableBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableBucketReplicationCommandInput - {@link DeleteTableBucketReplicationCommandInput}
 * @returns {@link DeleteTableBucketReplicationCommandOutput}
 * @see {@link DeleteTableBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteTableBucketReplicationCommandOutput} for command's `response` shape.
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
export class DeleteTableBucketReplicationCommand extends $Command
  .classBuilder<
    DeleteTableBucketReplicationCommandInput,
    DeleteTableBucketReplicationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "DeleteTableBucketReplication", {})
  .n("S3TablesClient", "DeleteTableBucketReplicationCommand")
  .sc(DeleteTableBucketReplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableBucketReplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableBucketReplicationCommandInput;
      output: DeleteTableBucketReplicationCommandOutput;
    };
  };
}
