// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTrafficDistributionGroupRequest, CreateTrafficDistributionGroupResponse } from "../models/models_0";
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
 * <p>Creates a traffic distribution group given an Connect Customer instance that has been replicated.</p>
 *          <note>
 *             <p>The <code>SignInConfig</code> distribution is available only on a
 * default <code>TrafficDistributionGroup</code> (see the <code>IsDefault</code> parameter in the
 * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html">TrafficDistributionGroup</a>
 *  data type). If you call
 *     <code>UpdateTrafficDistribution</code> with a modified <code>SignInConfig</code> and a non-default <code>TrafficDistributionGroup</code>,
 *     an <code>InvalidRequestException</code> is returned.</p>
 *          </note>
 *          <p>For more information about creating traffic distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html">Set up traffic distribution groups</a> in the
 *      <i>Connect Customer Administrator Guide</i>. </p>
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>The resource is not ready.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
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
