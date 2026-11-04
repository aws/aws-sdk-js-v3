// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTableMetadataLocationRequest, UpdateTableMetadataLocationResponse } from "../models/models_0";
import { UpdateTableMetadataLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTableMetadataLocationCommand}.
 */
export interface UpdateTableMetadataLocationCommandInput extends UpdateTableMetadataLocationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableMetadataLocationCommand}.
 */
export interface UpdateTableMetadataLocationCommandOutput extends UpdateTableMetadataLocationResponse, __MetadataBearer {}

/**
 * Updates the metadata location for a table. The metadata location of a table must be an S3 URI that begins with the table's warehouse location. The metadata location for an Apache Iceberg table must end with `.metadata.json`, or if the metadata file is Gzip-compressed, `.metadata.json.gz`.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:UpdateTableMetadataLocation` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, UpdateTableMetadataLocationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, UpdateTableMetadataLocationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // UpdateTableMetadataLocationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   versionToken: "STRING_VALUE", // required
 *   metadataLocation: "STRING_VALUE", // required
 * };
 * const command = new UpdateTableMetadataLocationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTableMetadataLocationResponse
 * //   name: "STRING_VALUE", // required
 * //   tableARN: "STRING_VALUE", // required
 * //   namespace: [ // NamespaceList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   versionToken: "STRING_VALUE", // required
 * //   metadataLocation: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateTableMetadataLocationCommandInput - {@link UpdateTableMetadataLocationCommandInput}
 * @returns {@link UpdateTableMetadataLocationCommandOutput}
 * @see {@link UpdateTableMetadataLocationCommandInput} for command's `input` shape.
 * @see {@link UpdateTableMetadataLocationCommandOutput} for command's `response` shape.
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
export class UpdateTableMetadataLocationCommand extends command<UpdateTableMetadataLocationCommandInput, UpdateTableMetadataLocationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTableMetadataLocation",
  UpdateTableMetadataLocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTableMetadataLocationRequest;
      output: UpdateTableMetadataLocationResponse;
    };
    sdk: {
      input: UpdateTableMetadataLocationCommandInput;
      output: UpdateTableMetadataLocationCommandOutput;
    };
  };
}
