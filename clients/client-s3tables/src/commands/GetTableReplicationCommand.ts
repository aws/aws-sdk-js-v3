// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTableReplicationRequest, GetTableReplicationResponse } from "../models/models_0";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { GetTableReplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableReplicationCommand}.
 */
export interface GetTableReplicationCommandInput extends GetTableReplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetTableReplicationCommand}.
 */
export interface GetTableReplicationCommandOutput extends GetTableReplicationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the replication configuration for a specific table.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:GetTableReplication</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableReplicationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableReplicationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableReplicationRequest
 *   tableArn: "STRING_VALUE", // required
 * };
 * const command = new GetTableReplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetTableReplicationResponse
 * //   versionToken: "STRING_VALUE", // required
 * //   configuration: { // TableReplicationConfiguration
 * //     role: "STRING_VALUE", // required
 * //     rules: [ // TableReplicationRules // required
 * //       { // TableReplicationRule
 * //         destinations: [ // ReplicationDestinations // required
 * //           { // ReplicationDestination
 * //             destinationTableBucketARN: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableReplicationCommandInput - {@link GetTableReplicationCommandInput}
 * @returns {@link GetTableReplicationCommandOutput}
 * @see {@link GetTableReplicationCommandInput} for command's `input` shape.
 * @see {@link GetTableReplicationCommandOutput} for command's `response` shape.
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
export class GetTableReplicationCommand extends $Command
  .classBuilder<
    GetTableReplicationCommandInput,
    GetTableReplicationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "GetTableReplication", {})
  .n("S3TablesClient", "GetTableReplicationCommand")
  .sc(GetTableReplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableReplicationRequest;
      output: GetTableReplicationResponse;
    };
    sdk: {
      input: GetTableReplicationCommandInput;
      output: GetTableReplicationCommandOutput;
    };
  };
}
