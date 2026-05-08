// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFileSystemPolicyRequest, GetFileSystemPolicyResponse } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { GetFileSystemPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFileSystemPolicyCommand}.
 */
export interface GetFileSystemPolicyCommandInput extends GetFileSystemPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetFileSystemPolicyCommand}.
 */
export interface GetFileSystemPolicyCommandOutput extends GetFileSystemPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the IAM resource policy of an S3 File System.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, GetFileSystemPolicyCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, GetFileSystemPolicyCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // GetFileSystemPolicyRequest
 *   fileSystemId: "STRING_VALUE", // required
 * };
 * const command = new GetFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetFileSystemPolicyResponse
 * //   fileSystemId: "STRING_VALUE", // required
 * //   policy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetFileSystemPolicyCommandInput - {@link GetFileSystemPolicyCommandInput}
 * @returns {@link GetFileSystemPolicyCommandOutput}
 * @see {@link GetFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link GetFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
 *
 * @public
 */
export class GetFileSystemPolicyCommand extends $Command
  .classBuilder<
    GetFileSystemPolicyCommandInput,
    GetFileSystemPolicyCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "GetFileSystemPolicy", {})
  .n("S3FilesClient", "GetFileSystemPolicyCommand")
  .sc(GetFileSystemPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFileSystemPolicyRequest;
      output: GetFileSystemPolicyResponse;
    };
    sdk: {
      input: GetFileSystemPolicyCommandInput;
      output: GetFileSystemPolicyCommandOutput;
    };
  };
}
