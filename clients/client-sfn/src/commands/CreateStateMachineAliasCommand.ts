// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateStateMachineAliasInput,
  CreateStateMachineAliasInputFilterSensitiveLog,
  CreateStateMachineAliasOutput,
} from "../models/models_0";
import { de_CreateStateMachineAliasCommand, se_CreateStateMachineAliasCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStateMachineAliasCommand}.
 */
export interface CreateStateMachineAliasCommandInput extends CreateStateMachineAliasInput {}
/**
 * @public
 *
 * The output of {@link CreateStateMachineAliasCommand}.
 */
export interface CreateStateMachineAliasCommandOutput extends CreateStateMachineAliasOutput, __MetadataBearer {}

/**
 * <p>Creates an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> for a state machine that points to one or two <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> of the same state machine. You can set your application to call <a>StartExecution</a> with an alias and update the version the alias uses without changing the client's code.</p>
 *          <p>You can also map an alias to split <a>StartExecution</a> requests between two
 *       versions of a state machine. To do this, add a second <code>RoutingConfig</code> object in the
 *         <code>routingConfiguration</code> parameter. You must also specify the percentage of
 *       execution run requests each version should receive in both <code>RoutingConfig</code> objects.
 *         Step Functions randomly chooses which version runs a given execution based on the
 *       percentage you specify.</p>
 *          <p>To create an alias that points to a single version, specify a single
 *         <code>RoutingConfig</code> object with a <code>weight</code> set to 100.</p>
 *          <p>You can create up to 100 aliases for each state machine. You must delete unused aliases using the <a>DeleteStateMachineAlias</a> API action.</p>
 *          <p>
 *             <code>CreateStateMachineAlias</code> is an idempotent API. Step Functions bases the
 *       idempotency check on the <code>stateMachineArn</code>, <code>description</code>,
 *         <code>name</code>, and <code>routingConfiguration</code> parameters. Requests that contain
 *       the same values for these parameters return a successful idempotent response without creating
 *       a duplicate resource.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeStateMachineAlias</a>
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
 * import { SFNClient, CreateStateMachineAliasCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, CreateStateMachineAliasCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SFNClient(config);
 * const input = { // CreateStateMachineAliasInput
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   routingConfiguration: [ // RoutingConfigurationList // required
 *     { // RoutingConfigurationListItem
 *       stateMachineVersionArn: "STRING_VALUE", // required
 *       weight: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new CreateStateMachineAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateStateMachineAliasOutput
 * //   stateMachineAliasArn: "STRING_VALUE", // required
 * //   creationDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateStateMachineAliasCommandInput - {@link CreateStateMachineAliasCommandInput}
 * @returns {@link CreateStateMachineAliasCommandOutput}
 * @see {@link CreateStateMachineAliasCommandInput} for command's `input` shape.
 * @see {@link CreateStateMachineAliasCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidName} (client fault)
 *  <p>The provided name is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *          <p>HTTP Status Code: 402</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class CreateStateMachineAliasCommand extends $Command
  .classBuilder<
    CreateStateMachineAliasCommandInput,
    CreateStateMachineAliasCommandOutput,
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
  .s("AWSStepFunctions", "CreateStateMachineAlias", {})
  .n("SFNClient", "CreateStateMachineAliasCommand")
  .f(CreateStateMachineAliasInputFilterSensitiveLog, void 0)
  .ser(se_CreateStateMachineAliasCommand)
  .de(de_CreateStateMachineAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStateMachineAliasInput;
      output: CreateStateMachineAliasOutput;
    };
    sdk: {
      input: CreateStateMachineAliasCommandInput;
      output: CreateStateMachineAliasCommandOutput;
    };
  };
}
