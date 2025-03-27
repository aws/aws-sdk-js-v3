// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCanaryRequest, DeleteCanaryResponse } from "../models/models_0";
import { de_DeleteCanaryCommand, se_DeleteCanaryCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCanaryCommand}.
 */
export interface DeleteCanaryCommandInput extends DeleteCanaryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCanaryCommand}.
 */
export interface DeleteCanaryCommandOutput extends DeleteCanaryResponse, __MetadataBearer {}

/**
 * <p>Permanently deletes the specified canary.</p>
 *          <p>If the canary's <code>ProvisionedResourceCleanup</code> field is set to <code>AUTOMATIC</code>
 *          or you specify <code>DeleteLambda</code> in this operation as <code>true</code>, CloudWatch Synthetics also deletes
 *          the Lambda functions and layers that are used by the canary.</p>
 *          <p>Other resources used and created by the canary are not automatically deleted.
 *          After you delete a canary, you
 *       should also delete the following:</p>
 *          <ul>
 *             <li>
 *                <p>The CloudWatch alarms created for this canary. These alarms have a name of
 *                <code>Synthetics-Alarm-<i>first-198-characters-of-canary-name</i>-<i>canaryId</i>-<i>alarm number</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p>
 *             </li>
 *             <li>
 *                <p>IAM roles created for the canary. If they were created in the console, these roles
 *                have the name <code>
 *                      role/service-role/CloudWatchSyntheticsRole-<i>First-21-Characters-of-CanaryName</i>
 *                   </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>CloudWatch Logs log groups created for the canary. These logs groups have the name
 *                <code>/aws/lambda/cwsyn-<i>First-21-Characters-of-CanaryName</i>
 *                   </code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display
 *          the information about this canary. Make
 *          note of the information returned by this operation so that you can delete these resources
 *          after you delete the canary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DeleteCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DeleteCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // DeleteCanaryRequest
 *   Name: "STRING_VALUE", // required
 *   DeleteLambda: true || false,
 * };
 * const command = new DeleteCanaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCanaryCommandInput - {@link DeleteCanaryCommandInput}
 * @returns {@link DeleteCanaryCommandOutput}
 * @see {@link DeleteCanaryCommandInput} for command's `input` shape.
 * @see {@link DeleteCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class DeleteCanaryCommand extends $Command
  .classBuilder<
    DeleteCanaryCommandInput,
    DeleteCanaryCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Synthetics", "DeleteCanary", {})
  .n("SyntheticsClient", "DeleteCanaryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCanaryCommand)
  .de(de_DeleteCanaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCanaryRequest;
      output: {};
    };
    sdk: {
      input: DeleteCanaryCommandInput;
      output: DeleteCanaryCommandOutput;
    };
  };
}
