// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccessGrantsLocationRequest, UpdateAccessGrantsLocationResult } from "../models/models_1";
import { de_UpdateAccessGrantsLocationCommand, se_UpdateAccessGrantsLocationCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessGrantsLocationCommand}.
 */
export interface UpdateAccessGrantsLocationCommandInput extends UpdateAccessGrantsLocationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessGrantsLocationCommand}.
 */
export interface UpdateAccessGrantsLocationCommandOutput extends UpdateAccessGrantsLocationResult, __MetadataBearer {}

/**
 * <p>Updates the IAM role of a registered location in your S3 Access Grants instance.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:UpdateAccessGrantsLocation</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>You must also have the following permission: <code>iam:PassRole</code>
 *                </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, UpdateAccessGrantsLocationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, UpdateAccessGrantsLocationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // UpdateAccessGrantsLocationRequest
 *   AccountId: "STRING_VALUE",
 *   AccessGrantsLocationId: "STRING_VALUE", // required
 *   IAMRoleArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateAccessGrantsLocationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessGrantsLocationResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantsLocationId: "STRING_VALUE",
 * //   AccessGrantsLocationArn: "STRING_VALUE",
 * //   LocationScope: "STRING_VALUE",
 * //   IAMRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAccessGrantsLocationCommandInput - {@link UpdateAccessGrantsLocationCommandInput}
 * @returns {@link UpdateAccessGrantsLocationCommandOutput}
 * @see {@link UpdateAccessGrantsLocationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessGrantsLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class UpdateAccessGrantsLocationCommand extends $Command
  .classBuilder<
    UpdateAccessGrantsLocationCommandInput,
    UpdateAccessGrantsLocationCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "UpdateAccessGrantsLocation", {})
  .n("S3ControlClient", "UpdateAccessGrantsLocationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccessGrantsLocationCommand)
  .de(de_UpdateAccessGrantsLocationCommand)
  .build() {}
