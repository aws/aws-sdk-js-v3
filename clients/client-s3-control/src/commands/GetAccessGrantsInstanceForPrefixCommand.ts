// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessGrantsInstanceForPrefixRequest, GetAccessGrantsInstanceForPrefixResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessGrantsInstanceForPrefix } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessGrantsInstanceForPrefixCommand}.
 */
export interface GetAccessGrantsInstanceForPrefixCommandInput extends GetAccessGrantsInstanceForPrefixRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantsInstanceForPrefixCommand}.
 */
export interface GetAccessGrantsInstanceForPrefixCommandOutput
  extends GetAccessGrantsInstanceForPrefixResult,
    __MetadataBearer {}

/**
 * <p>Retrieve the S3 Access Grants instance that contains a particular prefix. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetAccessGrantsInstanceForPrefix</code> permission
 *                   for the caller account to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>The prefix owner account must grant you the following permissions to their
 *                   S3 Access Grants instance: <code>s3:GetAccessGrantsInstanceForPrefix</code>. </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantsInstanceForPrefixCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantsInstanceForPrefixCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantsInstanceForPrefixRequest
 *   AccountId: "STRING_VALUE",
 *   S3Prefix: "STRING_VALUE", // required
 * };
 * const command = new GetAccessGrantsInstanceForPrefixCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantsInstanceForPrefixResult
 * //   AccessGrantsInstanceArn: "STRING_VALUE",
 * //   AccessGrantsInstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessGrantsInstanceForPrefixCommandInput - {@link GetAccessGrantsInstanceForPrefixCommandInput}
 * @returns {@link GetAccessGrantsInstanceForPrefixCommandOutput}
 * @see {@link GetAccessGrantsInstanceForPrefixCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantsInstanceForPrefixCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessGrantsInstanceForPrefixCommand extends $Command
  .classBuilder<
    GetAccessGrantsInstanceForPrefixCommandInput,
    GetAccessGrantsInstanceForPrefixCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetAccessGrantsInstanceForPrefix", {})
  .n("S3ControlClient", "GetAccessGrantsInstanceForPrefixCommand")
  .sc(GetAccessGrantsInstanceForPrefix)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessGrantsInstanceForPrefixRequest;
      output: GetAccessGrantsInstanceForPrefixResult;
    };
    sdk: {
      input: GetAccessGrantsInstanceForPrefixCommandInput;
      output: GetAccessGrantsInstanceForPrefixCommandOutput;
    };
  };
}
