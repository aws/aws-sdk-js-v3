// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessGrantsInstanceResourcePolicyRequest } from "../models/models_0";
import {
  de_DeleteAccessGrantsInstanceResourcePolicyCommand,
  se_DeleteAccessGrantsInstanceResourcePolicyCommand,
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
 * The input for {@link DeleteAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface DeleteAccessGrantsInstanceResourcePolicyCommandInput
  extends DeleteAccessGrantsInstanceResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface DeleteAccessGrantsInstanceResourcePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:DeleteAccessGrantsInstanceResourcePolicy</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessGrantsInstanceResourcePolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessGrantsInstanceResourcePolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessGrantsInstanceResourcePolicyRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteAccessGrantsInstanceResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessGrantsInstanceResourcePolicyCommandInput - {@link DeleteAccessGrantsInstanceResourcePolicyCommandInput}
 * @returns {@link DeleteAccessGrantsInstanceResourcePolicyCommandOutput}
 * @see {@link DeleteAccessGrantsInstanceResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessGrantsInstanceResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class DeleteAccessGrantsInstanceResourcePolicyCommand extends $Command
  .classBuilder<
    DeleteAccessGrantsInstanceResourcePolicyCommandInput,
    DeleteAccessGrantsInstanceResourcePolicyCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "DeleteAccessGrantsInstanceResourcePolicy", {})
  .n("S3ControlClient", "DeleteAccessGrantsInstanceResourcePolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccessGrantsInstanceResourcePolicyCommand)
  .de(de_DeleteAccessGrantsInstanceResourcePolicyCommand)
  .build() {}
