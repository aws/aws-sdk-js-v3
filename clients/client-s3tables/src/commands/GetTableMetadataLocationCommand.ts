// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableMetadataLocationRequest, GetTableMetadataLocationResponse } from "../models/models_0";
import { GetTableMetadataLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableMetadataLocationCommand}.
 */
export interface GetTableMetadataLocationCommandInput extends GetTableMetadataLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetTableMetadataLocationCommand}.
 */
export interface GetTableMetadataLocationCommandOutput extends GetTableMetadataLocationResponse, __MetadataBearer {}

/**
 * Gets the location of the table metadata.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableMetadataLocation` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableMetadataLocationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableMetadataLocationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableMetadataLocationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetTableMetadataLocationCommand(input);
 * const response = await client.send(command);
 * // { // GetTableMetadataLocationResponse
 * //   versionToken: "STRING_VALUE", // required
 * //   metadataLocation: "STRING_VALUE",
 * //   warehouseLocation: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetTableMetadataLocationCommandInput - {@link GetTableMetadataLocationCommandInput}
 * @returns {@link GetTableMetadataLocationCommandOutput}
 * @see {@link GetTableMetadataLocationCommandInput} for command's `input` shape.
 * @see {@link GetTableMetadataLocationCommandOutput} for command's `response` shape.
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
export class GetTableMetadataLocationCommand extends command<GetTableMetadataLocationCommandInput, GetTableMetadataLocationCommandOutput>(
  _ep0,
  _mw0,
  "GetTableMetadataLocation",
  GetTableMetadataLocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableMetadataLocationRequest;
      output: GetTableMetadataLocationResponse;
    };
    sdk: {
      input: GetTableMetadataLocationCommandInput;
      output: GetTableMetadataLocationCommandOutput;
    };
  };
}
