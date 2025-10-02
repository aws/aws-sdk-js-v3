// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DissociateAccessGrantsIdentityCenterRequest } from "../models/models_0";
import {
  de_DissociateAccessGrantsIdentityCenterCommand,
  se_DissociateAccessGrantsIdentityCenterCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DissociateAccessGrantsIdentityCenterCommand}.
 */
export interface DissociateAccessGrantsIdentityCenterCommandInput extends DissociateAccessGrantsIdentityCenterRequest {}
/**
 * @public
 *
 * The output of {@link DissociateAccessGrantsIdentityCenterCommand}.
 */
export interface DissociateAccessGrantsIdentityCenterCommandOutput extends __MetadataBearer {}

/**
 * <p>Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:DissociateAccessGrantsIdentityCenter</code>
 *                   permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>sso:DeleteApplication</code> permission to use this
 *                   operation. </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DissociateAccessGrantsIdentityCenterCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DissociateAccessGrantsIdentityCenterCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DissociateAccessGrantsIdentityCenterRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DissociateAccessGrantsIdentityCenterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DissociateAccessGrantsIdentityCenterCommandInput - {@link DissociateAccessGrantsIdentityCenterCommandInput}
 * @returns {@link DissociateAccessGrantsIdentityCenterCommandOutput}
 * @see {@link DissociateAccessGrantsIdentityCenterCommandInput} for command's `input` shape.
 * @see {@link DissociateAccessGrantsIdentityCenterCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DissociateAccessGrantsIdentityCenterCommand extends $Command
  .classBuilder<
    DissociateAccessGrantsIdentityCenterCommandInput,
    DissociateAccessGrantsIdentityCenterCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "DissociateAccessGrantsIdentityCenter", {})
  .n("S3ControlClient", "DissociateAccessGrantsIdentityCenterCommand")
  .f(void 0, void 0)
  .ser(se_DissociateAccessGrantsIdentityCenterCommand)
  .de(de_DissociateAccessGrantsIdentityCenterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DissociateAccessGrantsIdentityCenterRequest;
      output: {};
    };
    sdk: {
      input: DissociateAccessGrantsIdentityCenterCommandInput;
      output: DissociateAccessGrantsIdentityCenterCommandOutput;
    };
  };
}
