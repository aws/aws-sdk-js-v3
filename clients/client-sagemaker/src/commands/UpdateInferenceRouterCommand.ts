// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateInferenceRouterInput, UpdateInferenceRouterOutput } from "../models/models_5";
import { UpdateInferenceRouter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateInferenceRouterCommand}.
 */
export interface UpdateInferenceRouterCommandInput extends UpdateInferenceRouterInput {}
/**
 * @public
 *
 * The output of {@link UpdateInferenceRouterCommand}.
 */
export interface UpdateInferenceRouterCommandOutput extends UpdateInferenceRouterOutput, __MetadataBearer {}

/**
 * <p>Updates the routing targets of an inference router. The routing targets that you specify replace all of the router's existing routing targets. To change one routing target, call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceRouter.html">DescribeInferenceRouter</a>, edit the routing targets, and send all of them.</p> <p>The update is applied in full or not at all, and each request uses either the previous configuration or the new one. Updates typically take effect within about 2 minutes.</p> <p>If the router is being created, updated, or deleted, or another request changes it at the same time, you get a <code>ConflictException</code>. Describe the router, and then send your update again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateInferenceRouterCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateInferenceRouterCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateInferenceRouterInput
 *   InferenceRouterName: "STRING_VALUE", // required
 *   RoutingTargets: [ // RoutingTargetList // required
 *     { // RoutingTarget
 *       Name: "STRING_VALUE", // required
 *       Destinations: [ // DestinationList // required
 *         { // Destination
 *           ResourceArn: "STRING_VALUE", // required
 *           RoutingStatus: "Routable" || "Unroutable" || "Unknown",
 *         },
 *       ],
 *       AsyncInferenceConfig: { // RoutingTargetAsyncInferenceConfig
 *         OutputConfig: { // RoutingTargetAsyncInferenceOutputConfig
 *           S3OutputPath: "STRING_VALUE", // required
 *           S3FailurePath: "STRING_VALUE", // required
 *           KmsKeyId: "STRING_VALUE",
 *           NotificationConfig: { // RoutingTargetAsyncInferenceNotificationConfig
 *             SuccessTopic: "STRING_VALUE",
 *             ErrorTopic: "STRING_VALUE",
 *           },
 *         },
 *         ClientConfig: { // RoutingTargetAsyncInferenceClientConfig
 *           MaxTimeInBacklogSeconds: Number("int"),
 *         },
 *       },
 *       RoutingPreference: "LocalRegionFirst" || "InstancePoolOrder",
 *     },
 *   ],
 * };
 * const command = new UpdateInferenceRouterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInferenceRouterOutput
 * //   InferenceRouterArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateInferenceRouterCommandInput - {@link UpdateInferenceRouterCommandInput}
 * @returns {@link UpdateInferenceRouterCommandOutput}
 * @see {@link UpdateInferenceRouterCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceRouterCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class UpdateInferenceRouterCommand extends command<UpdateInferenceRouterCommandInput, UpdateInferenceRouterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateInferenceRouter",
  UpdateInferenceRouter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInferenceRouterInput;
      output: UpdateInferenceRouterOutput;
    };
    sdk: {
      input: UpdateInferenceRouterCommandInput;
      output: UpdateInferenceRouterCommandOutput;
    };
  };
}
