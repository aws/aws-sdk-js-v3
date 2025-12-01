// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListActivitiesInput, ListActivitiesOutput } from "../models/models_0";
import { ListActivities } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListActivitiesCommand}.
 */
export interface ListActivitiesCommandInput extends ListActivitiesInput {}
/**
 * @public
 *
 * The output of {@link ListActivitiesCommand}.
 */
export interface ListActivitiesCommandOutput extends ListActivitiesOutput, __MetadataBearer {}

/**
 * <p>Lists the existing activities.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ListActivitiesCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ListActivitiesCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // ListActivitiesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListActivitiesOutput
 * //   activities: [ // ActivityList // required
 * //     { // ActivityListItem
 * //       activityArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       creationDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActivitiesCommandInput - {@link ListActivitiesCommandInput}
 * @returns {@link ListActivitiesCommandOutput}
 * @see {@link ListActivitiesCommandInput} for command's `input` shape.
 * @see {@link ListActivitiesCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class ListActivitiesCommand extends $Command
  .classBuilder<
    ListActivitiesCommandInput,
    ListActivitiesCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "ListActivities", {})
  .n("SFNClient", "ListActivitiesCommand")
  .sc(ListActivities)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActivitiesInput;
      output: ListActivitiesOutput;
    };
    sdk: {
      input: ListActivitiesCommandInput;
      output: ListActivitiesCommandOutput;
    };
  };
}
