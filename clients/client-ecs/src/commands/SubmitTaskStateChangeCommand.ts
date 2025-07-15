// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SubmitTaskStateChangeRequest, SubmitTaskStateChangeResponse } from "../models/models_1";
import { de_SubmitTaskStateChangeCommand, se_SubmitTaskStateChangeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubmitTaskStateChangeCommand}.
 */
export interface SubmitTaskStateChangeCommandInput extends SubmitTaskStateChangeRequest {}
/**
 * @public
 *
 * The output of {@link SubmitTaskStateChangeCommand}.
 */
export interface SubmitTaskStateChangeCommandOutput extends SubmitTaskStateChangeResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge that a task changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitTaskStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitTaskStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // SubmitTaskStateChangeRequest
 *   cluster: "STRING_VALUE",
 *   task: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   reason: "STRING_VALUE",
 *   containers: [ // ContainerStateChanges
 *     { // ContainerStateChange
 *       containerName: "STRING_VALUE",
 *       imageDigest: "STRING_VALUE",
 *       runtimeId: "STRING_VALUE",
 *       exitCode: Number("int"),
 *       networkBindings: [ // NetworkBindings
 *         { // NetworkBinding
 *           bindIP: "STRING_VALUE",
 *           containerPort: Number("int"),
 *           hostPort: Number("int"),
 *           protocol: "tcp" || "udp",
 *           containerPortRange: "STRING_VALUE",
 *           hostPortRange: "STRING_VALUE",
 *         },
 *       ],
 *       reason: "STRING_VALUE",
 *       status: "STRING_VALUE",
 *     },
 *   ],
 *   attachments: [ // AttachmentStateChanges
 *     { // AttachmentStateChange
 *       attachmentArn: "STRING_VALUE", // required
 *       status: "STRING_VALUE", // required
 *     },
 *   ],
 *   managedAgents: [ // ManagedAgentStateChanges
 *     { // ManagedAgentStateChange
 *       containerName: "STRING_VALUE", // required
 *       managedAgentName: "ExecuteCommandAgent", // required
 *       status: "STRING_VALUE", // required
 *       reason: "STRING_VALUE",
 *     },
 *   ],
 *   pullStartedAt: new Date("TIMESTAMP"),
 *   pullStoppedAt: new Date("TIMESTAMP"),
 *   executionStoppedAt: new Date("TIMESTAMP"),
 * };
 * const command = new SubmitTaskStateChangeCommand(input);
 * const response = await client.send(command);
 * // { // SubmitTaskStateChangeResponse
 * //   acknowledgment: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubmitTaskStateChangeCommandInput - {@link SubmitTaskStateChangeCommandInput}
 * @returns {@link SubmitTaskStateChangeCommandOutput}
 * @see {@link SubmitTaskStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitTaskStateChangeCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
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
export class SubmitTaskStateChangeCommand extends $Command
  .classBuilder<
    SubmitTaskStateChangeCommandInput,
    SubmitTaskStateChangeCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "SubmitTaskStateChange", {})
  .n("ECSClient", "SubmitTaskStateChangeCommand")
  .f(void 0, void 0)
  .ser(se_SubmitTaskStateChangeCommand)
  .de(de_SubmitTaskStateChangeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitTaskStateChangeRequest;
      output: SubmitTaskStateChangeResponse;
    };
    sdk: {
      input: SubmitTaskStateChangeCommandInput;
      output: SubmitTaskStateChangeCommandOutput;
    };
  };
}
