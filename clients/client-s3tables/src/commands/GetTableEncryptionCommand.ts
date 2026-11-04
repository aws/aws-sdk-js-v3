// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableEncryptionRequest, GetTableEncryptionResponse } from "../models/models_0";
import { GetTableEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableEncryptionCommand}.
 */
export interface GetTableEncryptionCommandInput extends GetTableEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link GetTableEncryptionCommand}.
 */
export interface GetTableEncryptionCommandOutput extends GetTableEncryptionResponse, __MetadataBearer {}

/**
 * Gets the encryption configuration for a table.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableEncryption` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableEncryptionCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableEncryptionCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableEncryptionRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetTableEncryptionCommand(input);
 * const response = await client.send(command);
 * // { // GetTableEncryptionResponse
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     sseAlgorithm: "AES256" || "aws:kms", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableEncryptionCommandInput - {@link GetTableEncryptionCommandInput}
 * @returns {@link GetTableEncryptionCommandOutput}
 * @see {@link GetTableEncryptionCommandInput} for command's `input` shape.
 * @see {@link GetTableEncryptionCommandOutput} for command's `response` shape.
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
export class GetTableEncryptionCommand extends command<GetTableEncryptionCommandInput, GetTableEncryptionCommandOutput>(
  _ep0,
  _mw0,
  "GetTableEncryption",
  GetTableEncryption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableEncryptionRequest;
      output: GetTableEncryptionResponse;
    };
    sdk: {
      input: GetTableEncryptionCommandInput;
      output: GetTableEncryptionCommandOutput;
    };
  };
}
