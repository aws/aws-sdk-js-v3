// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTableEncryptionRequest, GetTableEncryptionResponse } from "../models/models_0";
import { de_GetTableEncryptionCommand, se_GetTableEncryptionCommand } from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the encryption configuration for a table.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3tables:GetTableEncryption</code> permission to use this operation.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableEncryptionCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableEncryptionCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
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
 *  <p>The action cannot be performed because you do not have the required permission.</p>
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
export class GetTableEncryptionCommand extends $Command
  .classBuilder<
    GetTableEncryptionCommandInput,
    GetTableEncryptionCommandOutput,
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
  .s("S3TableBuckets", "GetTableEncryption", {})
  .n("S3TablesClient", "GetTableEncryptionCommand")
  .f(void 0, void 0)
  .ser(se_GetTableEncryptionCommand)
  .de(de_GetTableEncryptionCommand)
  .build() {
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
