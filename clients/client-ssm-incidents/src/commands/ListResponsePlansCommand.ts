// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResponsePlansInput, ListResponsePlansOutput } from "../models/models_0";
import { de_ListResponsePlansCommand, se_ListResponsePlansCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResponsePlansCommand}.
 */
export interface ListResponsePlansCommandInput extends ListResponsePlansInput {}
/**
 * @public
 *
 * The output of {@link ListResponsePlansCommand}.
 */
export interface ListResponsePlansCommandOutput extends ListResponsePlansOutput, __MetadataBearer {}

/**
 * <p>Lists all response plans in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListResponsePlansCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListResponsePlansCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListResponsePlansInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResponsePlansCommand(input);
 * const response = await client.send(command);
 * // { // ListResponsePlansOutput
 * //   responsePlanSummaries: [ // ResponsePlanSummaryList // required
 * //     { // ResponsePlanSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResponsePlansCommandInput - {@link ListResponsePlansCommandInput}
 * @returns {@link ListResponsePlansCommandOutput}
 * @see {@link ListResponsePlansCommandInput} for command's `input` shape.
 * @see {@link ListResponsePlansCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 * @public
 */
export class ListResponsePlansCommand extends $Command
  .classBuilder<
    ListResponsePlansCommandInput,
    ListResponsePlansCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMIncidents", "ListResponsePlans", {})
  .n("SSMIncidentsClient", "ListResponsePlansCommand")
  .f(void 0, void 0)
  .ser(se_ListResponsePlansCommand)
  .de(de_ListResponsePlansCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResponsePlansInput;
      output: ListResponsePlansOutput;
    };
    sdk: {
      input: ListResponsePlansCommandInput;
      output: ListResponsePlansCommandOutput;
    };
  };
}
