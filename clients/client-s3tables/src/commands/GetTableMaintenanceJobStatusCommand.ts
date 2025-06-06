// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTableMaintenanceJobStatusRequest, GetTableMaintenanceJobStatusResponse } from "../models/models_0";
import {
  de_GetTableMaintenanceJobStatusCommand,
  se_GetTableMaintenanceJobStatusCommand,
} from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetTableMaintenanceJobStatusCommandOutput
  extends GetTableMaintenanceJobStatusResponse,
    __MetadataBearer {}

/**
 * <p>Gets the status of a maintenance job for a table. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-maintenance.html">S3 Tables maintenance</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:GetTableMaintenanceJobStatus</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableMaintenanceJobStatusCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableMaintenanceJobStatusCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
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
export class GetTableMaintenanceJobStatusCommand extends $Command
  .classBuilder<
    GetTableMaintenanceJobStatusCommandInput,
    GetTableMaintenanceJobStatusCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("S3TableBuckets", "GetTableMaintenanceJobStatus", {})
  .n("S3TablesClient", "GetTableMaintenanceJobStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetTableMaintenanceJobStatusCommand)
  .de(de_GetTableMaintenanceJobStatusCommand)
  .build() {
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
