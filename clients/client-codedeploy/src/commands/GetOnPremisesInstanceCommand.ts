// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOnPremisesInstanceInput, GetOnPremisesInstanceOutput } from "../models/models_0";
import { GetOnPremisesInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOnPremisesInstanceCommand}.
 */
export interface GetOnPremisesInstanceCommandInput extends GetOnPremisesInstanceInput {}
/**
 * @public
 *
 * The output of {@link GetOnPremisesInstanceCommand}.
 */
export interface GetOnPremisesInstanceCommandOutput extends GetOnPremisesInstanceOutput, __MetadataBearer {}

/**
 * <p> Gets information about an on-premises instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // GetOnPremisesInstanceInput
 *   instanceName: "STRING_VALUE", // required
 * };
 * const command = new GetOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetOnPremisesInstanceOutput
 * //   instanceInfo: { // InstanceInfo
 * //     instanceName: "STRING_VALUE",
 * //     iamSessionArn: "STRING_VALUE",
 * //     iamUserArn: "STRING_VALUE",
 * //     instanceArn: "STRING_VALUE",
 * //     registerTime: new Date("TIMESTAMP"),
 * //     deregisterTime: new Date("TIMESTAMP"),
 * //     tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOnPremisesInstanceCommandInput - {@link GetOnPremisesInstanceCommandInput}
 * @returns {@link GetOnPremisesInstanceCommandOutput}
 * @see {@link GetOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link GetOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *  <p>An on-premises instance name was not specified.</p>
 *
 * @throws {@link InstanceNotRegisteredException} (client fault)
 *  <p>The specified on-premises instance is not registered.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class GetOnPremisesInstanceCommand extends $Command
  .classBuilder<
    GetOnPremisesInstanceCommandInput,
    GetOnPremisesInstanceCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "GetOnPremisesInstance", {})
  .n("CodeDeployClient", "GetOnPremisesInstanceCommand")
  .sc(GetOnPremisesInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOnPremisesInstanceInput;
      output: GetOnPremisesInstanceOutput;
    };
    sdk: {
      input: GetOnPremisesInstanceCommandInput;
      output: GetOnPremisesInstanceCommandOutput;
    };
  };
}
