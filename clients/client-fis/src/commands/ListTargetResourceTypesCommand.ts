// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import type { ListTargetResourceTypesRequest, ListTargetResourceTypesResponse } from "../models/models_0";
import { ListTargetResourceTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetResourceTypesCommand}.
 */
export interface ListTargetResourceTypesCommandInput extends ListTargetResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetResourceTypesCommand}.
 */
export interface ListTargetResourceTypesCommandOutput extends ListTargetResourceTypesResponse, __MetadataBearer {}

/**
 * <p>Lists the target resource types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListTargetResourceTypesCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListTargetResourceTypesCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // ListTargetResourceTypesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTargetResourceTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetResourceTypesResponse
 * //   targetResourceTypes: [ // TargetResourceTypeSummaryList
 * //     { // TargetResourceTypeSummary
 * //       resourceType: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetResourceTypesCommandInput - {@link ListTargetResourceTypesCommandInput}
 * @returns {@link ListTargetResourceTypesCommandOutput}
 * @see {@link ListTargetResourceTypesCommandInput} for command's `input` shape.
 * @see {@link ListTargetResourceTypesCommandOutput} for command's `response` shape.
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
export class ListTargetResourceTypesCommand extends $Command
  .classBuilder<
    ListTargetResourceTypesCommandInput,
    ListTargetResourceTypesCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "ListTargetResourceTypes", {})
  .n("FisClient", "ListTargetResourceTypesCommand")
  .sc(ListTargetResourceTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetResourceTypesRequest;
      output: ListTargetResourceTypesResponse;
    };
    sdk: {
      input: ListTargetResourceTypesCommandInput;
      output: ListTargetResourceTypesCommandOutput;
    };
  };
}
