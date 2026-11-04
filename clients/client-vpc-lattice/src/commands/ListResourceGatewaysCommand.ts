// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourceGatewaysRequest, ListResourceGatewaysResponse } from "../models/models_0";
import { ListResourceGateways$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourceGatewaysCommand}.
 */
export interface ListResourceGatewaysCommandInput extends ListResourceGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceGatewaysCommand}.
 */
export interface ListResourceGatewaysCommandOutput extends ListResourceGatewaysResponse, __MetadataBearer {}

/**
 * Lists the resource gateways that you own or that were shared with you.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListResourceGatewaysCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListResourceGatewaysCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListResourceGatewaysRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceGatewaysResponse
 * //   items: [ // ResourceGatewayList
 * //     { // ResourceGatewaySummary
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       vpcIdentifier: "STRING_VALUE",
 * //       subnetIds: [ // SubnetList
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupList
 * //         "STRING_VALUE",
 * //       ],
 * //       ipAddressType: "STRING_VALUE",
 * //       ipv4AddressesPerEni: Number("int"),
 * //       resourceConfigDnsResolution: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceGatewaysCommandInput - {@link ListResourceGatewaysCommandInput}
 * @returns {@link ListResourceGatewaysCommandOutput}
 * @see {@link ListResourceGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListResourceGatewaysCommandOutput} for command's `response` shape.
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
export class ListResourceGatewaysCommand extends command<ListResourceGatewaysCommandInput, ListResourceGatewaysCommandOutput>(
  _ep0,
  _mw0,
  "ListResourceGateways",
  ListResourceGateways$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceGatewaysRequest;
      output: ListResourceGatewaysResponse;
    };
    sdk: {
      input: ListResourceGatewaysCommandInput;
      output: ListResourceGatewaysCommandOutput;
    };
  };
}
