// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessPointPolicyRequest, GetAccessPointPolicyResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointPolicy } from "../schemas/schemas_22_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessPointPolicyCommand}.
 */
export interface GetAccessPointPolicyCommandInput extends GetAccessPointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointPolicyCommand}.
 */
export interface GetAccessPointPolicyCommandOutput extends GetAccessPointPolicyResult, __MetadataBearer {}

/**
 * <p>Returns the access point policy associated with the specified access point.</p>
 *          <p>The following actions are related to <code>GetAccessPointPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointPolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointPolicyResult
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessPointPolicyCommandInput - {@link GetAccessPointPolicyCommandInput}
 * @returns {@link GetAccessPointPolicyCommandOutput}
 * @see {@link GetAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessPointPolicyCommand extends $Command
  .classBuilder<
    GetAccessPointPolicyCommandInput,
    GetAccessPointPolicyCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccessPointName: { type: "contextParams", name: "Name" },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "GetAccessPointPolicy", {})
  .n("S3ControlClient", "GetAccessPointPolicyCommand")
  .sc(GetAccessPointPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessPointPolicyRequest;
      output: GetAccessPointPolicyResult;
    };
    sdk: {
      input: GetAccessPointPolicyCommandInput;
      output: GetAccessPointPolicyCommandOutput;
    };
  };
}
