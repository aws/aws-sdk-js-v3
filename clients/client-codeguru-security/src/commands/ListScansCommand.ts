// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListScansRequest, ListScansResponse } from "../models/models_0";
import { ListScans } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScansCommand}.
 */
export interface ListScansCommandInput extends ListScansRequest {}
/**
 * @public
 *
 * The output of {@link ListScansCommand}.
 */
export interface ListScansCommandOutput extends ListScansResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all scans in an account. Does not return <code>EXPRESS</code> scans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, ListScansCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, ListScansCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * // import type { CodeGuruSecurityClientConfig } from "@aws-sdk/client-codeguru-security";
 * const config = {}; // type is CodeGuruSecurityClientConfig
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // ListScansRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListScansCommand(input);
 * const response = await client.send(command);
 * // { // ListScansResponse
 * //   summaries: [ // ScanSummaries
 * //     { // ScanSummary
 * //       scanState: "InProgress" || "Successful" || "Failed", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       scanName: "STRING_VALUE", // required
 * //       runId: "STRING_VALUE", // required
 * //       scanNameArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScansCommandInput - {@link ListScansCommandInput}
 * @returns {@link ListScansCommandOutput}
 * @see {@link ListScansCommandInput} for command's `input` shape.
 * @see {@link ListScansCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 *
 * @public
 */
export class ListScansCommand extends $Command
  .classBuilder<
    ListScansCommandInput,
    ListScansCommandOutput,
    CodeGuruSecurityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruSecurityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsCodeGuruSecurity", "ListScans", {})
  .n("CodeGuruSecurityClient", "ListScansCommand")
  .sc(ListScans)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScansRequest;
      output: ListScansResponse;
    };
    sdk: {
      input: ListScansCommandInput;
      output: ListScansCommandOutput;
    };
  };
}
