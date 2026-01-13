// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import type { ListExperimentResolvedTargetsRequest, ListExperimentResolvedTargetsResponse } from "../models/models_0";
import { ListExperimentResolvedTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentResolvedTargetsCommand}.
 */
export interface ListExperimentResolvedTargetsCommandInput extends ListExperimentResolvedTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentResolvedTargetsCommand}.
 */
export interface ListExperimentResolvedTargetsCommandOutput extends ListExperimentResolvedTargetsResponse, __MetadataBearer {}

/**
 * <p>Lists the resolved targets information of the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentResolvedTargetsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentResolvedTargetsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // ListExperimentResolvedTargetsRequest
 *   experimentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   targetName: "STRING_VALUE",
 * };
 * const command = new ListExperimentResolvedTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListExperimentResolvedTargetsResponse
 * //   resolvedTargets: [ // ResolvedTargetList
 * //     { // ResolvedTarget
 * //       resourceType: "STRING_VALUE",
 * //       targetName: "STRING_VALUE",
 * //       targetInformation: { // TargetInformationMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentResolvedTargetsCommandInput - {@link ListExperimentResolvedTargetsCommandInput}
 * @returns {@link ListExperimentResolvedTargetsCommandOutput}
 * @see {@link ListExperimentResolvedTargetsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentResolvedTargetsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class ListExperimentResolvedTargetsCommand extends $Command
  .classBuilder<
    ListExperimentResolvedTargetsCommandInput,
    ListExperimentResolvedTargetsCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "ListExperimentResolvedTargets", {})
  .n("FisClient", "ListExperimentResolvedTargetsCommand")
  .sc(ListExperimentResolvedTargets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentResolvedTargetsRequest;
      output: ListExperimentResolvedTargetsResponse;
    };
    sdk: {
      input: ListExperimentResolvedTargetsCommandInput;
      output: ListExperimentResolvedTargetsCommandOutput;
    };
  };
}
