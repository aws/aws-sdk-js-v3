// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceEvaluationsRequest, ListResourceEvaluationsResponse } from "../models/models_1";
import { ListResourceEvaluations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceEvaluationsCommand}.
 */
export interface ListResourceEvaluationsCommandInput extends ListResourceEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceEvaluationsCommand}.
 */
export interface ListResourceEvaluationsCommandOutput extends ListResourceEvaluationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of proactive resource evaluations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListResourceEvaluationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListResourceEvaluationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // ListResourceEvaluationsRequest
 *   Filters: { // ResourceEvaluationFilters
 *     EvaluationMode: "DETECTIVE" || "PROACTIVE",
 *     TimeWindow: { // TimeWindow
 *       StartTime: new Date("TIMESTAMP"),
 *       EndTime: new Date("TIMESTAMP"),
 *     },
 *     EvaluationContextIdentifier: "STRING_VALUE",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceEvaluationsResponse
 * //   ResourceEvaluations: [ // ResourceEvaluations
 * //     { // ResourceEvaluation
 * //       ResourceEvaluationId: "STRING_VALUE",
 * //       EvaluationMode: "DETECTIVE" || "PROACTIVE",
 * //       EvaluationStartTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceEvaluationsCommandInput - {@link ListResourceEvaluationsCommandInput}
 * @returns {@link ListResourceEvaluationsCommandOutput}
 * @see {@link ListResourceEvaluationsCommandInput} for command's `input` shape.
 * @see {@link ListResourceEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link InvalidTimeRangeException} (client fault)
 *  <p>The specified time range is not valid. The earlier time is not
 * 			chronologically before the later time.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class ListResourceEvaluationsCommand extends $Command
  .classBuilder<
    ListResourceEvaluationsCommandInput,
    ListResourceEvaluationsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "ListResourceEvaluations", {})
  .n("ConfigServiceClient", "ListResourceEvaluationsCommand")
  .sc(ListResourceEvaluations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceEvaluationsRequest;
      output: ListResourceEvaluationsResponse;
    };
    sdk: {
      input: ListResourceEvaluationsCommandInput;
      output: ListResourceEvaluationsCommandOutput;
    };
  };
}
