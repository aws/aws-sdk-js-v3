// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAccessGrantsLocationRequest, UpdateAccessGrantsLocationResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { UpdateAccessGrantsLocation } from "../schemas/schemas_0";

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
 *                <p>You must have the <code>s3:UpdateAccessGrantsLocation</code> permission to use
 *                   this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>You must also have the following permission: <code>iam:PassRole</code>
 *                </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, UpdateAccessGrantsLocationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, UpdateAccessGrantsLocationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
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
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "UpdateAccessGrantsLocation", {})
  .n("S3ControlClient", "UpdateAccessGrantsLocationCommand")
  .sc(UpdateAccessGrantsLocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessGrantsLocationRequest;
      output: UpdateAccessGrantsLocationResult;
    };
    sdk: {
      input: UpdateAccessGrantsLocationCommandInput;
      output: UpdateAccessGrantsLocationCommandOutput;
    };
  };
}
