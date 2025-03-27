// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceConfigurationRequest, GetResourceConfigurationResponse } from "../models/models_0";
import { de_GetResourceConfigurationCommand, se_GetResourceConfigurationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceConfigurationCommand}.
 */
export interface GetResourceConfigurationCommandInput extends GetResourceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceConfigurationCommand}.
 */
export interface GetResourceConfigurationCommandOutput extends GetResourceConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified resource configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetResourceConfigurationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetResourceConfigurationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // GetResourceConfigurationRequest
 *   resourceConfigurationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetResourceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceConfigurationResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   resourceGatewayId: "STRING_VALUE",
 * //   resourceConfigurationGroupId: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   allowAssociationToShareableServiceNetwork: true || false,
 * //   portRanges: [ // PortRangeList
 * //     "STRING_VALUE",
 * //   ],
 * //   protocol: "STRING_VALUE",
 * //   customDomainName: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   resourceConfigurationDefinition: { // ResourceConfigurationDefinition Union: only one key present
 * //     dnsResource: { // DnsResource
 * //       domainName: "STRING_VALUE",
 * //       ipAddressType: "STRING_VALUE",
 * //     },
 * //     ipResource: { // IpResource
 * //       ipAddress: "STRING_VALUE",
 * //     },
 * //     arnResource: { // ArnResource
 * //       arn: "STRING_VALUE",
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   amazonManaged: true || false,
 * //   failureReason: "STRING_VALUE",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetResourceConfigurationCommandInput - {@link GetResourceConfigurationCommandInput}
 * @returns {@link GetResourceConfigurationCommandOutput}
 * @see {@link GetResourceConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetResourceConfigurationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetResourceConfigurationCommand extends $Command
  .classBuilder<
    GetResourceConfigurationCommandInput,
    GetResourceConfigurationCommandOutput,
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
  .s("MercuryControlPlane", "GetResourceConfiguration", {})
  .n("VPCLatticeClient", "GetResourceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceConfigurationCommand)
  .de(de_GetResourceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceConfigurationRequest;
      output: GetResourceConfigurationResponse;
    };
    sdk: {
      input: GetResourceConfigurationCommandInput;
      output: GetResourceConfigurationCommandOutput;
    };
  };
}
