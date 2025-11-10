// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransitGatewayRegistrationsRequest, GetTransitGatewayRegistrationsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetTransitGatewayRegistrations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayRegistrationsCommand}.
 */
export interface GetTransitGatewayRegistrationsCommandInput extends GetTransitGatewayRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayRegistrationsCommand}.
 */
export interface GetTransitGatewayRegistrationsCommandOutput
  extends GetTransitGatewayRegistrationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the transit gateway registrations in a specified
 *             global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayRegistrationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayRegistrationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetTransitGatewayRegistrationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayArns: [ // TransitGatewayArnList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTransitGatewayRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayRegistrationsResponse
 * //   TransitGatewayRegistrations: [ // TransitGatewayRegistrationList
 * //     { // TransitGatewayRegistration
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       TransitGatewayArn: "STRING_VALUE",
 * //       State: { // TransitGatewayRegistrationStateReason
 * //         Code: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED" || "FAILED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayRegistrationsCommandInput - {@link GetTransitGatewayRegistrationsCommandInput}
 * @returns {@link GetTransitGatewayRegistrationsCommandOutput}
 * @see {@link GetTransitGatewayRegistrationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class GetTransitGatewayRegistrationsCommand extends $Command
  .classBuilder<
    GetTransitGatewayRegistrationsCommandInput,
    GetTransitGatewayRegistrationsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetTransitGatewayRegistrations", {})
  .n("NetworkManagerClient", "GetTransitGatewayRegistrationsCommand")
  .sc(GetTransitGatewayRegistrations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayRegistrationsRequest;
      output: GetTransitGatewayRegistrationsResponse;
    };
    sdk: {
      input: GetTransitGatewayRegistrationsCommandInput;
      output: GetTransitGatewayRegistrationsCommandOutput;
    };
  };
}
