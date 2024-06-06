// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterPublisherInput, RegisterPublisherOutput } from "../models/models_0";
import { de_RegisterPublisherCommand, se_RegisterPublisherCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterPublisherCommand}.
 */
export interface RegisterPublisherCommandInput extends RegisterPublisherInput {}
/**
 * @public
 *
 * The output of {@link RegisterPublisherCommand}.
 */
export interface RegisterPublisherCommandOutput extends RegisterPublisherOutput, __MetadataBearer {}

/**
 * <p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are
 *    available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p>
 *          <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User
 *    Guide</i>.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RegisterPublisherCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RegisterPublisherCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // RegisterPublisherInput
 *   AcceptTermsAndConditions: true || false,
 *   ConnectionArn: "STRING_VALUE",
 * };
 * const command = new RegisterPublisherCommand(input);
 * const response = await client.send(command);
 * // { // RegisterPublisherOutput
 * //   PublisherId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterPublisherCommandInput - {@link RegisterPublisherCommandInput}
 * @returns {@link RegisterPublisherCommandOutput}
 * @see {@link RegisterPublisherCommandInput} for command's `input` shape.
 * @see {@link RegisterPublisherCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class RegisterPublisherCommand extends $Command
  .classBuilder<
    RegisterPublisherCommandInput,
    RegisterPublisherCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "RegisterPublisher", {})
  .n("CloudFormationClient", "RegisterPublisherCommand")
  .f(void 0, void 0)
  .ser(se_RegisterPublisherCommand)
  .de(de_RegisterPublisherCommand)
  .build() {}
