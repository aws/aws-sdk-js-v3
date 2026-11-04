// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMatchIdInput, GetMatchIdOutput } from "../models/models_0";
import { GetMatchId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMatchIdCommand}.
 */
export interface GetMatchIdCommandInput extends GetMatchIdInput {}
/**
 * @public
 *
 * The output of {@link GetMatchIdCommand}.
 */
export interface GetMatchIdCommandOutput extends GetMatchIdOutput, __MetadataBearer {}

/**
 * Returns the corresponding Match ID of a customer record if the record has been processed in a rule-based matching workflow.
 *
 * You can call this API as a dry run of an incremental load on the rule-based matching workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetMatchIdCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetMatchIdCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GetMatchIdInput
 *   workflowName: "STRING_VALUE", // required
 *   record: { // RecordAttributeMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   applyNormalization: true || false,
 * };
 * const command = new GetMatchIdCommand(input);
 * const response = await client.send(command);
 * // { // GetMatchIdOutput
 * //   matchId: "STRING_VALUE",
 * //   matchRule: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMatchIdCommandInput - {@link GetMatchIdCommandInput}
 * @returns {@link GetMatchIdCommandOutput}
 * @see {@link GetMatchIdCommandInput} for command's `input` shape.
 * @see {@link GetMatchIdCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class GetMatchIdCommand extends command<GetMatchIdCommandInput, GetMatchIdCommandOutput>(
  _ep0,
  _mw0,
  "GetMatchId",
  GetMatchId$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMatchIdInput;
      output: GetMatchIdOutput;
    };
    sdk: {
      input: GetMatchIdCommandInput;
      output: GetMatchIdCommandOutput;
    };
  };
}
