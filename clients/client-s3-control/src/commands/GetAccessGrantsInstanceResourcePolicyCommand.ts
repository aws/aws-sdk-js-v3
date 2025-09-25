// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAccessGrantsInstanceResourcePolicyRequest,
  GetAccessGrantsInstanceResourcePolicyResult,
} from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessGrantsInstanceResourcePolicy } from "../schemas/schemas_20_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface GetAccessGrantsInstanceResourcePolicyCommandInput
  extends GetAccessGrantsInstanceResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface GetAccessGrantsInstanceResourcePolicyCommandOutput
  extends GetAccessGrantsInstanceResourcePolicyResult,
    __MetadataBearer {}

/**
 * <p>Returns the resource policy of the S3 Access Grants instance. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetAccessGrantsInstanceResourcePolicy</code>
 *                   permission to use this operation. </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantsInstanceResourcePolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantsInstanceResourcePolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantsInstanceResourcePolicyRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetAccessGrantsInstanceResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantsInstanceResourcePolicyResult
 * //   Policy: "STRING_VALUE",
 * //   Organization: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAccessGrantsInstanceResourcePolicyCommandInput - {@link GetAccessGrantsInstanceResourcePolicyCommandInput}
 * @returns {@link GetAccessGrantsInstanceResourcePolicyCommandOutput}
 * @see {@link GetAccessGrantsInstanceResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantsInstanceResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessGrantsInstanceResourcePolicyCommand extends $Command
  .classBuilder<
    GetAccessGrantsInstanceResourcePolicyCommandInput,
    GetAccessGrantsInstanceResourcePolicyCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "GetAccessGrantsInstanceResourcePolicy", {})
  .n("S3ControlClient", "GetAccessGrantsInstanceResourcePolicyCommand")
  .sc(GetAccessGrantsInstanceResourcePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessGrantsInstanceResourcePolicyRequest;
      output: GetAccessGrantsInstanceResourcePolicyResult;
    };
    sdk: {
      input: GetAccessGrantsInstanceResourcePolicyCommandInput;
      output: GetAccessGrantsInstanceResourcePolicyCommandOutput;
    };
  };
}
