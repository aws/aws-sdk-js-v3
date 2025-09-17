// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateResourceConfigurationRequest, UpdateResourceConfigurationResponse } from "../models/models_0";
import {
  de_UpdateResourceConfigurationCommand,
  se_UpdateResourceConfigurationCommand,
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
 * The input for {@link UpdateResourceConfigurationCommand}.
 */
export interface UpdateResourceConfigurationCommandInput extends UpdateResourceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceConfigurationCommand}.
 */
export interface UpdateResourceConfigurationCommandOutput
  extends UpdateResourceConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the specified resource configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateResourceConfigurationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateResourceConfigurationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateResourceConfigurationRequest
 *   resourceConfigurationIdentifier: "STRING_VALUE", // required
 *   resourceConfigurationDefinition: { // ResourceConfigurationDefinition Union: only one key present
 *     dnsResource: { // DnsResource
 *       domainName: "STRING_VALUE",
 *       ipAddressType: "STRING_VALUE",
 *     },
 *     ipResource: { // IpResource
 *       ipAddress: "STRING_VALUE",
 *     },
 *     arnResource: { // ArnResource
 *       arn: "STRING_VALUE",
 *     },
 *   },
 *   allowAssociationToShareableServiceNetwork: true || false,
 *   portRanges: [ // PortRangeList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateResourceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourceConfigurationResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   resourceGatewayId: "STRING_VALUE",
 * //   resourceConfigurationGroupId: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   portRanges: [ // PortRangeList
 * //     "STRING_VALUE",
 * //   ],
 * //   allowAssociationToShareableServiceNetwork: true || false,
 * //   protocol: "STRING_VALUE",
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
 * // };
 *
 * ```
 *
 * @param UpdateResourceConfigurationCommandInput - {@link UpdateResourceConfigurationCommandInput}
 * @returns {@link UpdateResourceConfigurationCommandOutput}
 * @see {@link UpdateResourceConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class UpdateResourceConfigurationCommand extends $Command
  .classBuilder<
    UpdateResourceConfigurationCommandInput,
    UpdateResourceConfigurationCommandOutput,
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
  .s("MercuryControlPlane", "UpdateResourceConfiguration", {})
  .n("VPCLatticeClient", "UpdateResourceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResourceConfigurationCommand)
  .de(de_UpdateResourceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceConfigurationRequest;
      output: UpdateResourceConfigurationResponse;
    };
    sdk: {
      input: UpdateResourceConfigurationCommandInput;
      output: UpdateResourceConfigurationCommandOutput;
    };
  };
}
