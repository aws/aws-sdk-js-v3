// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptPredictionsInput, AcceptPredictionsOutput } from "../models/models_0";
import { AcceptPredictions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptPredictionsCommand}.
 */
export interface AcceptPredictionsCommandInput extends AcceptPredictionsInput {}
/**
 * @public
 *
 * The output of {@link AcceptPredictionsCommand}.
 */
export interface AcceptPredictionsCommandOutput extends AcceptPredictionsOutput, __MetadataBearer {}

/**
 * Accepts automatically generated business-friendly metadata for your Amazon DataZone assets.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, AcceptPredictionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, AcceptPredictionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // AcceptPredictionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 *   acceptRule: { // AcceptRule
 *     rule: "ALL" || "NONE",
 *     threshold: Number("float"),
 *   },
 *   acceptChoices: [ // AcceptChoices
 *     { // AcceptChoice
 *       predictionTarget: "STRING_VALUE", // required
 *       predictionChoice: Number("int"),
 *       editedValue: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AcceptPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // AcceptPredictionsOutput
 * //   domainId: "STRING_VALUE", // required
 * //   assetId: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AcceptPredictionsCommandInput - {@link AcceptPredictionsCommandInput}
 * @returns {@link AcceptPredictionsCommandOutput}
 * @see {@link AcceptPredictionsCommandInput} for command's `input` shape.
 * @see {@link AcceptPredictionsCommandOutput} for command's `response` shape.
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
export class AcceptPredictionsCommand extends command<AcceptPredictionsCommandInput, AcceptPredictionsCommandOutput>(
  _ep0,
  _mw0,
  "AcceptPredictions",
  AcceptPredictions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptPredictionsInput;
      output: AcceptPredictionsOutput;
    };
    sdk: {
      input: AcceptPredictionsCommandInput;
      output: AcceptPredictionsCommandOutput;
    };
  };
}
