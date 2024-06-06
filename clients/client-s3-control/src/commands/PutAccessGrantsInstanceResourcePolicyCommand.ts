// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutAccessGrantsInstanceResourcePolicyRequest,
  PutAccessGrantsInstanceResourcePolicyResult,
} from "../models/models_1";
import {
  de_PutAccessGrantsInstanceResourcePolicyCommand,
  se_PutAccessGrantsInstanceResourcePolicyCommand,
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
 *                <p>You must have the <code>s3:PutAccessGrantsInstanceResourcePolicy</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessGrantsInstanceResourcePolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessGrantsInstanceResourcePolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
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
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "PutAccessGrantsInstanceResourcePolicy", {})
  .n("S3ControlClient", "PutAccessGrantsInstanceResourcePolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutAccessGrantsInstanceResourcePolicyCommand)
  .de(de_PutAccessGrantsInstanceResourcePolicyCommand)
  .build() {}
