// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeStateMachineAliasInput,
  DescribeStateMachineAliasOutput,
  DescribeStateMachineAliasOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeStateMachineAliasCommand, se_DescribeStateMachineAliasCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStateMachineAliasCommand}.
 */
export interface DescribeStateMachineAliasCommandInput extends DescribeStateMachineAliasInput {}
/**
 * @public
 *
 * The output of {@link DescribeStateMachineAliasCommand}.
 */
export interface DescribeStateMachineAliasCommandOutput extends DescribeStateMachineAliasOutput, __MetadataBearer {}

/**
 * <p>Returns details about a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStateMachineAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStateMachineAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateStateMachineAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteStateMachineAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineAliasCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineAliasCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SFNClient(config);
 * const input = { // DescribeStateMachineAliasInput
 *   stateMachineAliasArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeStateMachineAliasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStateMachineAliasOutput
 * //   stateMachineAliasArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   routingConfiguration: [ // RoutingConfigurationList
 * //     { // RoutingConfigurationListItem
 * //       stateMachineVersionArn: "STRING_VALUE", // required
 * //       weight: Number("int"), // required
 * //     },
 * //   ],
 * //   creationDate: new Date("TIMESTAMP"),
 * //   updateDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeStateMachineAliasCommandInput - {@link DescribeStateMachineAliasCommandInput}
 * @returns {@link DescribeStateMachineAliasCommandOutput}
 * @see {@link DescribeStateMachineAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineAliasCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class DescribeStateMachineAliasCommand extends $Command
  .classBuilder<
    DescribeStateMachineAliasCommandInput,
    DescribeStateMachineAliasCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "DescribeStateMachineAlias", {})
  .n("SFNClient", "DescribeStateMachineAliasCommand")
  .f(void 0, DescribeStateMachineAliasOutputFilterSensitiveLog)
  .ser(se_DescribeStateMachineAliasCommand)
  .de(de_DescribeStateMachineAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStateMachineAliasInput;
      output: DescribeStateMachineAliasOutput;
    };
    sdk: {
      input: DescribeStateMachineAliasCommandInput;
      output: DescribeStateMachineAliasCommandOutput;
    };
  };
}
