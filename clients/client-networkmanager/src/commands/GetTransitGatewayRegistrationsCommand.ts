// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTransitGatewayRegistrationsRequest, GetTransitGatewayRegistrationsResponse } from "../models/models_0";
import { GetTransitGatewayRegistrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetTransitGatewayRegistrationsCommandOutput extends GetTransitGatewayRegistrationsResponse, __MetadataBearer {}

/**
 * Gets information about the transit gateway registrations in a specified global network.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class GetTransitGatewayRegistrationsCommand extends command<GetTransitGatewayRegistrationsCommandInput, GetTransitGatewayRegistrationsCommandOutput>(
  _ep0,
  _mw0,
  "GetTransitGatewayRegistrations",
  GetTransitGatewayRegistrations$
) {
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
