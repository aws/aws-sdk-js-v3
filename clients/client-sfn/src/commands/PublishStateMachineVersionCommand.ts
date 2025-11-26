// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PublishStateMachineVersionInput, PublishStateMachineVersionOutput } from "../models/models_0";
import { PublishStateMachineVersion } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishStateMachineVersionCommand}.
 */
export interface PublishStateMachineVersionCommandInput extends PublishStateMachineVersionInput {}
/**
 * @public
 *
 * The output of {@link PublishStateMachineVersionCommand}.
 */
export interface PublishStateMachineVersionCommandOutput extends PublishStateMachineVersionOutput, __MetadataBearer {}

/**
 * <p>Creates a <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a> from the
 *       current revision of a state machine. Use versions to create immutable snapshots of your state
 *       machine. You can start executions from versions either directly or with an alias. To create an
 *       alias, use <a>CreateStateMachineAlias</a>.</p>
 *          <p>You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the <a>DeleteStateMachineVersion</a> API action.</p>
 *          <p>
 *             <code>PublishStateMachineVersion</code> is an idempotent API. It doesn't create a
 *       duplicate state machine version if it already exists for the current revision. Step Functions bases <code>PublishStateMachineVersion</code>'s idempotency check on the
 *         <code>stateMachineArn</code>, <code>name</code>, and <code>revisionId</code> parameters.
 *       Requests with the same parameters return a successful idempotent response. If you don't
 *       specify a <code>revisionId</code>, Step Functions checks for a previously published
 *       version of the state machine's current revision.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteStateMachineVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStateMachineVersions</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, PublishStateMachineVersionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, PublishStateMachineVersionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // PublishStateMachineVersionInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new PublishStateMachineVersionCommand(input);
 * const response = await client.send(command);
 * // { // PublishStateMachineVersionOutput
 * //   creationDate: new Date("TIMESTAMP"), // required
 * //   stateMachineVersionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PublishStateMachineVersionCommandInput - {@link PublishStateMachineVersionCommandInput}
 * @returns {@link PublishStateMachineVersionCommandOutput}
 * @see {@link PublishStateMachineVersionCommandInput} for command's `input` shape.
 * @see {@link PublishStateMachineVersionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *          <p>HTTP Status Code: 402</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class PublishStateMachineVersionCommand extends $Command
  .classBuilder<
    PublishStateMachineVersionCommandInput,
    PublishStateMachineVersionCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "PublishStateMachineVersion", {})
  .n("SFNClient", "PublishStateMachineVersionCommand")
  .sc(PublishStateMachineVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishStateMachineVersionInput;
      output: PublishStateMachineVersionOutput;
    };
    sdk: {
      input: PublishStateMachineVersionCommandInput;
      output: PublishStateMachineVersionCommandOutput;
    };
  };
}
