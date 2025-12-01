// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutAccessGrantsInstanceResourcePolicyRequest,
  PutAccessGrantsInstanceResourcePolicyResult,
} from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutAccessGrantsInstanceResourcePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface PutAccessGrantsInstanceResourcePolicyCommandInput
  extends PutAccessGrantsInstanceResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface PutAccessGrantsInstanceResourcePolicyCommandOutput
  extends PutAccessGrantsInstanceResourcePolicyResult,
    __MetadataBearer {}

/**
 * <p>Updates the resource policy of the S3 Access Grants instance. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:PutAccessGrantsInstanceResourcePolicy</code>
 *                   permission to use this operation. </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessGrantsInstanceResourcePolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessGrantsInstanceResourcePolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessGrantsInstanceResourcePolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Policy: "STRING_VALUE", // required
 *   Organization: "STRING_VALUE",
 * };
 * const command = new PutAccessGrantsInstanceResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutAccessGrantsInstanceResourcePolicyResult
 * //   Policy: "STRING_VALUE",
 * //   Organization: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutAccessGrantsInstanceResourcePolicyCommandInput - {@link PutAccessGrantsInstanceResourcePolicyCommandInput}
 * @returns {@link PutAccessGrantsInstanceResourcePolicyCommandOutput}
 * @see {@link PutAccessGrantsInstanceResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutAccessGrantsInstanceResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutAccessGrantsInstanceResourcePolicyCommand extends $Command
  .classBuilder<
    PutAccessGrantsInstanceResourcePolicyCommandInput,
    PutAccessGrantsInstanceResourcePolicyCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "PutAccessGrantsInstanceResourcePolicy", {})
  .n("S3ControlClient", "PutAccessGrantsInstanceResourcePolicyCommand")
  .sc(PutAccessGrantsInstanceResourcePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccessGrantsInstanceResourcePolicyRequest;
      output: PutAccessGrantsInstanceResourcePolicyResult;
    };
    sdk: {
      input: PutAccessGrantsInstanceResourcePolicyCommandInput;
      output: PutAccessGrantsInstanceResourcePolicyCommandOutput;
    };
  };
}
