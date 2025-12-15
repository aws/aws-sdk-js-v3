// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutPublicAccessBlockRequest } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutPublicAccessBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPublicAccessBlockCommand}.
 */
export interface PutPublicAccessBlockCommandInput extends PutPublicAccessBlockRequest {}
/**
 * @public
 *
 * The output of {@link PutPublicAccessBlockCommand}.
 */
export interface PutPublicAccessBlockCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an
 *          Amazon Web Services account. This operation may be restricted when the account is managed by
 *          organization-level Block Public Access policies. You might get an Access Denied (403) error
 *          when the account is managed by organization-level Block Public Access policies.
 *          Organization-level policies override account-level settings, preventing direct
 *          account-level modifications. For this operation, users must have the
 *             <code>s3:PutAccountPublicAccessBlock</code> permission. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">
 *             Using Amazon S3 block public access</a>.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutPublicAccessBlockCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutPublicAccessBlockCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutPublicAccessBlockRequest
 *   PublicAccessBlockConfiguration: { // PublicAccessBlockConfiguration
 *     BlockPublicAcls: true || false,
 *     IgnorePublicAcls: true || false,
 *     BlockPublicPolicy: true || false,
 *     RestrictPublicBuckets: true || false,
 *   },
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new PutPublicAccessBlockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPublicAccessBlockCommandInput - {@link PutPublicAccessBlockCommandInput}
 * @returns {@link PutPublicAccessBlockCommandOutput}
 * @see {@link PutPublicAccessBlockCommandInput} for command's `input` shape.
 * @see {@link PutPublicAccessBlockCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutPublicAccessBlockCommand extends $Command
  .classBuilder<
    PutPublicAccessBlockCommandInput,
    PutPublicAccessBlockCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "PutPublicAccessBlock", {})
  .n("S3ControlClient", "PutPublicAccessBlockCommand")
  .sc(PutPublicAccessBlock$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPublicAccessBlockRequest;
      output: {};
    };
    sdk: {
      input: PutPublicAccessBlockCommandInput;
      output: PutPublicAccessBlockCommandOutput;
    };
  };
}
