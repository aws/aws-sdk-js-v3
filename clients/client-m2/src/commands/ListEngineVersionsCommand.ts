// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListEngineVersionsRequest, ListEngineVersionsResponse } from "../models/models_0";
import { ListEngineVersions } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEngineVersionsCommand}.
 */
export interface ListEngineVersionsCommandInput extends ListEngineVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEngineVersionsCommand}.
 */
export interface ListEngineVersionsCommandOutput extends ListEngineVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the available engine versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListEngineVersionsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListEngineVersionsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // ListEngineVersionsRequest
 *   engineType: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEngineVersionsResponse
 * //   engineVersions: [ // EngineVersionsSummaryList // required
 * //     { // EngineVersionsSummary
 * //       engineType: "STRING_VALUE", // required
 * //       engineVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEngineVersionsCommandInput - {@link ListEngineVersionsCommandInput}
 * @returns {@link ListEngineVersionsCommandOutput}
 * @see {@link ListEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class ListEngineVersionsCommand extends $Command
  .classBuilder<
    ListEngineVersionsCommandInput,
    ListEngineVersionsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "ListEngineVersions", {})
  .n("M2Client", "ListEngineVersionsCommand")
  .sc(ListEngineVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngineVersionsRequest;
      output: ListEngineVersionsResponse;
    };
    sdk: {
      input: ListEngineVersionsCommandInput;
      output: ListEngineVersionsCommandOutput;
    };
  };
}
