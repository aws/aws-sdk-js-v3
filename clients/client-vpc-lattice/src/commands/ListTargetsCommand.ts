// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTargetsRequest, ListTargetsResponse } from "../models/models_0";
import { ListTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTargetsCommand}.
 */
export interface ListTargetsCommandInput extends ListTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsCommand}.
 */
export interface ListTargetsCommandOutput extends ListTargetsResponse, __MetadataBearer {}

/**
 * <p>Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListTargetsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListTargetsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListTargetsRequest
 *   targetGroupIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   targets: [ // TargetList
 *     { // Target
 *       id: "STRING_VALUE", // required
 *       port: Number("int"),
 *     },
 *   ],
 * };
 * const command = new ListTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsResponse
 * //   items: [ // TargetSummaryList // required
 * //     { // TargetSummary
 * //       id: "STRING_VALUE",
 * //       port: Number("int"),
 * //       status: "STRING_VALUE",
 * //       reasonCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsCommandInput - {@link ListTargetsCommandInput}
 * @returns {@link ListTargetsCommandOutput}
 * @see {@link ListTargetsCommandInput} for command's `input` shape.
 * @see {@link ListTargetsCommandOutput} for command's `response` shape.
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
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class ListTargetsCommand extends command<ListTargetsCommandInput, ListTargetsCommandOutput>(
  _ep0,
  _mw0,
  "ListTargets",
  ListTargets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetsRequest;
      output: ListTargetsResponse;
    };
    sdk: {
      input: ListTargetsCommandInput;
      output: ListTargetsCommandOutput;
    };
  };
}
