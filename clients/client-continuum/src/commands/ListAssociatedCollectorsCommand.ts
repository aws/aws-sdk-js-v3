// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssociatedCollectorsInput, ListAssociatedCollectorsOutput } from "../models/models_0";
import { ListAssociatedCollectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssociatedCollectorsCommand}.
 */
export interface ListAssociatedCollectorsCommandInput extends ListAssociatedCollectorsInput {}
/**
 * @public
 *
 * The output of {@link ListAssociatedCollectorsCommand}.
 */
export interface ListAssociatedCollectorsCommandOutput extends ListAssociatedCollectorsOutput, __MetadataBearer {}

/**
 * Lists the Collectors currently associated with one Environment in ascending collectorId order. Each entry carries the Collector ARN, so a listed association can be passed straight to DisassociateCollector, including when the Collector belongs to another account. An association recorded before Continuum persisted the ARN is omitted from the response, because without the ARN it cannot be acted on.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListAssociatedCollectorsCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListAssociatedCollectorsCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // ListAssociatedCollectorsInput
 *   environmentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociatedCollectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedCollectorsOutput
 * //   associatedCollectors: [ // AssociatedCollectors // required
 * //     { // AssociatedCollector
 * //       collectorId: "STRING_VALUE", // required
 * //       collectorArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedCollectorsCommandInput - {@link ListAssociatedCollectorsCommandInput}
 * @returns {@link ListAssociatedCollectorsCommandOutput}
 * @see {@link ListAssociatedCollectorsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedCollectorsCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class ListAssociatedCollectorsCommand extends command<ListAssociatedCollectorsCommandInput, ListAssociatedCollectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssociatedCollectors",
  ListAssociatedCollectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedCollectorsInput;
      output: ListAssociatedCollectorsOutput;
    };
    sdk: {
      input: ListAssociatedCollectorsCommandInput;
      output: ListAssociatedCollectorsCommandOutput;
    };
  };
}
