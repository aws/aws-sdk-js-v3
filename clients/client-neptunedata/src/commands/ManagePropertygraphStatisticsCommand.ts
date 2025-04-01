// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ManagePropertygraphStatisticsInput, ManagePropertygraphStatisticsOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import {
  de_ManagePropertygraphStatisticsCommand,
  se_ManagePropertygraphStatisticsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ManagePropertygraphStatisticsCommand}.
 */
export interface ManagePropertygraphStatisticsCommandInput extends ManagePropertygraphStatisticsInput {}
/**
 * @public
 *
 * The output of {@link ManagePropertygraphStatisticsCommand}.
 */
export interface ManagePropertygraphStatisticsCommandOutput
  extends ManagePropertygraphStatisticsOutput,
    __MetadataBearer {}

/**
 * <p>Manages the generation and use of property graph statistics.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#managestatistics">neptune-db:ManageStatistics</a>
 *       IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ManagePropertygraphStatisticsCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ManagePropertygraphStatisticsCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // ManagePropertygraphStatisticsInput
 *   mode: "disableAutoCompute" || "enableAutoCompute" || "refresh",
 * };
 * const command = new ManagePropertygraphStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // ManagePropertygraphStatisticsOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: { // RefreshStatisticsIdMap
 * //     statisticsId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ManagePropertygraphStatisticsCommandInput - {@link ManagePropertygraphStatisticsCommandInput}
 * @returns {@link ManagePropertygraphStatisticsCommandOutput}
 * @see {@link ManagePropertygraphStatisticsCommandInput} for command's `input` shape.
 * @see {@link ManagePropertygraphStatisticsCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *  <p>Raised when a request attempts to write to a read-only resource.</p>
 *
 * @throws {@link StatisticsNotAvailableException} (client fault)
 *  <p>Raised when statistics needed to satisfy a request are not available.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 *
 * @public
 */
export class ManagePropertygraphStatisticsCommand extends $Command
  .classBuilder<
    ManagePropertygraphStatisticsCommandInput,
    ManagePropertygraphStatisticsCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneDataplane", "ManagePropertygraphStatistics", {})
  .n("NeptunedataClient", "ManagePropertygraphStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_ManagePropertygraphStatisticsCommand)
  .de(de_ManagePropertygraphStatisticsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ManagePropertygraphStatisticsInput;
      output: ManagePropertygraphStatisticsOutput;
    };
    sdk: {
      input: ManagePropertygraphStatisticsCommandInput;
      output: ManagePropertygraphStatisticsCommandOutput;
    };
  };
}
