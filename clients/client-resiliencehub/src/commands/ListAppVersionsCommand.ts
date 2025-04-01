// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppVersionsRequest, ListAppVersionsResponse } from "../models/models_0";
import { de_ListAppVersionsCommand, se_ListAppVersionsCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppVersionsCommand}.
 */
export interface ListAppVersionsCommandInput extends ListAppVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppVersionsCommand}.
 */
export interface ListAppVersionsCommandOutput extends ListAppVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the different versions for the Resilience Hub applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppVersionsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppVersionsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppVersionsRequest
 *   appArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 * };
 * const command = new ListAppVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppVersionsResponse
 * //   appVersions: [ // AppVersionList // required
 * //     { // AppVersionSummary
 * //       appVersion: "STRING_VALUE", // required
 * //       identifier: Number("long"),
 * //       creationTime: new Date("TIMESTAMP"),
 * //       versionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppVersionsCommandInput - {@link ListAppVersionsCommandInput}
 * @returns {@link ListAppVersionsCommandOutput}
 * @see {@link ListAppVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAppVersionsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class ListAppVersionsCommand extends $Command
  .classBuilder<
    ListAppVersionsCommandInput,
    ListAppVersionsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListAppVersions", {})
  .n("ResiliencehubClient", "ListAppVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAppVersionsCommand)
  .de(de_ListAppVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppVersionsRequest;
      output: ListAppVersionsResponse;
    };
    sdk: {
      input: ListAppVersionsCommandInput;
      output: ListAppVersionsCommandOutput;
    };
  };
}
