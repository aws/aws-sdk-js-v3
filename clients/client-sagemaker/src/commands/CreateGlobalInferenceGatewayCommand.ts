// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGlobalInferenceGatewayRequest, CreateGlobalInferenceGatewayResponse } from "../models/models_1";
import { CreateGlobalInferenceGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGlobalInferenceGatewayCommand}.
 */
export interface CreateGlobalInferenceGatewayCommandInput extends CreateGlobalInferenceGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateGlobalInferenceGatewayCommand}.
 */
export interface CreateGlobalInferenceGatewayCommandOutput extends CreateGlobalInferenceGatewayResponse, __MetadataBearer {}

/**
 * Creates a global inference gateway. This operation is asynchronous: the global inference gateway
 * starts in the `CREATING` status. To check its status, call `DescribeGlobalInferenceGateway` until
 * the status is `ACTIVE` or `FAILED`. The operation fails with `ResourceInUse` if the name is already
 * in use, or if one of the in-cluster inference gateways in `Gateways` already belongs to another
 * global inference gateway.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateGlobalInferenceGatewayCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateGlobalInferenceGatewayCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateGlobalInferenceGatewayRequest
 *   Name: "STRING_VALUE", // required
 *   Routing: { // GlobalInferenceGatewayRouting
 *     Weights: { // GlobalInferenceGatewayRoutingWeights
 *       KVHeadroom: Number("float"),
 *       QueueDepth: Number("float"),
 *       RegionProximity: Number("float"),
 *       ErrorRate: Number("float"),
 *     },
 *   },
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   Gateways: [ // GlobalInferenceGatewayMembers // required
 *     { // GlobalInferenceGatewayMember
 *       Name: "STRING_VALUE", // required
 *       Namespace: "STRING_VALUE", // required
 *       ClusterArn: "STRING_VALUE", // required
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
 * const command = new CreateGlobalInferenceGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlobalInferenceGatewayResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //   ExecutionRoleArn: "STRING_VALUE",
 * //   Routing: { // GlobalInferenceGatewayRouting
 * //     Weights: { // GlobalInferenceGatewayRoutingWeights
 * //       KVHeadroom: Number("float"),
 * //       QueueDepth: Number("float"),
 * //       RegionProximity: Number("float"),
 * //       ErrorRate: Number("float"),
 * //     },
 * //   },
 * //   Gateways: [ // GlobalInferenceGatewayMembers
 * //     { // GlobalInferenceGatewayMember
 * //       Name: "STRING_VALUE", // required
 * //       Namespace: "STRING_VALUE", // required
 * //       ClusterArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateGlobalInferenceGatewayCommandInput - {@link CreateGlobalInferenceGatewayCommandInput}
 * @returns {@link CreateGlobalInferenceGatewayCommandOutput}
 * @see {@link CreateGlobalInferenceGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalInferenceGatewayCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
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
export class CreateGlobalInferenceGatewayCommand extends command<CreateGlobalInferenceGatewayCommandInput, CreateGlobalInferenceGatewayCommandOutput>(
  _ep0,
  _mw0,
  "CreateGlobalInferenceGateway",
  CreateGlobalInferenceGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlobalInferenceGatewayRequest;
      output: CreateGlobalInferenceGatewayResponse;
    };
    sdk: {
      input: CreateGlobalInferenceGatewayCommandInput;
      output: CreateGlobalInferenceGatewayCommandOutput;
    };
  };
}
