// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListServiceLevelObjectivesInput, ListServiceLevelObjectivesOutput } from "../models/models_0";
import { de_ListServiceLevelObjectivesCommand, se_ListServiceLevelObjectivesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceLevelObjectivesCommand}.
 */
export interface ListServiceLevelObjectivesCommandInput extends ListServiceLevelObjectivesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceLevelObjectivesCommand}.
 */
export interface ListServiceLevelObjectivesCommandOutput extends ListServiceLevelObjectivesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of SLOs created in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListServiceLevelObjectivesCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListServiceLevelObjectivesCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListServiceLevelObjectivesInput
 *   KeyAttributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   OperationName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IncludeLinkedAccounts: true || false,
 *   SloOwnerAwsAccountId: "STRING_VALUE",
 * };
 * const command = new ListServiceLevelObjectivesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceLevelObjectivesOutput
 * //   SloSummaries: [ // ServiceLevelObjectiveSummaries
 * //     { // ServiceLevelObjectiveSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       KeyAttributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       OperationName: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceLevelObjectivesCommandInput - {@link ListServiceLevelObjectivesCommandInput}
 * @returns {@link ListServiceLevelObjectivesCommandOutput}
 * @see {@link ListServiceLevelObjectivesCommandInput} for command's `input` shape.
 * @see {@link ListServiceLevelObjectivesCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 * @public
 */
export class ListServiceLevelObjectivesCommand extends $Command
  .classBuilder<
    ListServiceLevelObjectivesCommandInput,
    ListServiceLevelObjectivesCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationSignals", "ListServiceLevelObjectives", {})
  .n("ApplicationSignalsClient", "ListServiceLevelObjectivesCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceLevelObjectivesCommand)
  .de(de_ListServiceLevelObjectivesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceLevelObjectivesInput;
      output: ListServiceLevelObjectivesOutput;
    };
    sdk: {
      input: ListServiceLevelObjectivesCommandInput;
      output: ListServiceLevelObjectivesCommandOutput;
    };
  };
}
