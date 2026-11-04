// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListServiceNetworkVpcEndpointAssociationsRequest,
  ListServiceNetworkVpcEndpointAssociationsResponse,
} from "../models/models_0";
import { ListServiceNetworkVpcEndpointAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceNetworkVpcEndpointAssociationsCommand}.
 */
export interface ListServiceNetworkVpcEndpointAssociationsCommandInput extends ListServiceNetworkVpcEndpointAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceNetworkVpcEndpointAssociationsCommand}.
 */
export interface ListServiceNetworkVpcEndpointAssociationsCommandOutput extends ListServiceNetworkVpcEndpointAssociationsResponse, __MetadataBearer {}

/**
 * Lists the associations between a service network and a VPC endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListServiceNetworkVpcEndpointAssociationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListServiceNetworkVpcEndpointAssociationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListServiceNetworkVpcEndpointAssociationsRequest
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceNetworkVpcEndpointAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceNetworkVpcEndpointAssociationsResponse
 * //   items: [ // ServiceNetworkVpcEndpointAssociationList // required
 * //     { // ServiceNetworkEndpointAssociation
 * //       vpcEndpointId: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       vpcEndpointOwnerId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       serviceNetworkArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceNetworkVpcEndpointAssociationsCommandInput - {@link ListServiceNetworkVpcEndpointAssociationsCommandInput}
 * @returns {@link ListServiceNetworkVpcEndpointAssociationsCommandOutput}
 * @see {@link ListServiceNetworkVpcEndpointAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListServiceNetworkVpcEndpointAssociationsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link VPCLatticeServiceException}
 *
 * Base exception class for all service exceptions from VPCLattice service.
 *
 * @public
 */
export class ListServiceNetworkVpcEndpointAssociationsCommand extends command<ListServiceNetworkVpcEndpointAssociationsCommandInput, ListServiceNetworkVpcEndpointAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceNetworkVpcEndpointAssociations",
  ListServiceNetworkVpcEndpointAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceNetworkVpcEndpointAssociationsRequest;
      output: ListServiceNetworkVpcEndpointAssociationsResponse;
    };
    sdk: {
      input: ListServiceNetworkVpcEndpointAssociationsCommandInput;
      output: ListServiceNetworkVpcEndpointAssociationsCommandOutput;
    };
  };
}
