// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExportQAppSessionDataInput, ExportQAppSessionDataOutput } from "../models/models_0";
import { de_ExportQAppSessionDataCommand, se_ExportQAppSessionDataCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportQAppSessionDataCommand}.
 */
export interface ExportQAppSessionDataCommandInput extends ExportQAppSessionDataInput {}
/**
 * @public
 *
 * The output of {@link ExportQAppSessionDataCommand}.
 */
export interface ExportQAppSessionDataCommandOutput extends ExportQAppSessionDataOutput, __MetadataBearer {}

/**
 * <p>Exports the collected data of a Q App data collection session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, ExportQAppSessionDataCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, ExportQAppSessionDataCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QAppsClient(config);
 * const input = { // ExportQAppSessionDataInput
 *   instanceId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new ExportQAppSessionDataCommand(input);
 * const response = await client.send(command);
 * // { // ExportQAppSessionDataOutput
 * //   csvFileLink: "STRING_VALUE", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * //   sessionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ExportQAppSessionDataCommandInput - {@link ExportQAppSessionDataCommandInput}
 * @returns {@link ExportQAppSessionDataCommandOutput}
 * @see {@link ExportQAppSessionDataCommandInput} for command's `input` shape.
 * @see {@link ExportQAppSessionDataCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation could not be completed due to a conflict with the current state of
 *       the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because it would exceed the service's quota
 *       or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at
 *       once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 * @public
 */
export class ExportQAppSessionDataCommand extends $Command
  .classBuilder<
    ExportQAppSessionDataCommandInput,
    ExportQAppSessionDataCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "ExportQAppSessionData", {})
  .n("QAppsClient", "ExportQAppSessionDataCommand")
  .f(void 0, void 0)
  .ser(se_ExportQAppSessionDataCommand)
  .de(de_ExportQAppSessionDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportQAppSessionDataInput;
      output: ExportQAppSessionDataOutput;
    };
    sdk: {
      input: ExportQAppSessionDataCommandInput;
      output: ExportQAppSessionDataCommandOutput;
    };
  };
}
