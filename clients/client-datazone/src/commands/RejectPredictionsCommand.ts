// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectPredictionsInput, RejectPredictionsOutput } from "../models/models_2";
import { RejectPredictions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectPredictionsCommand}.
 */
export interface RejectPredictionsCommandInput extends RejectPredictionsInput {}
/**
 * @public
 *
 * The output of {@link RejectPredictionsCommand}.
 */
export interface RejectPredictionsCommandOutput extends RejectPredictionsOutput, __MetadataBearer {}

/**
 * Rejects automatically generated business-friendly metadata for your Amazon DataZone assets.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, RejectPredictionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, RejectPredictionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // RejectPredictionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 *   rejectRule: { // RejectRule
 *     rule: "ALL" || "NONE",
 *     threshold: Number("float"),
 *   },
 *   rejectChoices: [ // RejectChoices
 *     { // RejectChoice
 *       predictionTarget: "STRING_VALUE", // required
 *       predictionChoices: [ // PredictionChoices
 *         Number("int"),
 *       ],
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RejectPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // RejectPredictionsOutput
 * //   domainId: "STRING_VALUE", // required
 * //   assetId: "STRING_VALUE", // required
 * //   assetRevision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RejectPredictionsCommandInput - {@link RejectPredictionsCommandInput}
 * @returns {@link RejectPredictionsCommandOutput}
 * @see {@link RejectPredictionsCommandInput} for command's `input` shape.
 * @see {@link RejectPredictionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class RejectPredictionsCommand extends command<RejectPredictionsCommandInput, RejectPredictionsCommandOutput>(
  _ep0,
  _mw0,
  "RejectPredictions",
  RejectPredictions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectPredictionsInput;
      output: RejectPredictionsOutput;
    };
    sdk: {
      input: RejectPredictionsCommandInput;
      output: RejectPredictionsCommandOutput;
    };
  };
}
