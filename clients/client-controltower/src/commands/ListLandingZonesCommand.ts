// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLandingZonesInput, ListLandingZonesOutput } from "../models/models_0";
import { de_ListLandingZonesCommand, se_ListLandingZonesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLandingZonesCommand}.
 */
export interface ListLandingZonesCommandInput extends ListLandingZonesInput {}
/**
 * @public
 *
 * The output of {@link ListLandingZonesCommand}.
 */
export interface ListLandingZonesCommandOutput extends ListLandingZonesOutput, __MetadataBearer {}

/**
 * <p>Returns the landing zone ARN for the landing zone deployed in your managed account. This API also
 *          creates an ARN for existing accounts that do not yet have a landing zone ARN. </p>
 *          <p>Returns one landing zone ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListLandingZonesCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListLandingZonesCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ControlTowerClient(config);
 * const input = { // ListLandingZonesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLandingZonesCommand(input);
 * const response = await client.send(command);
 * // { // ListLandingZonesOutput
 * //   landingZones: [ // LandingZoneSummaries // required
 * //     { // LandingZoneSummary
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLandingZonesCommandInput - {@link ListLandingZonesCommandInput}
 * @returns {@link ListLandingZonesCommandOutput}
 * @see {@link ListLandingZonesCommandInput} for command's `input` shape.
 * @see {@link ListLandingZonesCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
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
export class ListLandingZonesCommand extends $Command
  .classBuilder<
    ListLandingZonesCommandInput,
    ListLandingZonesCommandOutput,
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
  .s("AWSControlTowerApis", "ListLandingZones", {})
  .n("ControlTowerClient", "ListLandingZonesCommand")
  .f(void 0, void 0)
  .ser(se_ListLandingZonesCommand)
  .de(de_ListLandingZonesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLandingZonesInput;
      output: ListLandingZonesOutput;
    };
    sdk: {
      input: ListLandingZonesCommandInput;
      output: ListLandingZonesCommandOutput;
    };
  };
}
