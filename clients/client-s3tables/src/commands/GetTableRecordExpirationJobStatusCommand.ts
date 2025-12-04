// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetTableRecordExpirationJobStatusRequest,
  GetTableRecordExpirationJobStatusResponse,
} from "../models/models_0";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { GetTableRecordExpirationJobStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableRecordExpirationJobStatusCommand}.
 */
export interface GetTableRecordExpirationJobStatusCommandInput extends GetTableRecordExpirationJobStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetTableRecordExpirationJobStatusCommand}.
 */
export interface GetTableRecordExpirationJobStatusCommandOutput
  extends GetTableRecordExpirationJobStatusResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the status, metrics, and details of the latest record expiration job for a table. This includes when the job ran, and whether it succeeded or failed. If the job ran successfully, this also includes statistics about the records that were removed.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:GetTableRecordExpirationJobStatus</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableRecordExpirationJobStatusCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableRecordExpirationJobStatusCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableRecordExpirationJobStatusRequest
 *   tableArn: "STRING_VALUE", // required
 * };
 * const command = new GetTableRecordExpirationJobStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTableRecordExpirationJobStatusResponse
 * //   status: "NotYetRun" || "Successful" || "Failed" || "Disabled", // required
 * //   lastRunTimestamp: new Date("TIMESTAMP"),
 * //   failureMessage: "STRING_VALUE",
 * //   metrics: { // TableRecordExpirationJobMetrics
 * //     deletedDataFiles: Number("long"),
 * //     deletedRecords: Number("long"),
 * //     removedFilesSize: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableRecordExpirationJobStatusCommandInput - {@link GetTableRecordExpirationJobStatusCommandInput}
 * @returns {@link GetTableRecordExpirationJobStatusCommandOutput}
 * @see {@link GetTableRecordExpirationJobStatusCommandInput} for command's `input` shape.
 * @see {@link GetTableRecordExpirationJobStatusCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The requested operation is not allowed on this resource. This may occur when attempting to modify a resource that is managed by a service or has restrictions that prevent the operation.</p>
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
export class GetTableRecordExpirationJobStatusCommand extends $Command
  .classBuilder<
    GetTableRecordExpirationJobStatusCommandInput,
    GetTableRecordExpirationJobStatusCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "GetTableRecordExpirationJobStatus", {})
  .n("S3TablesClient", "GetTableRecordExpirationJobStatusCommand")
  .sc(GetTableRecordExpirationJobStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableRecordExpirationJobStatusRequest;
      output: GetTableRecordExpirationJobStatusResponse;
    };
    sdk: {
      input: GetTableRecordExpirationJobStatusCommandInput;
      output: GetTableRecordExpirationJobStatusCommandOutput;
    };
  };
}
