// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessGrantsLocationRequest } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DeleteAccessGrantsLocation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessGrantsLocationCommand}.
 */
export interface DeleteAccessGrantsLocationCommandInput extends DeleteAccessGrantsLocationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessGrantsLocationCommand}.
 */
export interface DeleteAccessGrantsLocationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregisters a location from your S3 Access Grants instance. You can only delete a location
 *          registration from an S3 Access Grants instance if there are no grants associated with this location.
 *          See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessGrant.html">Delete a grant</a> for
 *          information on how to delete grants. You need to have at least one registered location in
 *          your S3 Access Grants instance in order to create access grants. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:DeleteAccessGrantsLocation</code> permission to use
 *                   this operation. </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessGrantsLocationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessGrantsLocationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessGrantsLocationRequest
 *   AccountId: "STRING_VALUE",
 *   AccessGrantsLocationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessGrantsLocationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessGrantsLocationCommandInput - {@link DeleteAccessGrantsLocationCommandInput}
 * @returns {@link DeleteAccessGrantsLocationCommandOutput}
 * @see {@link DeleteAccessGrantsLocationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessGrantsLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteAccessGrantsLocationCommand extends $Command
  .classBuilder<
    DeleteAccessGrantsLocationCommandInput,
    DeleteAccessGrantsLocationCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "DeleteAccessGrantsLocation", {})
  .n("S3ControlClient", "DeleteAccessGrantsLocationCommand")
  .sc(DeleteAccessGrantsLocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessGrantsLocationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessGrantsLocationCommandInput;
      output: DeleteAccessGrantsLocationCommandOutput;
    };
  };
}
