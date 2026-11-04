// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListListenersRequest, ListListenersResponse } from "../models/models_0";
import { ListListeners$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListListenersCommand}.
 */
export interface ListListenersCommandInput extends ListListenersRequest {}
/**
 * @public
 *
 * The output of {@link ListListenersCommand}.
 */
export interface ListListenersCommandOutput extends ListListenersResponse, __MetadataBearer {}

/**
 * Lists the listeners for the specified service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListListenersCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListListenersCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListListenersRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListListenersCommand(input);
 * const response = await client.send(command);
 * // { // ListListenersResponse
 * //   items: [ // ListenerSummaryList // required
 * //     { // ListenerSummary
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       protocol: "STRING_VALUE",
 * //       port: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListListenersCommandInput - {@link ListListenersCommandInput}
 * @returns {@link ListListenersCommandOutput}
 * @see {@link ListListenersCommandInput} for command's `input` shape.
 * @see {@link ListListenersCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
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
export class ListListenersCommand extends command<ListListenersCommandInput, ListListenersCommandOutput>(
  _ep0,
  _mw0,
  "ListListeners",
  ListListeners$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListListenersRequest;
      output: ListListenersResponse;
    };
    sdk: {
      input: ListListenersCommandInput;
      output: ListListenersCommandOutput;
    };
  };
}
