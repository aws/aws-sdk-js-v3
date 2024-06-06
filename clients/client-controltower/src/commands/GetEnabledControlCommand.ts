// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEnabledControlInput, GetEnabledControlOutput } from "../models/models_0";
import { de_GetEnabledControlCommand, se_GetEnabledControlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnabledControlCommand}.
 */
export interface GetEnabledControlCommandInput extends GetEnabledControlInput {}
/**
 * @public
 *
 * The output of {@link GetEnabledControlCommand}.
 */
export interface GetEnabledControlCommandOutput extends GetEnabledControlOutput, __MetadataBearer {}

/**
 * <p>Retrieves details about an enabled control. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-api-examples-short.html">
 *                <i>the Amazon Web Services Control Tower User Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetEnabledControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetEnabledControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // GetEnabledControlInput
 *   enabledControlIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnabledControlCommand(input);
 * const response = await client.send(command);
 * // { // GetEnabledControlOutput
 * //   enabledControlDetails: { // EnabledControlDetails
 * //     arn: "STRING_VALUE",
 * //     controlIdentifier: "STRING_VALUE",
 * //     targetIdentifier: "STRING_VALUE",
 * //     targetRegions: [ // TargetRegions
 * //       { // Region
 * //         name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     statusSummary: { // EnablementStatusSummary
 * //       status: "SUCCEEDED" || "FAILED" || "UNDER_CHANGE",
 * //       lastOperationIdentifier: "STRING_VALUE",
 * //     },
 * //     driftStatusSummary: { // DriftStatusSummary
 * //       driftStatus: "DRIFTED" || "IN_SYNC" || "NOT_CHECKING" || "UNKNOWN",
 * //     },
 * //     parameters: [ // EnabledControlParameterSummaries
 * //       { // EnabledControlParameterSummary
 * //         key: "STRING_VALUE", // required
 * //         value: "DOCUMENT_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnabledControlCommandInput - {@link GetEnabledControlCommandInput}
 * @returns {@link GetEnabledControlCommandOutput}
 * @see {@link GetEnabledControlCommandInput} for command's `input` shape.
 * @see {@link GetEnabledControlCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 * @public
 */
export class GetEnabledControlCommand extends $Command
  .classBuilder<
    GetEnabledControlCommandInput,
    GetEnabledControlCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "GetEnabledControl", {})
  .n("ControlTowerClient", "GetEnabledControlCommand")
  .f(void 0, void 0)
  .ser(se_GetEnabledControlCommand)
  .de(de_GetEnabledControlCommand)
  .build() {}
