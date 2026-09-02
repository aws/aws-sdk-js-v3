// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFlexComponentsInput, ListFlexComponentsOutput } from "../models/models_0";
import { ListFlexComponents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFlexComponentsCommand}.
 */
export interface ListFlexComponentsCommandInput extends ListFlexComponentsInput {}
/**
 * @public
 *
 * The output of {@link ListFlexComponentsCommand}.
 */
export interface ListFlexComponentsCommandOutput extends ListFlexComponentsOutput, __MetadataBearer {}

/**
 * <p>Returns information about the flex components that are available for an Exadata infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListFlexComponentsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListFlexComponentsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListFlexComponentsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   shape: "STRING_VALUE",
 * };
 * const command = new ListFlexComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlexComponentsOutput
 * //   nextToken: "STRING_VALUE",
 * //   flexComponents: [ // FlexComponentList // required
 * //     { // FlexComponentSummary
 * //       availableCoreCount: Number("int"),
 * //       availableDbStorageInGBs: Number("int"),
 * //       availableLocalStorageInGBs: Number("int"),
 * //       availableMemoryInGBs: Number("int"),
 * //       computeModel: "ECPU" || "OCPU",
 * //       descriptionSummary: "STRING_VALUE",
 * //       hardwareType: "COMPUTE" || "CELL",
 * //       minimumCoreCount: Number("int"),
 * //       name: "STRING_VALUE",
 * //       runtimeMinimumCoreCount: Number("int"),
 * //       shape: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFlexComponentsCommandInput - {@link ListFlexComponentsCommandInput}
 * @returns {@link ListFlexComponentsCommandOutput}
 * @see {@link ListFlexComponentsCommandInput} for command's `input` shape.
 * @see {@link ListFlexComponentsCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class ListFlexComponentsCommand extends command<ListFlexComponentsCommandInput, ListFlexComponentsCommandOutput>(
  _ep0,
  _mw0,
  "ListFlexComponents",
  ListFlexComponents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlexComponentsInput;
      output: ListFlexComponentsOutput;
    };
    sdk: {
      input: ListFlexComponentsCommandInput;
      output: ListFlexComponentsCommandOutput;
    };
  };
}
