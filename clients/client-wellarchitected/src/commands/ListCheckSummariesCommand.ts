// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCheckSummariesInput, ListCheckSummariesOutput } from "../models/models_0";
import { ListCheckSummaries } from "../schemas/schemas_9_List";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCheckSummariesCommand}.
 */
export interface ListCheckSummariesCommandInput extends ListCheckSummariesInput {}
/**
 * @public
 *
 * The output of {@link ListCheckSummariesCommand}.
 */
export interface ListCheckSummariesCommandOutput extends ListCheckSummariesOutput, __MetadataBearer {}

/**
 * <p>List of Trusted Advisor checks summarized for all accounts related to the workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListCheckSummariesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListCheckSummariesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListCheckSummariesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   LensArn: "STRING_VALUE", // required
 *   PillarId: "STRING_VALUE", // required
 *   QuestionId: "STRING_VALUE", // required
 *   ChoiceId: "STRING_VALUE", // required
 * };
 * const command = new ListCheckSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListCheckSummariesOutput
 * //   CheckSummaries: [ // CheckSummaries
 * //     { // CheckSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Provider: "TRUSTED_ADVISOR",
 * //       Description: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       LensArn: "STRING_VALUE",
 * //       PillarId: "STRING_VALUE",
 * //       QuestionId: "STRING_VALUE",
 * //       ChoiceId: "STRING_VALUE",
 * //       Status: "OKAY" || "WARNING" || "ERROR" || "NOT_AVAILABLE" || "FETCH_FAILED",
 * //       AccountSummary: { // AccountSummary
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCheckSummariesCommandInput - {@link ListCheckSummariesCommandInput}
 * @returns {@link ListCheckSummariesCommandOutput}
 * @see {@link ListCheckSummariesCommandInput} for command's `input` shape.
 * @see {@link ListCheckSummariesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ListCheckSummariesCommand extends $Command
  .classBuilder<
    ListCheckSummariesCommandInput,
    ListCheckSummariesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "ListCheckSummaries", {})
  .n("WellArchitectedClient", "ListCheckSummariesCommand")
  .sc(ListCheckSummaries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCheckSummariesInput;
      output: ListCheckSummariesOutput;
    };
    sdk: {
      input: ListCheckSummariesCommandInput;
      output: ListCheckSummariesCommandOutput;
    };
  };
}
