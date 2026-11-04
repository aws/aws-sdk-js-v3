// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPrivateGraphEndpointsInput, ListPrivateGraphEndpointsOutput } from "../models/models_0";
import { ListPrivateGraphEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPrivateGraphEndpointsCommand}.
 */
export interface ListPrivateGraphEndpointsCommandInput extends ListPrivateGraphEndpointsInput {}
/**
 * @public
 *
 * The output of {@link ListPrivateGraphEndpointsCommand}.
 */
export interface ListPrivateGraphEndpointsCommandOutput extends ListPrivateGraphEndpointsOutput, __MetadataBearer {}

/**
 * Lists private endpoints for a specified Neptune Analytics graph.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListPrivateGraphEndpointsCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListPrivateGraphEndpointsCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListPrivateGraphEndpointsInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPrivateGraphEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrivateGraphEndpointsOutput
 * //   privateGraphEndpoints: [ // PrivateGraphEndpointSummaryList // required
 * //     { // PrivateGraphEndpointSummary
 * //       vpcId: "STRING_VALUE", // required
 * //       subnetIds: [ // SubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED", // required
 * //       vpcEndpointId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrivateGraphEndpointsCommandInput - {@link ListPrivateGraphEndpointsCommandInput}
 * @returns {@link ListPrivateGraphEndpointsCommandOutput}
 * @see {@link ListPrivateGraphEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListPrivateGraphEndpointsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * A failure occurred on the server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be located.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception was interrupted by throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A resource could not be validated.
 *
 * @throws {@link NeptuneGraphServiceException}
 *
 * Base exception class for all service exceptions from NeptuneGraph service.
 *
 * @public
 */
export class ListPrivateGraphEndpointsCommand extends command<ListPrivateGraphEndpointsCommandInput, ListPrivateGraphEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListPrivateGraphEndpoints",
  ListPrivateGraphEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrivateGraphEndpointsInput;
      output: ListPrivateGraphEndpointsOutput;
    };
    sdk: {
      input: ListPrivateGraphEndpointsCommandInput;
      output: ListPrivateGraphEndpointsCommandOutput;
    };
  };
}
