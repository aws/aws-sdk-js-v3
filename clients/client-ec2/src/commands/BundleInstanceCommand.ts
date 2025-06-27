// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BundleInstanceRequest,
  BundleInstanceRequestFilterSensitiveLog,
  BundleInstanceResult,
  BundleInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import { de_BundleInstanceCommand, se_BundleInstanceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BundleInstanceCommand}.
 */
export interface BundleInstanceCommandInput extends BundleInstanceRequest {}
/**
 * @public
 *
 * The output of {@link BundleInstanceCommand}.
 */
export interface BundleInstanceCommandOutput extends BundleInstanceResult, __MetadataBearer {}

/**
 * <p>Bundles an Amazon instance store-backed Windows instance.</p>
 *          <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance
 *       store volumes is not preserved.</p>
 *          <note>
 *             <p>This action is not applicable for Linux/Unix instances or Windows instances that are
 *         backed by Amazon EBS.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, BundleInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, BundleInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // BundleInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Storage: { // Storage
 *     S3: { // S3Storage
 *       AWSAccessKeyId: "STRING_VALUE",
 *       Bucket: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       UploadPolicy: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       UploadPolicySignature: "STRING_VALUE",
 *     },
 *   },
 *   DryRun: true || false,
 * };
 * const command = new BundleInstanceCommand(input);
 * const response = await client.send(command);
 * // { // BundleInstanceResult
 * //   BundleTask: { // BundleTask
 * //     InstanceId: "STRING_VALUE",
 * //     BundleId: "STRING_VALUE",
 * //     State: "pending" || "waiting-for-shutdown" || "bundling" || "storing" || "cancelling" || "complete" || "failed",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     UpdateTime: new Date("TIMESTAMP"),
 * //     Storage: { // Storage
 * //       S3: { // S3Storage
 * //         AWSAccessKeyId: "STRING_VALUE",
 * //         Bucket: "STRING_VALUE",
 * //         Prefix: "STRING_VALUE",
 * //         UploadPolicy: new Uint8Array(),
 * //         UploadPolicySignature: "STRING_VALUE",
 * //       },
 * //     },
 * //     Progress: "STRING_VALUE",
 * //     BundleTaskError: { // BundleTaskError
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param BundleInstanceCommandInput - {@link BundleInstanceCommandInput}
 * @returns {@link BundleInstanceCommandOutput}
 * @see {@link BundleInstanceCommandInput} for command's `input` shape.
 * @see {@link BundleInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class BundleInstanceCommand extends $Command
  .classBuilder<
    BundleInstanceCommandInput,
    BundleInstanceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "BundleInstance", {})
  .n("EC2Client", "BundleInstanceCommand")
  .f(BundleInstanceRequestFilterSensitiveLog, BundleInstanceResultFilterSensitiveLog)
  .ser(se_BundleInstanceCommand)
  .de(de_BundleInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BundleInstanceRequest;
      output: BundleInstanceResult;
    };
    sdk: {
      input: BundleInstanceCommandInput;
      output: BundleInstanceCommandOutput;
    };
  };
}
