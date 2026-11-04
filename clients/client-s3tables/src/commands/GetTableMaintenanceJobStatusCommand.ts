// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableMaintenanceJobStatusRequest, GetTableMaintenanceJobStatusResponse } from "../models/models_0";
import { GetTableMaintenanceJobStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableMaintenanceJobStatusCommand}.
 */
export interface GetTableMaintenanceJobStatusCommandInput extends GetTableMaintenanceJobStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetTableMaintenanceJobStatusCommand}.
 */
export interface GetTableMaintenanceJobStatusCommandOutput extends GetTableMaintenanceJobStatusResponse, __MetadataBearer {}

/**
 * Gets the status of a maintenance job for a table. For more information, see [S3 Tables maintenance](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-maintenance.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableMaintenanceJobStatus` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableMaintenanceJobStatusCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableMaintenanceJobStatusCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableMaintenanceJobStatusRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetTableMaintenanceJobStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTableMaintenanceJobStatusResponse
 * //   tableARN: "STRING_VALUE", // required
 * //   status: { // TableMaintenanceJobStatus // required
 * //     "<keys>": { // TableMaintenanceJobStatusValue
 * //       status: "Not_Yet_Run" || "Successful" || "Failed" || "Disabled", // required
 * //       lastRunTimestamp: new Date("TIMESTAMP"),
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableMaintenanceJobStatusCommandInput - {@link GetTableMaintenanceJobStatusCommandInput}
 * @returns {@link GetTableMaintenanceJobStatusCommandOutput}
 * @see {@link GetTableMaintenanceJobStatusCommandInput} for command's `input` shape.
 * @see {@link GetTableMaintenanceJobStatusCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
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
export class GetTableMaintenanceJobStatusCommand extends command<GetTableMaintenanceJobStatusCommandInput, GetTableMaintenanceJobStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetTableMaintenanceJobStatus",
  GetTableMaintenanceJobStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableMaintenanceJobStatusRequest;
      output: GetTableMaintenanceJobStatusResponse;
    };
    sdk: {
      input: GetTableMaintenanceJobStatusCommandInput;
      output: GetTableMaintenanceJobStatusCommandOutput;
    };
  };
}
