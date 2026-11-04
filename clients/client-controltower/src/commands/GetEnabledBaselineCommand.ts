// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnabledBaselineInput, GetEnabledBaselineOutput } from "../models/models_0";
import { GetEnabledBaseline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnabledBaselineCommand}.
 */
export interface GetEnabledBaselineCommandInput extends GetEnabledBaselineInput {}
/**
 * @public
 *
 * The output of {@link GetEnabledBaselineCommand}.
 */
export interface GetEnabledBaselineCommandOutput extends GetEnabledBaselineOutput, __MetadataBearer {}

/**
 * Retrieve details of an `EnabledBaseline` resource by specifying its identifier.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetEnabledBaselineCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetEnabledBaselineCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // GetEnabledBaselineInput
 *   enabledBaselineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnabledBaselineCommand(input);
 * const response = await client.send(command);
 * // { // GetEnabledBaselineOutput
 * //   enabledBaselineDetails: { // EnabledBaselineDetails
 * //     arn: "STRING_VALUE", // required
 * //     baselineIdentifier: "STRING_VALUE", // required
 * //     baselineVersion: "STRING_VALUE",
 * //     driftStatusSummary: { // EnabledBaselineDriftStatusSummary
 * //       types: { // EnabledBaselineDriftTypes
 * //         inheritance: { // EnabledBaselineInheritanceDrift
 * //           status: "IN_SYNC" || "DRIFTED",
 * //         },
 * //       },
 * //     },
 * //     targetIdentifier: "STRING_VALUE", // required
 * //     parentIdentifier: "STRING_VALUE",
 * //     statusSummary: { // EnablementStatusSummary
 * //       status: "SUCCEEDED" || "FAILED" || "UNDER_CHANGE",
 * //       lastOperationIdentifier: "STRING_VALUE",
 * //     },
 * //     parameters: [ // EnabledBaselineParameterSummaries
 * //       { // EnabledBaselineParameterSummary
 * //         key: "STRING_VALUE", // required
 * //         value: "DOCUMENT_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnabledBaselineCommandInput - {@link GetEnabledBaselineCommandInput}
 * @returns {@link GetEnabledBaselineCommandOutput}
 * @see {@link GetEnabledBaselineCommandInput} for command's `input` shape.
 * @see {@link GetEnabledBaselineCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ControlTowerServiceException}
 *
 * Base exception class for all service exceptions from ControlTower service.
 *
 * @public
 */
export class GetEnabledBaselineCommand extends command<GetEnabledBaselineCommandInput, GetEnabledBaselineCommandOutput>(
  _ep0,
  _mw0,
  "GetEnabledBaseline",
  GetEnabledBaseline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnabledBaselineInput;
      output: GetEnabledBaselineOutput;
    };
    sdk: {
      input: GetEnabledBaselineCommandInput;
      output: GetEnabledBaselineCommandOutput;
    };
  };
}
