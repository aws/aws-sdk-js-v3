// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSubCheckResultsInput, ListSubCheckResultsOutput } from "../models/models_0";
import { ListSubCheckResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubCheckResultsCommand}.
 */
export interface ListSubCheckResultsCommandInput extends ListSubCheckResultsInput {}
/**
 * @public
 *
 * The output of {@link ListSubCheckResultsCommand}.
 */
export interface ListSubCheckResultsCommandOutput extends ListSubCheckResultsOutput, __MetadataBearer {}

/**
 * <p>Lists the sub-check results of a specified configuration check operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, ListSubCheckResultsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, ListSubCheckResultsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // ListSubCheckResultsInput
 *   OperationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSubCheckResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubCheckResultsOutput
 * //   SubCheckResults: [ // SubCheckResultList
 * //     { // SubCheckResult
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       References: [ // SubCheckReferencesList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubCheckResultsCommandInput - {@link ListSubCheckResultsCommandInput}
 * @returns {@link ListSubCheckResultsCommandOutput}
 * @see {@link ListSubCheckResultsCommandInput} for command's `input` shape.
 * @see {@link ListSubCheckResultsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class ListSubCheckResultsCommand extends command<ListSubCheckResultsCommandInput, ListSubCheckResultsCommandOutput>(
  _ep0,
  _mw0,
  "ListSubCheckResults",
  ListSubCheckResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubCheckResultsInput;
      output: ListSubCheckResultsOutput;
    };
    sdk: {
      input: ListSubCheckResultsCommandInput;
      output: ListSubCheckResultsCommandOutput;
    };
  };
}
