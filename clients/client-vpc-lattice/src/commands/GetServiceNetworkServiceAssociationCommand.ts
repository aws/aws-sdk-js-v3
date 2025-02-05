// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetServiceNetworkServiceAssociationRequest,
  GetServiceNetworkServiceAssociationResponse,
} from "../models/models_0";
import {
  de_GetServiceNetworkServiceAssociationCommand,
  se_GetServiceNetworkServiceAssociationCommand,
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
 * The input for {@link GetServiceNetworkServiceAssociationCommand}.
 */
export interface GetServiceNetworkServiceAssociationCommandInput extends GetServiceNetworkServiceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceNetworkServiceAssociationCommand}.
 */
export interface GetServiceNetworkServiceAssociationCommandOutput
  extends GetServiceNetworkServiceAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the specified association between a service network and a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetServiceNetworkServiceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetServiceNetworkServiceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VPCLatticeClient(config);
 * const input = { // GetServiceNetworkServiceAssociationRequest
 *   serviceNetworkServiceAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetServiceNetworkServiceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceNetworkServiceAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   serviceId: "STRING_VALUE",
 * //   serviceName: "STRING_VALUE",
 * //   serviceArn: "STRING_VALUE",
 * //   serviceNetworkId: "STRING_VALUE",
 * //   serviceNetworkName: "STRING_VALUE",
 * //   serviceNetworkArn: "STRING_VALUE",
 * //   dnsEntry: { // DnsEntry
 * //     domainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //   },
 * //   customDomainName: "STRING_VALUE",
 * //   failureMessage: "STRING_VALUE",
 * //   failureCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceNetworkServiceAssociationCommandInput - {@link GetServiceNetworkServiceAssociationCommandInput}
 * @returns {@link GetServiceNetworkServiceAssociationCommandOutput}
 * @see {@link GetServiceNetworkServiceAssociationCommandInput} for command's `input` shape.
 * @see {@link GetServiceNetworkServiceAssociationCommandOutput} for command's `response` shape.
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
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 * @public
 */
export class GetServiceNetworkServiceAssociationCommand extends $Command
  .classBuilder<
    GetServiceNetworkServiceAssociationCommandInput,
    GetServiceNetworkServiceAssociationCommandOutput,
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
  .s("MercuryControlPlane", "GetServiceNetworkServiceAssociation", {})
  .n("VPCLatticeClient", "GetServiceNetworkServiceAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceNetworkServiceAssociationCommand)
  .de(de_GetServiceNetworkServiceAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceNetworkServiceAssociationRequest;
      output: GetServiceNetworkServiceAssociationResponse;
    };
    sdk: {
      input: GetServiceNetworkServiceAssociationCommandInput;
      output: GetServiceNetworkServiceAssociationCommandOutput;
    };
  };
}
