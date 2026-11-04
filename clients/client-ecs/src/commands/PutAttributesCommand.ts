// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAttributesRequest, PutAttributesResponse } from "../models/models_0";
import { PutAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAttributesCommand}.
 */
export interface PutAttributesCommandInput extends PutAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutAttributesCommand}.
 */
export interface PutAttributesCommandOutput extends PutAttributesResponse, __MetadataBearer {}

/**
 * Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use [DeleteAttributes](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html). For more information, see [Attributes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // PutAttributesRequest
 *   cluster: "STRING_VALUE",
 *   attributes: [ // Attributes // required
 *     { // Attribute
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *       targetType: "container-instance",
 *       targetId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutAttributesCommand(input);
 * const response = await client.send(command);
 * // { // PutAttributesResponse
 * //   attributes: [ // Attributes
 * //     { // Attribute
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //       targetType: "container-instance",
 * //       targetId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutAttributesCommandInput - {@link PutAttributesCommandInput}
 * @returns {@link PutAttributesCommandOutput}
 * @see {@link PutAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link AttributeLimitExceededException} (client fault)
 *
 * You can apply up to 10 custom attributes for each resource. You can view the attributes of a resource with [ListAttributes](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html). You can remove existing attributes on a resource with [DeleteAttributes](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html).
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
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link TargetNotFoundException} (client fault)
 *
 * The specified target wasn't found. You can view your available container instances with [ListContainerInstances](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html). Amazon ECS container instances are cluster-specific and Region-specific.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To create or update an attribute on a resource
 * ```javascript
 * // This example adds an attribute "stack" with the value "production" to a container instance.
 * const input = {
 *   attributes: [
 *     {
 *       name: "stack",
 *       targetId: "arn:aws:ecs:us-west-2:123456789012:container-instance/1c3be8ed-df30-47b4-8f1e-6e68ebd01f34",
 *       value: "production"
 *     }
 *   ],
 *   cluster: "MyCluster"
 * };
 * const command = new PutAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attributes: [
 *     {
 *       name: "stack",
 *       targetId: "arn:aws:ecs:us-west-2:123456789012:container-instance/1c3be8ed-df30-47b4-8f1e-6e68ebd01f34",
 *       value: "production"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutAttributesCommand extends command<PutAttributesCommandInput, PutAttributesCommandOutput>(
  _ep0,
  _mw0,
  "PutAttributes",
  PutAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAttributesRequest;
      output: PutAttributesResponse;
    };
    sdk: {
      input: PutAttributesCommandInput;
      output: PutAttributesCommandOutput;
    };
  };
}
