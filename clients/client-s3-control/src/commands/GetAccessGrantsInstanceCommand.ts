// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessGrantsInstanceRequest, GetAccessGrantsInstanceResult } from "../models/models_0";
import { de_GetAccessGrantsInstanceCommand, se_GetAccessGrantsInstanceCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessGrantsInstanceCommand}.
 */
export interface GetAccessGrantsInstanceCommandInput extends GetAccessGrantsInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantsInstanceCommand}.
 */
export interface GetAccessGrantsInstanceCommandOutput extends GetAccessGrantsInstanceResult, __MetadataBearer {}

/**
 * <p>Retrieves the S3 Access Grants instance for a Region in your account. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetAccessGrantsInstance</code> permission to use
 *                   this operation. </p>
 *             </dd>
 *          </dl>
 *          <note>
 *             <p>
 *                <code>GetAccessGrantsInstance</code> is not supported for cross-account access. You can only call the API from the account that owns the S3 Access Grants instance.</p>
 *          </note>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantsInstanceCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantsInstanceCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantsInstanceRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetAccessGrantsInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantsInstanceResult
 * //   AccessGrantsInstanceArn: "STRING_VALUE",
 * //   AccessGrantsInstanceId: "STRING_VALUE",
 * //   IdentityCenterArn: "STRING_VALUE",
 * //   IdentityCenterInstanceArn: "STRING_VALUE",
 * //   IdentityCenterApplicationArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAccessGrantsInstanceCommandInput - {@link GetAccessGrantsInstanceCommandInput}
 * @returns {@link GetAccessGrantsInstanceCommandOutput}
 * @see {@link GetAccessGrantsInstanceCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantsInstanceCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessGrantsInstanceCommand extends $Command
  .classBuilder<
    GetAccessGrantsInstanceCommandInput,
    GetAccessGrantsInstanceCommandOutput,
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
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetAccessGrantsInstance", {})
  .n("S3ControlClient", "GetAccessGrantsInstanceCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessGrantsInstanceCommand)
  .de(de_GetAccessGrantsInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessGrantsInstanceRequest;
      output: GetAccessGrantsInstanceResult;
    };
    sdk: {
      input: GetAccessGrantsInstanceCommandInput;
      output: GetAccessGrantsInstanceCommandOutput;
    };
  };
}
