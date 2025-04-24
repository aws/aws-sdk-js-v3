// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetNamespaceRequest, GetNamespaceResponse } from "../models/models_0";
import { de_GetNamespaceCommand, se_GetNamespaceCommand } from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNamespaceCommand}.
 */
export interface GetNamespaceCommandInput extends GetNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link GetNamespaceCommand}.
 */
export interface GetNamespaceCommandOutput extends GetNamespaceResponse, __MetadataBearer {}

/**
 * <p>Gets details about a namespace. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-namespace.html">Table namespaces</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3tables:GetNamespace</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetNamespaceCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetNamespaceCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * const client = new S3TablesClient(config);
 * const input = { // GetNamespaceRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 * };
 * const command = new GetNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // GetNamespaceResponse
 * //   namespace: [ // NamespaceList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   ownerAccountId: "STRING_VALUE", // required
 * //   namespaceId: "STRING_VALUE",
 * //   tableBucketId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNamespaceCommandInput - {@link GetNamespaceCommandInput}
 * @returns {@link GetNamespaceCommandOutput}
 * @see {@link GetNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The action cannot be performed because you do not have the required permission.</p>
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
 *
 * @public
 */
export class GetNamespaceCommand extends $Command
  .classBuilder<
    GetNamespaceCommandInput,
    GetNamespaceCommandOutput,
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
  .s("S3TableBuckets", "GetNamespace", {})
  .n("S3TablesClient", "GetNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_GetNamespaceCommand)
  .de(de_GetNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNamespaceRequest;
      output: GetNamespaceResponse;
    };
    sdk: {
      input: GetNamespaceCommandInput;
      output: GetNamespaceCommandOutput;
    };
  };
}
