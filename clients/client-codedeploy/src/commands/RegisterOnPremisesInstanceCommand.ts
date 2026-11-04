// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterOnPremisesInstanceInput } from "../models/models_0";
import { RegisterOnPremisesInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterOnPremisesInstanceCommand}.
 */
export interface RegisterOnPremisesInstanceCommandInput extends RegisterOnPremisesInstanceInput {}
/**
 * @public
 *
 * The output of {@link RegisterOnPremisesInstanceCommand}.
 */
export interface RegisterOnPremisesInstanceCommandOutput extends __MetadataBearer {}

/**
 * Registers an on-premises instance.
 *
 * > **Note:** Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RegisterOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RegisterOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // RegisterOnPremisesInstanceInput
 *   instanceName: "STRING_VALUE", // required
 *   iamSessionArn: "STRING_VALUE",
 *   iamUserArn: "STRING_VALUE",
 * };
 * const command = new RegisterOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterOnPremisesInstanceCommandInput - {@link RegisterOnPremisesInstanceCommandInput}
 * @returns {@link RegisterOnPremisesInstanceCommandOutput}
 * @see {@link RegisterOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link IamArnRequiredException} (client fault)
 *
 * No IAM ARN was included in the request. You must use an IAM session ARN or user ARN in the request.
 *
 * @throws {@link IamSessionArnAlreadyRegisteredException} (client fault)
 *
 * The request included an IAM session ARN that has already been used to register a different instance.
 *
 * @throws {@link IamUserArnAlreadyRegisteredException} (client fault)
 *
 * The specified user ARN is already registered with an on-premises instance.
 *
 * @throws {@link IamUserArnRequiredException} (client fault)
 *
 * An user ARN was not specified.
 *
 * @throws {@link InstanceNameAlreadyRegisteredException} (client fault)
 *
 * The specified on-premises instance name is already registered.
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *
 * An on-premises instance name was not specified.
 *
 * @throws {@link InvalidIamSessionArnException} (client fault)
 *
 * The IAM session ARN was specified in an invalid format.
 *
 * @throws {@link InvalidIamUserArnException} (client fault)
 *
 * The user ARN was specified in an invalid format.
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *
 * The on-premises instance name was specified in an invalid format.
 *
 * @throws {@link MultipleIamArnsProvidedException} (client fault)
 *
 * Both an user ARN and an IAM session ARN were included in the request. Use only one ARN type.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class RegisterOnPremisesInstanceCommand extends command<RegisterOnPremisesInstanceCommandInput, RegisterOnPremisesInstanceCommandOutput>(
  _ep0,
  _mw0,
  "RegisterOnPremisesInstance",
  RegisterOnPremisesInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterOnPremisesInstanceInput;
      output: {};
    };
    sdk: {
      input: RegisterOnPremisesInstanceCommandInput;
      output: RegisterOnPremisesInstanceCommandOutput;
    };
  };
}
