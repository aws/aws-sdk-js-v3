// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGiVersionsInput, ListGiVersionsOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { ListGiVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGiVersionsCommand}.
 */
export interface ListGiVersionsCommandInput extends ListGiVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListGiVersionsCommand}.
 */
export interface ListGiVersionsCommandOutput extends ListGiVersionsOutput, __MetadataBearer {}

/**
 * <p>Returns information about Oracle Grid Infrastructure (GI) software versions that are available for a VM cluster for the specified shape.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListGiVersionsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListGiVersionsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListGiVersionsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   shape: "STRING_VALUE",
 * };
 * const command = new ListGiVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListGiVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   giVersions: [ // GiVersionList // required
 * //     { // GiVersionSummary
 * //       version: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListGiVersionsCommandInput - {@link ListGiVersionsCommandInput}
 * @returns {@link ListGiVersionsCommandOutput}
 * @see {@link ListGiVersionsCommandInput} for command's `input` shape.
 * @see {@link ListGiVersionsCommandOutput} for command's `response` shape.
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
export class ListGiVersionsCommand extends $Command
  .classBuilder<
    ListGiVersionsCommandInput,
    ListGiVersionsCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "ListGiVersions", {})
  .n("OdbClient", "ListGiVersionsCommand")
  .sc(ListGiVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGiVersionsInput;
      output: ListGiVersionsOutput;
    };
    sdk: {
      input: ListGiVersionsCommandInput;
      output: ListGiVersionsCommandOutput;
    };
  };
}
