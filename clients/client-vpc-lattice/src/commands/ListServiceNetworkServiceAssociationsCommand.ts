// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListServiceNetworkServiceAssociationsRequest,
  ListServiceNetworkServiceAssociationsResponse,
} from "../models/models_0";
import {
  de_ListServiceNetworkServiceAssociationsCommand,
  se_ListServiceNetworkServiceAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceNetworkServiceAssociationsCommand}.
 */
export interface ListServiceNetworkServiceAssociationsCommandInput
  extends ListServiceNetworkServiceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceNetworkServiceAssociationsCommand}.
 */
export interface ListServiceNetworkServiceAssociationsCommandOutput
  extends ListServiceNetworkServiceAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the associations between a service network and a service. You can filter the list
 *    either by service or service network. You must provide either the service network identifier or
 *    the service identifier.</p>
 *          <p>Every association in Amazon VPC Lattice has a unique Amazon Resource Name (ARN), such as when a
 *    service network is associated with a VPC or when a service is associated with a service network.
 *    If the association is for a resource is shared with another account, the association
 *    includes the local account ID as the prefix in the ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListServiceNetworkServiceAssociationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListServiceNetworkServiceAssociationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListServiceNetworkServiceAssociationsRequest
 *   serviceNetworkIdentifier: "STRING_VALUE",
 *   serviceIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceNetworkServiceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceNetworkServiceAssociationsResponse
 * //   items: [ // ServiceNetworkServiceAssociationList // required
 * //     { // ServiceNetworkServiceAssociationSummary
 * //       id: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       serviceId: "STRING_VALUE",
 * //       serviceName: "STRING_VALUE",
 * //       serviceArn: "STRING_VALUE",
 * //       serviceNetworkId: "STRING_VALUE",
 * //       serviceNetworkName: "STRING_VALUE",
 * //       serviceNetworkArn: "STRING_VALUE",
 * //       dnsEntry: { // DnsEntry
 * //         domainName: "STRING_VALUE",
 * //         hostedZoneId: "STRING_VALUE",
 * //       },
 * //       customDomainName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceNetworkServiceAssociationsCommandInput - {@link ListServiceNetworkServiceAssociationsCommandInput}
 * @returns {@link ListServiceNetworkServiceAssociationsCommandOutput}
 * @see {@link ListServiceNetworkServiceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListServiceNetworkServiceAssociationsCommandOutput} for command's `response` shape.
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
export class ListServiceNetworkServiceAssociationsCommand extends $Command
  .classBuilder<
    ListServiceNetworkServiceAssociationsCommandInput,
    ListServiceNetworkServiceAssociationsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "ListServiceNetworkServiceAssociations", {})
  .n("VPCLatticeClient", "ListServiceNetworkServiceAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceNetworkServiceAssociationsCommand)
  .de(de_ListServiceNetworkServiceAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceNetworkServiceAssociationsRequest;
      output: ListServiceNetworkServiceAssociationsResponse;
    };
    sdk: {
      input: ListServiceNetworkServiceAssociationsCommandInput;
      output: ListServiceNetworkServiceAssociationsCommandOutput;
    };
  };
}
