// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SubmitContainerStateChangeRequest, SubmitContainerStateChangeResponse } from "../models/models_1";
import { de_SubmitContainerStateChangeCommand, se_SubmitContainerStateChangeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubmitContainerStateChangeCommand}.
 */
export interface SubmitContainerStateChangeCommandInput extends SubmitContainerStateChangeRequest {}
/**
 * @public
 *
 * The output of {@link SubmitContainerStateChangeCommand}.
 */
export interface SubmitContainerStateChangeCommandOutput extends SubmitContainerStateChangeResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge that a container changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitContainerStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitContainerStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // SubmitContainerStateChangeRequest
 *   cluster: "STRING_VALUE",
 *   task: "STRING_VALUE",
 *   containerName: "STRING_VALUE",
 *   runtimeId: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   exitCode: Number("int"),
 *   reason: "STRING_VALUE",
 *   networkBindings: [ // NetworkBindings
 *     { // NetworkBinding
 *       bindIP: "STRING_VALUE",
 *       containerPort: Number("int"),
 *       hostPort: Number("int"),
 *       protocol: "tcp" || "udp",
 *       containerPortRange: "STRING_VALUE",
 *       hostPortRange: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SubmitContainerStateChangeCommand(input);
 * const response = await client.send(command);
 * // { // SubmitContainerStateChangeResponse
 * //   acknowledgment: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubmitContainerStateChangeCommandInput - {@link SubmitContainerStateChangeCommandInput}
 * @returns {@link SubmitContainerStateChangeCommandOutput}
 * @see {@link SubmitContainerStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitContainerStateChangeCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @public
 */
export class SubmitContainerStateChangeCommand extends $Command
  .classBuilder<
    SubmitContainerStateChangeCommandInput,
    SubmitContainerStateChangeCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "SubmitContainerStateChange", {})
  .n("ECSClient", "SubmitContainerStateChangeCommand")
  .f(void 0, void 0)
  .ser(se_SubmitContainerStateChangeCommand)
  .de(de_SubmitContainerStateChangeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitContainerStateChangeRequest;
      output: SubmitContainerStateChangeResponse;
    };
    sdk: {
      input: SubmitContainerStateChangeCommandInput;
      output: SubmitContainerStateChangeCommandOutput;
    };
  };
}
