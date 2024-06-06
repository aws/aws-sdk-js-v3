// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CancelBundleTaskRequest,
  CancelBundleTaskResult,
  CancelBundleTaskResultFilterSensitiveLog,
} from "../models/models_0";
import { de_CancelBundleTaskCommand, se_CancelBundleTaskCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelBundleTaskCommand}.
 */
export interface CancelBundleTaskCommandInput extends CancelBundleTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelBundleTaskCommand}.
 */
export interface CancelBundleTaskCommandOutput extends CancelBundleTaskResult, __MetadataBearer {}

/**
 * <p>Cancels a bundling operation for an instance store-backed Windows instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelBundleTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelBundleTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelBundleTaskRequest
 *   BundleId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CancelBundleTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelBundleTaskResult
 * //   BundleTask: { // BundleTask
 * //     BundleId: "STRING_VALUE",
 * //     BundleTaskError: { // BundleTaskError
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     InstanceId: "STRING_VALUE",
 * //     Progress: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     State: "pending" || "waiting-for-shutdown" || "bundling" || "storing" || "cancelling" || "complete" || "failed",
 * //     Storage: { // Storage
 * //       S3: { // S3Storage
 * //         AWSAccessKeyId: "STRING_VALUE",
 * //         Bucket: "STRING_VALUE",
 * //         Prefix: "STRING_VALUE",
 * //         UploadPolicy: new Uint8Array(),
 * //         UploadPolicySignature: "STRING_VALUE",
 * //       },
 * //     },
 * //     UpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelBundleTaskCommandInput - {@link CancelBundleTaskCommandInput}
 * @returns {@link CancelBundleTaskCommandOutput}
 * @see {@link CancelBundleTaskCommandInput} for command's `input` shape.
 * @see {@link CancelBundleTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CancelBundleTaskCommand extends $Command
  .classBuilder<
    CancelBundleTaskCommandInput,
    CancelBundleTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CancelBundleTask", {})
  .n("EC2Client", "CancelBundleTaskCommand")
  .f(void 0, CancelBundleTaskResultFilterSensitiveLog)
  .ser(se_CancelBundleTaskCommand)
  .de(de_CancelBundleTaskCommand)
  .build() {}
