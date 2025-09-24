// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessPointPolicyStatusRequest, GetAccessPointPolicyStatusResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointPolicyStatus } from "../schemas/schemas_21_Status";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessPointPolicyStatusCommand}.
 */
export interface GetAccessPointPolicyStatusCommandInput extends GetAccessPointPolicyStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointPolicyStatusCommand}.
 */
export interface GetAccessPointPolicyStatusCommandOutput extends GetAccessPointPolicyStatusResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Indicates whether the specified access point currently has a policy that allows public access.
 *          For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3
 *             access points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointPolicyStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointPolicyStatusRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointPolicyStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointPolicyStatusResult
 * //   PolicyStatus: { // PolicyStatus
 * //     IsPublic: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessPointPolicyStatusCommandInput - {@link GetAccessPointPolicyStatusCommandInput}
 * @returns {@link GetAccessPointPolicyStatusCommandOutput}
 * @see {@link GetAccessPointPolicyStatusCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessPointPolicyStatusCommand extends $Command
  .classBuilder<
    GetAccessPointPolicyStatusCommandInput,
    GetAccessPointPolicyStatusCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "GetAccessPointPolicyStatus", {})
  .n("S3ControlClient", "GetAccessPointPolicyStatusCommand")
  .sc(GetAccessPointPolicyStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessPointPolicyStatusRequest;
      output: GetAccessPointPolicyStatusResult;
    };
    sdk: {
      input: GetAccessPointPolicyStatusCommandInput;
      output: GetAccessPointPolicyStatusCommandOutput;
    };
  };
}
