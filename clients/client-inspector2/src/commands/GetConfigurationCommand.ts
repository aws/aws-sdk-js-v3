// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetConfigurationRequest, GetConfigurationResponse } from "../models/models_1";
import { de_GetConfigurationCommand, se_GetConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationCommand}.
 */
export interface GetConfigurationCommandInput extends GetConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationCommand}.
 */
export interface GetConfigurationCommandOutput extends GetConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves setting configurations for Inspector scans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = {};
 * const command = new GetConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationResponse
 * //   ecrConfiguration: { // EcrConfigurationState
 * //     rescanDurationState: { // EcrRescanDurationState
 * //       rescanDuration: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       pullDateRescanDuration: "STRING_VALUE",
 * //       pullDateRescanMode: "STRING_VALUE",
 * //     },
 * //   },
 * //   ec2Configuration: { // Ec2ConfigurationState
 * //     scanModeState: { // Ec2ScanModeState
 * //       scanMode: "STRING_VALUE",
 * //       scanModeStatus: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfigurationCommandInput - {@link GetConfigurationCommandInput}
 * @returns {@link GetConfigurationCommandOutput}
 * @see {@link GetConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class GetConfigurationCommand extends $Command
  .classBuilder<
    GetConfigurationCommandInput,
    GetConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "GetConfiguration", {})
  .n("Inspector2Client", "GetConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetConfigurationCommand)
  .de(de_GetConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetConfigurationResponse;
    };
    sdk: {
      input: GetConfigurationCommandInput;
      output: GetConfigurationCommandOutput;
    };
  };
}
