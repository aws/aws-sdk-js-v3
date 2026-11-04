// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableReplicationRequest, GetTableReplicationResponse } from "../models/models_0";
import { GetTableReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the replication configuration for a specific table.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableReplication` permission to use this operation.
 *
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
export class GetTableReplicationCommand extends command<GetTableReplicationCommandInput, GetTableReplicationCommandOutput>(
  _ep0,
  _mw0,
  "GetTableReplication",
  GetTableReplication$
) {
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
