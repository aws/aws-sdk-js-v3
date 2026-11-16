// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateInferenceRouterInput, CreateInferenceRouterOutput } from "../models/models_1";
import { CreateInferenceRouter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateInferenceRouterCommand}.
 */
export interface CreateInferenceRouterCommandInput extends CreateInferenceRouterInput {}
/**
 * @public
 *
 * The output of {@link CreateInferenceRouterCommand}.
 */
export interface CreateInferenceRouterCommandOutput extends CreateInferenceRouterOutput, __MetadataBearer {}

/**
 * <p>Creates an inference router. An inference router is a Regional SageMaker AI resource that sends each inference request to one of the endpoints or inference components that you list for a routing target. These destinations can be in any Amazon Web Services account, and in any Amazon Web Services Region in the same partition as the router.</p> <p>The router's status is <code>Creating</code> until it's ready to use. SageMaker AI checks that each endpoint is a real-time or asynchronous endpoint, as the routing target requires, and rejects one of the wrong type. It checks endpoints in other accounts with your credentials, so the endpoint policy must allow <code>sagemaker:DescribeEndpoint</code>. SageMaker AI accepts an endpoint that it can't check, for example one that doesn't exist. Requests to it fail if it's the wrong type or doesn't exist. To see the status of each destination, call <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceRouter.html">DescribeInferenceRouter</a> and see the <code>RoutingStatus</code> of each destination.</p> <p>To invoke the router, use <code>InvokeInferenceRouter</code> or <code>InvokeInferenceRouterAsync</code>. For information about inference routers, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/inference-router.html">Route requests across Regions with inference routers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateInferenceRouterCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateInferenceRouterCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateInferenceRouterInput
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
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInferenceRouterCommand(input);
 * const response = await client.send(command);
 * // { // CreateInferenceRouterOutput
 * //   InferenceRouterArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInferenceRouterCommandInput - {@link CreateInferenceRouterCommandInput}
 * @returns {@link CreateInferenceRouterCommandOutput}
 * @see {@link CreateInferenceRouterCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceRouterCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceAlreadyExists} (client fault)
 *  <p>The resource that you are trying to create already exists. Use a different resource name, or delete the existing resource before retrying.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateInferenceRouterCommand extends command<CreateInferenceRouterCommandInput, CreateInferenceRouterCommandOutput>(
  _ep0,
  _mw0,
  "CreateInferenceRouter",
  CreateInferenceRouter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInferenceRouterInput;
      output: CreateInferenceRouterOutput;
    };
    sdk: {
      input: CreateInferenceRouterCommandInput;
      output: CreateInferenceRouterCommandOutput;
    };
  };
}
