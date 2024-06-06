// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { ListTargetAccountConfigurationsRequest, ListTargetAccountConfigurationsResponse } from "../models/models_0";
import {
  de_ListTargetAccountConfigurationsCommand,
  se_ListTargetAccountConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetAccountConfigurationsCommand}.
 */
export interface ListTargetAccountConfigurationsCommandInput extends ListTargetAccountConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetAccountConfigurationsCommand}.
 */
export interface ListTargetAccountConfigurationsCommandOutput
  extends ListTargetAccountConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the target account configurations of the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListTargetAccountConfigurationsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListTargetAccountConfigurationsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // ListTargetAccountConfigurationsRequest
 *   experimentTemplateId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTargetAccountConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetAccountConfigurationsResponse
 * //   targetAccountConfigurations: [ // TargetAccountConfigurationList
 * //     { // TargetAccountConfigurationSummary
 * //       roleArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetAccountConfigurationsCommandInput - {@link ListTargetAccountConfigurationsCommandInput}
 * @returns {@link ListTargetAccountConfigurationsCommandOutput}
 * @see {@link ListTargetAccountConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListTargetAccountConfigurationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTargetAccountConfigurationsCommand extends $Command
  .classBuilder<
    ListTargetAccountConfigurationsCommandInput,
    ListTargetAccountConfigurationsCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "ListTargetAccountConfigurations", {})
  .n("FisClient", "ListTargetAccountConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListTargetAccountConfigurationsCommand)
  .de(de_ListTargetAccountConfigurationsCommand)
  .build() {}
