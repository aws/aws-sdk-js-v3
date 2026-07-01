// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SubmitContainerStateChangeRequest, SubmitContainerStateChangeResponse } from "../models/models_0";
import { SubmitContainerStateChange$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitContainerStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitContainerStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
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
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
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
export class SubmitContainerStateChangeCommand extends command<SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput>(
  _ep0,
  _mw0,
  "SubmitContainerStateChange",
  SubmitContainerStateChange$
) {
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
