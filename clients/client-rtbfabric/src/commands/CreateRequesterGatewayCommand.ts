// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRequesterGatewayRequest, CreateRequesterGatewayResponse } from "../models/models_0";
import { CreateRequesterGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRequesterGatewayCommand}.
 */
export interface CreateRequesterGatewayCommandInput extends CreateRequesterGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateRequesterGatewayCommand}.
 */
export interface CreateRequesterGatewayCommandOutput extends CreateRequesterGatewayResponse, __MetadataBearer {}

/**
 * Creates a requester gateway.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, CreateRequesterGatewayCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, CreateRequesterGatewayCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // CreateRequesterGatewayRequest
 *   vpcId: "STRING_VALUE", // required
 *   subnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [ // SecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRequesterGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateRequesterGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   domainName: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param CreateRequesterGatewayCommandInput - {@link CreateRequesterGatewayCommandInput}
 * @returns {@link CreateRequesterGatewayCommandOutput}
 * @see {@link CreateRequesterGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateRequesterGatewayCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request could not be completed because of an internal server error. Try your call again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request could not be completed because the resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request could not be completed because you exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request could not be completed because it fails satisfy the constraints specified by the service.
 *
 * @throws {@link RTBFabricServiceException}
 *
 * Base exception class for all service exceptions from RTBFabric service.
 *
 * @example Create a requester gateway
 * ```javascript
 * // Create requester gateway
 * const input = {
 *   clientToken: "12345678-1234-1234-1234-123456789012",
 *   description: "My requester gateway",
 *   securityGroupIds: [
 *     "sg-12345678"
 *   ],
 *   subnetIds: [
 *     "subnet-12345678",
 *     "subnet-87654321"
 *   ],
 *   vpcId: "vpc-12345678"
 * };
 * const command = new CreateRequesterGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   domainName: "rtb-gw-12345678.example.com",
 *   gatewayId: "rtb-gw-12345678",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRequesterGatewayCommand extends command<CreateRequesterGatewayCommandInput, CreateRequesterGatewayCommandOutput>(
  _ep0,
  _mw0,
  "CreateRequesterGateway",
  CreateRequesterGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRequesterGatewayRequest;
      output: CreateRequesterGatewayResponse;
    };
    sdk: {
      input: CreateRequesterGatewayCommandInput;
      output: CreateRequesterGatewayCommandOutput;
    };
  };
}
