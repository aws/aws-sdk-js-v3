// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOutpostsInput, ListOutpostsOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_ListOutpostsCommand, se_ListOutpostsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOutpostsCommand}.
 */
export interface ListOutpostsCommandInput extends ListOutpostsInput {}
/**
 * @public
 *
 * The output of {@link ListOutpostsCommand}.
 */
export interface ListOutpostsCommandOutput extends ListOutpostsOutput, __MetadataBearer {}

/**
 * <p>Lists the Outposts for your Amazon Web Services account.</p>
 *          <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 *  all of the specified filters. For a filter where you can specify multiple values, the results include
 *  items that match any of the values that you specify for the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListOutpostsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListOutpostsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OutpostsClient(config);
 * const input = { // ListOutpostsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   LifeCycleStatusFilter: [ // LifeCycleStatusList
 *     "STRING_VALUE",
 *   ],
 *   AvailabilityZoneFilter: [ // AvailabilityZoneList
 *     "STRING_VALUE",
 *   ],
 *   AvailabilityZoneIdFilter: [ // AvailabilityZoneIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListOutpostsCommand(input);
 * const response = await client.send(command);
 * // { // ListOutpostsOutput
 * //   Outposts: [ // outpostListDefinition
 * //     { // Outpost
 * //       OutpostId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       SiteId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LifeCycleStatus: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       SiteArn: "STRING_VALUE",
 * //       SupportedHardwareType: "RACK" || "SERVER",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOutpostsCommandInput - {@link ListOutpostsCommandInput}
 * @returns {@link ListOutpostsCommandOutput}
 * @see {@link ListOutpostsCommandInput} for command's `input` shape.
 * @see {@link ListOutpostsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 * @public
 */
export class ListOutpostsCommand extends $Command
  .classBuilder<
    ListOutpostsCommandInput,
    ListOutpostsCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "ListOutposts", {})
  .n("OutpostsClient", "ListOutpostsCommand")
  .f(void 0, void 0)
  .ser(se_ListOutpostsCommand)
  .de(de_ListOutpostsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOutpostsInput;
      output: ListOutpostsOutput;
    };
    sdk: {
      input: ListOutpostsCommandInput;
      output: ListOutpostsCommandOutput;
    };
  };
}
