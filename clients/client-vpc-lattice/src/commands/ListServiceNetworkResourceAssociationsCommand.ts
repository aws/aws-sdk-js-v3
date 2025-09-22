// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListServiceNetworkResourceAssociationsRequest,
  ListServiceNetworkResourceAssociationsResponse,
} from "../models/models_0";
import { ListServiceNetworkResourceAssociations } from "../schemas/schemas_4_Network";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceNetworkResourceAssociationsCommand}.
 */
export interface ListServiceNetworkResourceAssociationsCommandInput
  extends ListServiceNetworkResourceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceNetworkResourceAssociationsCommand}.
 */
export interface ListServiceNetworkResourceAssociationsCommandOutput
  extends ListServiceNetworkResourceAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the associations between a service network and a resource configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListServiceNetworkResourceAssociationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListServiceNetworkResourceAssociationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListServiceNetworkResourceAssociationsRequest
 *   serviceNetworkIdentifier: "STRING_VALUE",
 *   resourceConfigurationIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceNetworkResourceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceNetworkResourceAssociationsResponse
 * //   items: [ // ServiceNetworkResourceAssociationList // required
 * //     { // ServiceNetworkResourceAssociationSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       resourceConfigurationId: "STRING_VALUE",
 * //       resourceConfigurationArn: "STRING_VALUE",
 * //       resourceConfigurationName: "STRING_VALUE",
 * //       serviceNetworkId: "STRING_VALUE",
 * //       serviceNetworkArn: "STRING_VALUE",
 * //       serviceNetworkName: "STRING_VALUE",
 * //       dnsEntry: { // DnsEntry
 * //         domainName: "STRING_VALUE",
 * //         hostedZoneId: "STRING_VALUE",
 * //       },
 * //       privateDnsEntry: {
 * //         domainName: "STRING_VALUE",
 * //         hostedZoneId: "STRING_VALUE",
 * //       },
 * //       isManagedAssociation: true || false,
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceNetworkResourceAssociationsCommandInput - {@link ListServiceNetworkResourceAssociationsCommandInput}
 * @returns {@link ListServiceNetworkResourceAssociationsCommandOutput}
 * @see {@link ListServiceNetworkResourceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListServiceNetworkResourceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class ListServiceNetworkResourceAssociationsCommand extends $Command
  .classBuilder<
    ListServiceNetworkResourceAssociationsCommandInput,
    ListServiceNetworkResourceAssociationsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "ListServiceNetworkResourceAssociations", {})
  .n("VPCLatticeClient", "ListServiceNetworkResourceAssociationsCommand")
  .sc(ListServiceNetworkResourceAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceNetworkResourceAssociationsRequest;
      output: ListServiceNetworkResourceAssociationsResponse;
    };
    sdk: {
      input: ListServiceNetworkResourceAssociationsCommandInput;
      output: ListServiceNetworkResourceAssociationsCommandOutput;
    };
  };
}
