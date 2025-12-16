// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateDRTLogBucketRequest, DisassociateDRTLogBucketResponse } from "../models/models_0";
import { DisassociateDRTLogBucket$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateDRTLogBucketCommand}.
 */
export interface DisassociateDRTLogBucketCommandInput extends DisassociateDRTLogBucketRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDRTLogBucketCommand}.
 */
export interface DisassociateDRTLogBucketCommandOutput extends DisassociateDRTLogBucketResponse, __MetadataBearer {}

/**
 * <p>Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateDRTLogBucketCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateDRTLogBucketCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // DisassociateDRTLogBucketRequest
 *   LogBucket: "STRING_VALUE", // required
 * };
 * const command = new DisassociateDRTLogBucketCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDRTLogBucketCommandInput - {@link DisassociateDRTLogBucketCommandInput}
 * @returns {@link DisassociateDRTLogBucketCommandOutput}
 * @see {@link DisassociateDRTLogBucketCommandInput} for command's `input` shape.
 * @see {@link DisassociateDRTLogBucketCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link AccessDeniedForDependencyException} (client fault)
 *  <p>In order to grant the necessary access to the Shield Response Team (SRT) the user submitting the request must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an Amazon Web Services Service</a>. </p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>Exception that indicates that the operation would not cause any change to occur.</p>
 *
 * @throws {@link NoAssociatedRoleException} (client fault)
 *  <p>The ARN of the role that you specified does not exist.</p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class DisassociateDRTLogBucketCommand extends $Command
  .classBuilder<
    DisassociateDRTLogBucketCommandInput,
    DisassociateDRTLogBucketCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "DisassociateDRTLogBucket", {})
  .n("ShieldClient", "DisassociateDRTLogBucketCommand")
  .sc(DisassociateDRTLogBucket$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDRTLogBucketRequest;
      output: {};
    };
    sdk: {
      input: DisassociateDRTLogBucketCommandInput;
      output: DisassociateDRTLogBucketCommandOutput;
    };
  };
}
