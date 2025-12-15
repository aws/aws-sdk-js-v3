// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEnabledControlInput, GetEnabledControlOutput } from "../models/models_0";
import { GetEnabledControl$ } from "../schemas/schemas_0";

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
 * <p>Retrieves details about an enabled control. For usage examples, see the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html"> <i>Controls Reference Guide</i> </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetEnabledControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetEnabledControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
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
 * //     statusSummary: { // EnablementStatusSummary
 * //       status: "SUCCEEDED" || "FAILED" || "UNDER_CHANGE",
 * //       lastOperationIdentifier: "STRING_VALUE",
 * //     },
 * //     driftStatusSummary: { // DriftStatusSummary
 * //       driftStatus: "DRIFTED" || "IN_SYNC" || "NOT_CHECKING" || "UNKNOWN",
 * //       types: { // EnabledControlDriftTypes
 * //         inheritance: { // EnabledControlInheritanceDrift
 * //           status: "DRIFTED" || "IN_SYNC" || "NOT_CHECKING" || "UNKNOWN",
 * //         },
 * //         resource: { // EnabledControlResourceDrift
 * //           status: "DRIFTED" || "IN_SYNC" || "NOT_CHECKING" || "UNKNOWN",
 * //         },
 * //       },
 * //     },
 * //     parentIdentifier: "STRING_VALUE",
 * //     targetRegions: [ // TargetRegions
 * //       { // Region
 * //         name: "STRING_VALUE",
 * //       },
 * //     ],
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "GetEnabledControl", {})
  .n("ControlTowerClient", "GetEnabledControlCommand")
  .sc(GetEnabledControl$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnabledControlInput;
      output: GetEnabledControlOutput;
    };
    sdk: {
      input: GetEnabledControlCommandInput;
      output: GetEnabledControlCommandOutput;
    };
  };
}
