// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssociatedEnvironmentsInput, ListAssociatedEnvironmentsOutput } from "../models/models_0";
import { ListAssociatedEnvironments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssociatedEnvironmentsCommand}.
 */
export interface ListAssociatedEnvironmentsCommandInput extends ListAssociatedEnvironmentsInput {}
/**
 * @public
 *
 * The output of {@link ListAssociatedEnvironmentsCommand}.
 */
export interface ListAssociatedEnvironmentsCommandOutput extends ListAssociatedEnvironmentsOutput, __MetadataBearer {}

/**
 * Lists the Environments currently associated with one Collector in lexicographically ascending environmentArn order. The ARN identifies each Environment across accounts within the Collector's Region.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListAssociatedEnvironmentsCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListAssociatedEnvironmentsCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // ListAssociatedEnvironmentsInput
 *   collectorId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociatedEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedEnvironmentsOutput
 * //   associatedEnvironments: [ // AssociatedEnvironments // required
 * //     { // AssociatedEnvironment
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
 * @param ListAssociatedEnvironmentsCommandInput - {@link ListAssociatedEnvironmentsCommandInput}
 * @returns {@link ListAssociatedEnvironmentsCommandOutput}
 * @see {@link ListAssociatedEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedEnvironmentsCommandOutput} for command's `response` shape.
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
export class ListAssociatedEnvironmentsCommand extends command<ListAssociatedEnvironmentsCommandInput, ListAssociatedEnvironmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssociatedEnvironments",
  ListAssociatedEnvironments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedEnvironmentsInput;
      output: ListAssociatedEnvironmentsOutput;
    };
    sdk: {
      input: ListAssociatedEnvironmentsCommandInput;
      output: ListAssociatedEnvironmentsCommandOutput;
    };
  };
}
