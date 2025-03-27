// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { ListExperimentTemplatesRequest, ListExperimentTemplatesResponse } from "../models/models_0";
import { de_ListExperimentTemplatesCommand, se_ListExperimentTemplatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentTemplatesCommand}.
 */
export interface ListExperimentTemplatesCommandInput extends ListExperimentTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentTemplatesCommand}.
 */
export interface ListExperimentTemplatesCommandOutput extends ListExperimentTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists your experiment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentTemplatesCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentTemplatesCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // ListExperimentTemplatesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExperimentTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListExperimentTemplatesResponse
 * //   experimentTemplates: [ // ExperimentTemplateSummaryList
 * //     { // ExperimentTemplateSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentTemplatesCommandInput - {@link ListExperimentTemplatesCommandInput}
 * @returns {@link ListExperimentTemplatesCommandOutput}
 * @see {@link ListExperimentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListExperimentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class ListExperimentTemplatesCommand extends $Command
  .classBuilder<
    ListExperimentTemplatesCommandInput,
    ListExperimentTemplatesCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "ListExperimentTemplates", {})
  .n("FisClient", "ListExperimentTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListExperimentTemplatesCommand)
  .de(de_ListExperimentTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentTemplatesRequest;
      output: ListExperimentTemplatesResponse;
    };
    sdk: {
      input: ListExperimentTemplatesCommandInput;
      output: ListExperimentTemplatesCommandOutput;
    };
  };
}
