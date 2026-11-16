// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInferenceRouterInput, DescribeInferenceRouterOutput } from "../models/models_3";
import { DescribeInferenceRouter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInferenceRouterCommand}.
 */
export interface DescribeInferenceRouterCommandInput extends DescribeInferenceRouterInput {}
/**
 * @public
 *
 * The output of {@link DescribeInferenceRouterCommand}.
 */
export interface DescribeInferenceRouterCommandOutput extends DescribeInferenceRouterOutput, __MetadataBearer {}

/**
 * <p>Returns information about an inference router, including the routing status of each destination.</p> <p>SageMaker AI checks each destination with your permissions when you call this operation, so callers with different permissions can see a different <code>RoutingStatus</code>. To get the router's tags, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTags.html">ListTags</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeInferenceRouterCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeInferenceRouterCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeInferenceRouterInput
 *   InferenceRouterName: "STRING_VALUE", // required
 * };
 * const command = new DescribeInferenceRouterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInferenceRouterOutput
 * //   InferenceRouterName: "STRING_VALUE", // required
 * //   InferenceRouterArn: "STRING_VALUE", // required
 * //   RoutingTargets: [ // RoutingTargetList // required
 * //     { // RoutingTarget
 * //       Name: "STRING_VALUE", // required
 * //       Destinations: [ // DestinationList // required
 * //         { // Destination
 * //           ResourceArn: "STRING_VALUE", // required
 * //           RoutingStatus: "Routable" || "Unroutable" || "Unknown",
 * //         },
 * //       ],
 * //       AsyncInferenceConfig: { // RoutingTargetAsyncInferenceConfig
 * //         OutputConfig: { // RoutingTargetAsyncInferenceOutputConfig
 * //           S3OutputPath: "STRING_VALUE", // required
 * //           S3FailurePath: "STRING_VALUE", // required
 * //           KmsKeyId: "STRING_VALUE",
 * //           NotificationConfig: { // RoutingTargetAsyncInferenceNotificationConfig
 * //             SuccessTopic: "STRING_VALUE",
 * //             ErrorTopic: "STRING_VALUE",
 * //           },
 * //         },
 * //         ClientConfig: { // RoutingTargetAsyncInferenceClientConfig
 * //           MaxTimeInBacklogSeconds: Number("int"),
 * //         },
 * //       },
 * //       RoutingPreference: "LocalRegionFirst" || "InstancePoolOrder",
 * //     },
 * //   ],
 * //   Status: "InService" || "Creating" || "Updating" || "Failed" || "Deleting", // required
 * //   StatusReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeInferenceRouterCommandInput - {@link DescribeInferenceRouterCommandInput}
 * @returns {@link DescribeInferenceRouterCommandOutput}
 * @see {@link DescribeInferenceRouterCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceRouterCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class DescribeInferenceRouterCommand extends command<DescribeInferenceRouterCommandInput, DescribeInferenceRouterCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInferenceRouter",
  DescribeInferenceRouter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInferenceRouterInput;
      output: DescribeInferenceRouterOutput;
    };
    sdk: {
      input: DescribeInferenceRouterCommandInput;
      output: DescribeInferenceRouterCommandOutput;
    };
  };
}
