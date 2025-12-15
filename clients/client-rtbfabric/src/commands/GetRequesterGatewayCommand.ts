// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRequesterGatewayRequest, GetRequesterGatewayResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { GetRequesterGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRequesterGatewayCommand}.
 */
export interface GetRequesterGatewayCommandInput extends GetRequesterGatewayRequest {}
/**
 * @public
 *
 * The output of {@link GetRequesterGatewayCommand}.
 */
export interface GetRequesterGatewayCommandOutput extends GetRequesterGatewayResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a requester gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetRequesterGatewayCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetRequesterGatewayCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetRequesterGatewayRequest
 *   gatewayId: "STRING_VALUE", // required
 * };
 * const command = new GetRequesterGatewayCommand(input);
 * const response = await client.send(command);
 * // { // GetRequesterGatewayResponse
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * //   domainName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   vpcId: "STRING_VALUE", // required
 * //   subnetIds: [ // SubnetIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   securityGroupIds: [ // SecurityGroupIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   gatewayId: "STRING_VALUE", // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   activeLinksCount: Number("int"),
 * //   totalLinksCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetRequesterGatewayCommandInput - {@link GetRequesterGatewayCommandInput}
 * @returns {@link GetRequesterGatewayCommandOutput}
 * @see {@link GetRequesterGatewayCommandInput} for command's `input` shape.
 * @see {@link GetRequesterGatewayCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Get requester gateway details
 * ```javascript
 * // Get requester gateway
 * const input = {
 *   gatewayId: "rtb-gw-12345678"
 * };
 * const command = new GetRequesterGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   activeLinksCount: 2,
 *   createdAt: "2024-01-15T10:30:00Z",
 *   description: "My requester gateway",
 *   domainName: "rtb-gw-12345678.example.com",
 *   gatewayId: "rtb-gw-12345678",
 *   securityGroupIds: [
 *     "sg-12345678"
 *   ],
 *   status: "ACTIVE",
 *   subnetIds: [
 *     "subnet-12345678",
 *     "subnet-87654321"
 *   ],
 *   totalLinksCount: 5,
 *   updatedAt: "2024-01-15T10:35:00Z",
 *   vpcId: "vpc-12345678"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRequesterGatewayCommand extends $Command
  .classBuilder<
    GetRequesterGatewayCommandInput,
    GetRequesterGatewayCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "GetRequesterGateway", {})
  .n("RTBFabricClient", "GetRequesterGatewayCommand")
  .sc(GetRequesterGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRequesterGatewayRequest;
      output: GetRequesterGatewayResponse;
    };
    sdk: {
      input: GetRequesterGatewayCommandInput;
      output: GetRequesterGatewayCommandOutput;
    };
  };
}
