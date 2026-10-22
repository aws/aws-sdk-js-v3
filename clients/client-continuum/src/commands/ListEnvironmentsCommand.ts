// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnvironmentsInput, ListEnvironmentsOutput } from "../models/models_0";
import { ListEnvironments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandInput extends ListEnvironmentsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsOutput, __MetadataBearer {}

/**
 * Lists all environments in your account in descending environmentId order. This complete-inventory operation intentionally has no response filters; see the input documentation for the API standards justification.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListEnvironmentsCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListEnvironmentsCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // ListEnvironmentsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentsOutput
 * //   items: [ // EnvironmentListEntries // required
 * //     { // EnvironmentListEntry
 * //       environmentId: "STRING_VALUE", // required
 * //       environmentArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "ACTIVE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentsCommandInput - {@link ListEnvironmentsCommandInput}
 * @returns {@link ListEnvironmentsCommandOutput}
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
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
export class ListEnvironmentsCommand extends command<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironments",
  ListEnvironments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentsInput;
      output: ListEnvironmentsOutput;
    };
    sdk: {
      input: ListEnvironmentsCommandInput;
      output: ListEnvironmentsCommandOutput;
    };
  };
}
