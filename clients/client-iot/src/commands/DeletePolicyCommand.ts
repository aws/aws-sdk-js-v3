// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DeletePolicyRequest } from "../models/models_0";
import { DeletePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandInput extends DeletePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified policy.</p>
 *          <p>A policy cannot be deleted if it has non-default versions or it is attached to any
 *          certificate.</p>
 *          <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default
 *          versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any
 *          certificate; and then use the DeletePolicy action to delete the policy.</p>
 *          <p>When a policy is deleted using DeletePolicy, its default version is deleted with
 *          it.</p>
 *          <note>
 *             <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
 *          a policy is detached before it's ready to be deleted.</p>
 *          </note>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeletePolicyRequest
 *   policyName: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyCommandInput - {@link DeletePolicyCommandInput}
 * @returns {@link DeletePolicyCommandOutput}
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DeletePolicyCommand extends $Command
  .classBuilder<
    DeletePolicyCommandInput,
    DeletePolicyCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DeletePolicy", {})
  .n("IoTClient", "DeletePolicyCommand")
  .sc(DeletePolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeletePolicyCommandInput;
      output: DeletePolicyCommandOutput;
    };
  };
}
