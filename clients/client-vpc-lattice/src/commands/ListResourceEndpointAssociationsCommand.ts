// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListResourceEndpointAssociationsRequest,
  ListResourceEndpointAssociationsResponse,
} from "../models/models_0";
import { ListResourceEndpointAssociations } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceEndpointAssociationsCommand}.
 */
export interface ListResourceEndpointAssociationsCommandInput extends ListResourceEndpointAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceEndpointAssociationsCommand}.
 */
export interface ListResourceEndpointAssociationsCommandOutput
  extends ListResourceEndpointAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the associations for the specified VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListResourceEndpointAssociationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListResourceEndpointAssociationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListResourceEndpointAssociationsRequest
 *   resourceConfigurationIdentifier: "STRING_VALUE", // required
 *   resourceEndpointAssociationIdentifier: "STRING_VALUE",
 *   vpcEndpointId: "STRING_VALUE",
 *   vpcEndpointOwner: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceEndpointAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceEndpointAssociationsResponse
 * //   items: [ // ResourceEndpointAssociationList // required
 * //     { // ResourceEndpointAssociationSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       resourceConfigurationId: "STRING_VALUE",
 * //       resourceConfigurationArn: "STRING_VALUE",
 * //       resourceConfigurationName: "STRING_VALUE",
 * //       vpcEndpointId: "STRING_VALUE",
 * //       vpcEndpointOwner: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceEndpointAssociationsCommandInput - {@link ListResourceEndpointAssociationsCommandInput}
 * @returns {@link ListResourceEndpointAssociationsCommandOutput}
 * @see {@link ListResourceEndpointAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResourceEndpointAssociationsCommandOutput} for command's `response` shape.
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
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class ListResourceEndpointAssociationsCommand extends $Command
  .classBuilder<
    ListResourceEndpointAssociationsCommandInput,
    ListResourceEndpointAssociationsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "ListResourceEndpointAssociations", {})
  .n("VPCLatticeClient", "ListResourceEndpointAssociationsCommand")
  .sc(ListResourceEndpointAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceEndpointAssociationsRequest;
      output: ListResourceEndpointAssociationsResponse;
    };
    sdk: {
      input: ListResourceEndpointAssociationsCommandInput;
      output: ListResourceEndpointAssociationsCommandOutput;
    };
  };
}
