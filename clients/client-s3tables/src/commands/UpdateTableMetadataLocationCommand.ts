// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTableMetadataLocationRequest, UpdateTableMetadataLocationResponse } from "../models/models_0";
import {
  de_UpdateTableMetadataLocationCommand,
  se_UpdateTableMetadataLocationCommand,
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
 * The input for {@link UpdateTableMetadataLocationCommand}.
 */
export interface UpdateTableMetadataLocationCommandInput extends UpdateTableMetadataLocationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableMetadataLocationCommand}.
 */
export interface UpdateTableMetadataLocationCommandOutput
  extends UpdateTableMetadataLocationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the metadata location for a table.  The metadata location of a table must be an S3 URI that begins with the table's warehouse location. The metadata location for an Apache Iceberg table must end with <code>.metadata.json</code>, or if the metadata file is Gzip-compressed, <code>.metadata.json.gz</code>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3tables:UpdateTableMetadataLocation</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, UpdateTableMetadataLocationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, UpdateTableMetadataLocationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the
 *       request.</p>
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
 * @public
 */
export class UpdateTableMetadataLocationCommand extends $Command
  .classBuilder<
    UpdateTableMetadataLocationCommandInput,
    UpdateTableMetadataLocationCommandOutput,
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
  .s("S3TableBuckets", "UpdateTableMetadataLocation", {})
  .n("S3TablesClient", "UpdateTableMetadataLocationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTableMetadataLocationCommand)
  .de(de_UpdateTableMetadataLocationCommand)
  .build() {
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
