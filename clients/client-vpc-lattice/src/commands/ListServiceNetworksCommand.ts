// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServiceNetworksRequest, ListServiceNetworksResponse } from "../models/models_0";
import { de_ListServiceNetworksCommand, se_ListServiceNetworksCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceNetworksCommand}.
 */
export interface ListServiceNetworksCommandInput extends ListServiceNetworksRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceNetworksCommand}.
 */
export interface ListServiceNetworksCommandOutput extends ListServiceNetworksResponse, __MetadataBearer {}

/**
 * <p>Lists the service networks owned by or shared with this account. The account ID in the ARN
 *    shows which account owns the service network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListServiceNetworksCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListServiceNetworksCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VPCLatticeClient(config);
 * const input = { // ListServiceNetworksRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceNetworksCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceNetworksResponse
 * //   items: [ // ServiceNetworkList // required
 * //     { // ServiceNetworkSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       numberOfAssociatedVPCs: Number("long"),
 * //       numberOfAssociatedServices: Number("long"),
 * //       numberOfAssociatedResourceConfigurations: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceNetworksCommandInput - {@link ListServiceNetworksCommandInput}
 * @returns {@link ListServiceNetworksCommandOutput}
 * @see {@link ListServiceNetworksCommandInput} for command's `input` shape.
 * @see {@link ListServiceNetworksCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListServiceNetworksCommand extends $Command
  .classBuilder<
    ListServiceNetworksCommandInput,
    ListServiceNetworksCommandOutput,
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
  .s("MercuryControlPlane", "ListServiceNetworks", {})
  .n("VPCLatticeClient", "ListServiceNetworksCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceNetworksCommand)
  .de(de_ListServiceNetworksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceNetworksRequest;
      output: ListServiceNetworksResponse;
    };
    sdk: {
      input: ListServiceNetworksCommandInput;
      output: ListServiceNetworksCommandOutput;
    };
  };
}
