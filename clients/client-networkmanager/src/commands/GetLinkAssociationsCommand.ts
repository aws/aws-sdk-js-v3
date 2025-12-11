// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLinkAssociationsRequest, GetLinkAssociationsResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { GetLinkAssociations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLinkAssociationsCommand}.
 */
export interface GetLinkAssociationsCommandInput extends GetLinkAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetLinkAssociationsCommand}.
 */
export interface GetLinkAssociationsCommandOutput extends GetLinkAssociationsResponse, __MetadataBearer {}

/**
 * <p>Gets the link associations for a device or a link. Either the device ID or the link ID
 *             must be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetLinkAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetLinkAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetLinkAssociationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE",
 *   LinkId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetLinkAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetLinkAssociationsResponse
 * //   LinkAssociations: [ // LinkAssociationList
 * //     { // LinkAssociation
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       LinkId: "STRING_VALUE",
 * //       LinkAssociationState: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLinkAssociationsCommandInput - {@link GetLinkAssociationsCommandInput}
 * @returns {@link GetLinkAssociationsCommandOutput}
 * @see {@link GetLinkAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetLinkAssociationsCommandOutput} for command's `response` shape.
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
export class GetLinkAssociationsCommand extends $Command
  .classBuilder<
    GetLinkAssociationsCommandInput,
    GetLinkAssociationsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetLinkAssociations", {})
  .n("NetworkManagerClient", "GetLinkAssociationsCommand")
  .sc(GetLinkAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinkAssociationsRequest;
      output: GetLinkAssociationsResponse;
    };
    sdk: {
      input: GetLinkAssociationsCommandInput;
      output: GetLinkAssociationsCommandOutput;
    };
  };
}
