// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceNetworkRequest, GetServiceNetworkResponse } from "../models/models_0";
import { GetServiceNetwork } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceNetworkCommand}.
 */
export interface GetServiceNetworkCommandInput extends GetServiceNetworkRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceNetworkCommand}.
 */
export interface GetServiceNetworkCommandOutput extends GetServiceNetworkResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified service network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetServiceNetworkCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetServiceNetworkCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // GetServiceNetworkRequest
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetServiceNetworkCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceNetworkResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   arn: "STRING_VALUE",
 * //   authType: "STRING_VALUE",
 * //   sharingConfig: { // SharingConfig
 * //     enabled: true || false,
 * //   },
 * //   numberOfAssociatedVPCs: Number("long"),
 * //   numberOfAssociatedServices: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetServiceNetworkCommandInput - {@link GetServiceNetworkCommandInput}
 * @returns {@link GetServiceNetworkCommandOutput}
 * @see {@link GetServiceNetworkCommandInput} for command's `input` shape.
 * @see {@link GetServiceNetworkCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class GetServiceNetworkCommand extends $Command
  .classBuilder<
    GetServiceNetworkCommandInput,
    GetServiceNetworkCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "GetServiceNetwork", {})
  .n("VPCLatticeClient", "GetServiceNetworkCommand")
  .sc(GetServiceNetwork)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceNetworkRequest;
      output: GetServiceNetworkResponse;
    };
    sdk: {
      input: GetServiceNetworkCommandInput;
      output: GetServiceNetworkCommandOutput;
    };
  };
}
