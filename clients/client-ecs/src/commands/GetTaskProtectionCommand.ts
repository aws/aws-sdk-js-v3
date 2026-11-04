// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTaskProtectionRequest, GetTaskProtectionResponse } from "../models/models_1";
import { GetTaskProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTaskProtectionCommand}.
 */
export interface GetTaskProtectionCommandInput extends GetTaskProtectionRequest {}
/**
 * @public
 *
 * The output of {@link GetTaskProtectionCommand}.
 */
export interface GetTaskProtectionCommandOutput extends GetTaskProtectionResponse, __MetadataBearer {}

/**
 * Retrieves the protection status of tasks in an Amazon ECS service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, GetTaskProtectionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, GetTaskProtectionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // GetTaskProtectionRequest
 *   cluster: "STRING_VALUE", // required
 *   tasks: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetTaskProtectionCommand(input);
 * const response = await client.send(command);
 * // { // GetTaskProtectionResponse
 * //   protectedTasks: [ // ProtectedTasks
 * //     { // ProtectedTask
 * //       taskArn: "STRING_VALUE",
 * //       protectionEnabled: true || false,
 * //       expirationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTaskProtectionCommandInput - {@link GetTaskProtectionCommandInput}
 * @returns {@link GetTaskProtectionCommandOutput}
 * @see {@link GetTaskProtectionCommandInput} for command's `input` shape.
 * @see {@link GetTaskProtectionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *
 * The specified cluster wasn't found. You can view your available clusters with [ListClusters](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html). Amazon ECS clusters are Region specific.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource wasn't found.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *
 * The specified task isn't supported in this Region.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To get the protection status of a task
 * ```javascript
 * // In this example, we get the protection status for a single task.
 * const input = {
 *   cluster: "test-task-protection",
 *   tasks: [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new GetTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   protectedTasks: [
 *     {
 *       expirationDate: "2022-11-02T06:56:32.553Z",
 *       protectionEnabled: true,
 *       taskArn: "arn:aws:ecs:us-west-2:012345678910:task/default/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTaskProtectionCommand extends command<GetTaskProtectionCommandInput, GetTaskProtectionCommandOutput>(
  _ep0,
  _mw0,
  "GetTaskProtection",
  GetTaskProtection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTaskProtectionRequest;
      output: GetTaskProtectionResponse;
    };
    sdk: {
      input: GetTaskProtectionCommandInput;
      output: GetTaskProtectionCommandOutput;
    };
  };
}
