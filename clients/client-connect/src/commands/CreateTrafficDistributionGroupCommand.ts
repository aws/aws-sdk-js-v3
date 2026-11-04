// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTrafficDistributionGroupRequest, CreateTrafficDistributionGroupResponse } from "../models/models_1";
import { CreateTrafficDistributionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTrafficDistributionGroupCommand}.
 */
export interface CreateTrafficDistributionGroupCommandInput extends CreateTrafficDistributionGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficDistributionGroupCommand}.
 */
export interface CreateTrafficDistributionGroupCommandOutput extends CreateTrafficDistributionGroupResponse, __MetadataBearer {}

/**
 * Creates a traffic distribution group given an Connect Customer instance that has been replicated.
 *
 * > **Note:** The `SignInConfig` distribution is available only on a default `TrafficDistributionGroup` (see the `IsDefault` parameter in the [TrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html) data type). If you call `UpdateTrafficDistribution` with a modified `SignInConfig` and a non-default `TrafficDistributionGroup`, an `InvalidRequestException` is returned.
 *
 * For more information about creating traffic distribution groups, see [Set up traffic distribution groups](https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html) in the *Connect Customer Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateTrafficDistributionGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateTrafficDistributionGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateTrafficDistributionGroupRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTrafficDistributionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficDistributionGroupResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrafficDistributionGroupCommandInput - {@link CreateTrafficDistributionGroupCommandInput}
 * @returns {@link CreateTrafficDistributionGroupCommandOutput}
 * @see {@link CreateTrafficDistributionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficDistributionGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *
 * The resource is not ready.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateTrafficDistributionGroupCommand extends command<CreateTrafficDistributionGroupCommandInput, CreateTrafficDistributionGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrafficDistributionGroup",
  CreateTrafficDistributionGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficDistributionGroupRequest;
      output: CreateTrafficDistributionGroupResponse;
    };
    sdk: {
      input: CreateTrafficDistributionGroupCommandInput;
      output: CreateTrafficDistributionGroupCommandOutput;
    };
  };
}
