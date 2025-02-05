// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { RegisterCrossAccountAccessRoleRequest } from "../models/models_0";
import {
  de_RegisterCrossAccountAccessRoleCommand,
  se_RegisterCrossAccountAccessRoleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterCrossAccountAccessRoleCommand}.
 */
export interface RegisterCrossAccountAccessRoleCommandInput extends RegisterCrossAccountAccessRoleRequest {}
/**
 * @public
 *
 * The output of {@link RegisterCrossAccountAccessRoleCommand}.
 */
export interface RegisterCrossAccountAccessRoleCommandOutput extends __MetadataBearer {}

/**
 * <p>Registers the IAM role that grants Amazon Inspector access to AWS Services needed to
 *          perform security assessments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RegisterCrossAccountAccessRoleCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, RegisterCrossAccountAccessRoleCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new InspectorClient(config);
 * const input = { // RegisterCrossAccountAccessRoleRequest
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new RegisterCrossAccountAccessRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterCrossAccountAccessRoleCommandInput - {@link RegisterCrossAccountAccessRoleCommandInput}
 * @returns {@link RegisterCrossAccountAccessRoleCommandOutput}
 * @see {@link RegisterCrossAccountAccessRoleCommandInput} for command's `input` shape.
 * @see {@link RegisterCrossAccountAccessRoleCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidCrossAccountRoleException} (client fault)
 *  <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2
 *          instances during the assessment run.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 * @example Register cross account access role
 * ```javascript
 * // Registers the IAM role that Amazon Inspector uses to list your EC2 instances at the start of the assessment run or when you call the PreviewAgents action.
 * const input = {
 *   "roleArn": "arn:aws:iam::123456789012:role/inspector"
 * };
 * const command = new RegisterCrossAccountAccessRoleCommand(input);
 * await client.send(command);
 * // example id: register-cross-account-access-role-1481067178301
 * ```
 *
 */
export class RegisterCrossAccountAccessRoleCommand extends $Command
  .classBuilder<
    RegisterCrossAccountAccessRoleCommandInput,
    RegisterCrossAccountAccessRoleCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "RegisterCrossAccountAccessRole", {})
  .n("InspectorClient", "RegisterCrossAccountAccessRoleCommand")
  .f(void 0, void 0)
  .ser(se_RegisterCrossAccountAccessRoleCommand)
  .de(de_RegisterCrossAccountAccessRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterCrossAccountAccessRoleRequest;
      output: {};
    };
    sdk: {
      input: RegisterCrossAccountAccessRoleCommandInput;
      output: RegisterCrossAccountAccessRoleCommandOutput;
    };
  };
}
