// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResourceConfigurationRequest, CreateResourceConfigurationResponse } from "../models/models_0";
import {
  de_CreateResourceConfigurationCommand,
  se_CreateResourceConfigurationCommand,
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
 * The input for {@link CreateResourceConfigurationCommand}.
 */
export interface CreateResourceConfigurationCommandInput extends CreateResourceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceConfigurationCommand}.
 */
export interface CreateResourceConfigurationCommandOutput
  extends CreateResourceConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a resource configuration. A resource configuration defines a specific resource. You
 *    can associate a resource configuration with a service network or a VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateResourceConfigurationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateResourceConfigurationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateResourceConfigurationRequest
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   portRanges: [ // PortRangeList
 *     "STRING_VALUE",
 *   ],
 *   protocol: "STRING_VALUE",
 *   resourceGatewayIdentifier: "STRING_VALUE",
 *   resourceConfigurationGroupIdentifier: "STRING_VALUE",
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
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResourceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceConfigurationResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   resourceGatewayId: "STRING_VALUE",
 * //   resourceConfigurationGroupId: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   portRanges: [ // PortRangeList
 * //     "STRING_VALUE",
 * //   ],
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
 * //   allowAssociationToShareableServiceNetwork: true || false,
 * //   createdAt: new Date("TIMESTAMP"),
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceConfigurationCommandInput - {@link CreateResourceConfigurationCommandInput}
 * @returns {@link CreateResourceConfigurationCommandOutput}
 * @see {@link CreateResourceConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateResourceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
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
 * @public
 */
export class CreateResourceConfigurationCommand extends $Command
  .classBuilder<
    CreateResourceConfigurationCommandInput,
    CreateResourceConfigurationCommandOutput,
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
  .s("MercuryControlPlane", "CreateResourceConfiguration", {})
  .n("VPCLatticeClient", "CreateResourceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourceConfigurationCommand)
  .de(de_CreateResourceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceConfigurationRequest;
      output: CreateResourceConfigurationResponse;
    };
    sdk: {
      input: CreateResourceConfigurationCommandInput;
      output: CreateResourceConfigurationCommandOutput;
    };
  };
}
