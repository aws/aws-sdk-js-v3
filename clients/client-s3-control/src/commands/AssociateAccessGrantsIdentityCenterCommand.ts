// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAccessGrantsIdentityCenterRequest } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { AssociateAccessGrantsIdentityCenter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAccessGrantsIdentityCenterCommand}.
 */
export interface AssociateAccessGrantsIdentityCenterCommandInput extends AssociateAccessGrantsIdentityCenterRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAccessGrantsIdentityCenterCommand}.
 */
export interface AssociateAccessGrantsIdentityCenterCommandOutput extends __MetadataBearer {}

/**
 * <p>Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this
 *          action if you want to create access grants for users or groups from your corporate identity
 *          directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity
 *          Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants
 *          instance.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:AssociateAccessGrantsIdentityCenter</code>
 *                   permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>You must also have the following permissions:
 *                      <code>sso:CreateApplication</code>, <code>sso:PutApplicationGrant</code>, and
 *                      <code>sso:PutApplicationAuthenticationMethod</code>. </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, AssociateAccessGrantsIdentityCenterCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, AssociateAccessGrantsIdentityCenterCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // AssociateAccessGrantsIdentityCenterRequest
 *   AccountId: "STRING_VALUE",
 *   IdentityCenterArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateAccessGrantsIdentityCenterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateAccessGrantsIdentityCenterCommandInput - {@link AssociateAccessGrantsIdentityCenterCommandInput}
 * @returns {@link AssociateAccessGrantsIdentityCenterCommandOutput}
 * @see {@link AssociateAccessGrantsIdentityCenterCommandInput} for command's `input` shape.
 * @see {@link AssociateAccessGrantsIdentityCenterCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class AssociateAccessGrantsIdentityCenterCommand extends $Command
  .classBuilder<
    AssociateAccessGrantsIdentityCenterCommandInput,
    AssociateAccessGrantsIdentityCenterCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "AssociateAccessGrantsIdentityCenter", {})
  .n("S3ControlClient", "AssociateAccessGrantsIdentityCenterCommand")
  .sc(AssociateAccessGrantsIdentityCenter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAccessGrantsIdentityCenterRequest;
      output: {};
    };
    sdk: {
      input: AssociateAccessGrantsIdentityCenterCommandInput;
      output: AssociateAccessGrantsIdentityCenterCommandOutput;
    };
  };
}
