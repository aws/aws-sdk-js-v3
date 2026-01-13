// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetServiceNetworkResourceAssociationRequest,
  GetServiceNetworkResourceAssociationResponse,
} from "../models/models_0";
import { GetServiceNetworkResourceAssociation$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceNetworkResourceAssociationCommand}.
 */
export interface GetServiceNetworkResourceAssociationCommandInput extends GetServiceNetworkResourceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceNetworkResourceAssociationCommand}.
 */
export interface GetServiceNetworkResourceAssociationCommandOutput extends GetServiceNetworkResourceAssociationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified association between a service network and a resource configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetServiceNetworkResourceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetServiceNetworkResourceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // GetServiceNetworkResourceAssociationRequest
 *   serviceNetworkResourceAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetServiceNetworkResourceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceNetworkResourceAssociationResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   resourceConfigurationId: "STRING_VALUE",
 * //   resourceConfigurationArn: "STRING_VALUE",
 * //   resourceConfigurationName: "STRING_VALUE",
 * //   serviceNetworkId: "STRING_VALUE",
 * //   serviceNetworkArn: "STRING_VALUE",
 * //   serviceNetworkName: "STRING_VALUE",
 * //   failureReason: "STRING_VALUE",
 * //   failureCode: "STRING_VALUE",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   privateDnsEntry: { // DnsEntry
 * //     domainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //   },
 * //   privateDnsEnabled: true || false,
 * //   dnsEntry: {
 * //     domainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //   },
 * //   isManagedAssociation: true || false,
 * //   domainVerificationStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceNetworkResourceAssociationCommandInput - {@link GetServiceNetworkResourceAssociationCommandInput}
 * @returns {@link GetServiceNetworkResourceAssociationCommandOutput}
 * @see {@link GetServiceNetworkResourceAssociationCommandInput} for command's `input` shape.
 * @see {@link GetServiceNetworkResourceAssociationCommandOutput} for command's `response` shape.
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
export class GetServiceNetworkResourceAssociationCommand extends $Command
  .classBuilder<
    GetServiceNetworkResourceAssociationCommandInput,
    GetServiceNetworkResourceAssociationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "GetServiceNetworkResourceAssociation", {})
  .n("VPCLatticeClient", "GetServiceNetworkResourceAssociationCommand")
  .sc(GetServiceNetworkResourceAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceNetworkResourceAssociationRequest;
      output: GetServiceNetworkResourceAssociationResponse;
    };
    sdk: {
      input: GetServiceNetworkResourceAssociationCommandInput;
      output: GetServiceNetworkResourceAssociationCommandOutput;
    };
  };
}
