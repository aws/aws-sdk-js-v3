// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTableBucketMetricsConfigurationRequest,
  GetTableBucketMetricsConfigurationResponse,
} from "../models/models_0";
import { GetTableBucketMetricsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableBucketMetricsConfigurationCommand}.
 */
export interface GetTableBucketMetricsConfigurationCommandInput extends GetTableBucketMetricsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetTableBucketMetricsConfigurationCommand}.
 */
export interface GetTableBucketMetricsConfigurationCommandOutput extends GetTableBucketMetricsConfigurationResponse, __MetadataBearer {}

/**
 * Gets the metrics configuration for a table bucket.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableBucketMetricsConfiguration` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableBucketMetricsConfigurationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableBucketMetricsConfigurationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableBucketMetricsConfigurationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 * };
 * const command = new GetTableBucketMetricsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetTableBucketMetricsConfigurationResponse
 * //   tableBucketARN: "STRING_VALUE", // required
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTableBucketMetricsConfigurationCommandInput - {@link GetTableBucketMetricsConfigurationCommandInput}
 * @returns {@link GetTableBucketMetricsConfigurationCommandOutput}
 * @see {@link GetTableBucketMetricsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetTableBucketMetricsConfigurationCommandOutput} for command's `response` shape.
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
export class GetTableBucketMetricsConfigurationCommand extends command<GetTableBucketMetricsConfigurationCommandInput, GetTableBucketMetricsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetTableBucketMetricsConfiguration",
  GetTableBucketMetricsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableBucketMetricsConfigurationRequest;
      output: GetTableBucketMetricsConfigurationResponse;
    };
    sdk: {
      input: GetTableBucketMetricsConfigurationCommandInput;
      output: GetTableBucketMetricsConfigurationCommandOutput;
    };
  };
}
