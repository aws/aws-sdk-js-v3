// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLandingZoneInput, GetLandingZoneOutput } from "../models/models_0";
import { de_GetLandingZoneCommand, se_GetLandingZoneCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLandingZoneCommand}.
 */
export interface GetLandingZoneCommandInput extends GetLandingZoneInput {}
/**
 * @public
 *
 * The output of {@link GetLandingZoneCommand}.
 */
export interface GetLandingZoneCommandOutput extends GetLandingZoneOutput, __MetadataBearer {}

/**
 * <p>Returns details about the landing zone. Displays a message in case of error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetLandingZoneCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetLandingZoneCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ControlTowerClient(config);
 * const input = { // GetLandingZoneInput
 *   landingZoneIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetLandingZoneCommand(input);
 * const response = await client.send(command);
 * // { // GetLandingZoneOutput
 * //   landingZone: { // LandingZoneDetail
 * //     version: "STRING_VALUE", // required
 * //     manifest: "DOCUMENT_VALUE", // required
 * //     arn: "STRING_VALUE",
 * //     status: "ACTIVE" || "PROCESSING" || "FAILED",
 * //     latestAvailableVersion: "STRING_VALUE",
 * //     driftStatus: { // LandingZoneDriftStatusSummary
 * //       status: "DRIFTED" || "IN_SYNC",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLandingZoneCommandInput - {@link GetLandingZoneCommandInput}
 * @returns {@link GetLandingZoneCommandOutput}
 * @see {@link GetLandingZoneCommandInput} for command's `input` shape.
 * @see {@link GetLandingZoneCommandOutput} for command's `response` shape.
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
export class GetLandingZoneCommand extends $Command
  .classBuilder<
    GetLandingZoneCommandInput,
    GetLandingZoneCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "GetLandingZone", {})
  .n("ControlTowerClient", "GetLandingZoneCommand")
  .f(void 0, void 0)
  .ser(se_GetLandingZoneCommand)
  .de(de_GetLandingZoneCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLandingZoneInput;
      output: GetLandingZoneOutput;
    };
    sdk: {
      input: GetLandingZoneCommandInput;
      output: GetLandingZoneCommandOutput;
    };
  };
}
