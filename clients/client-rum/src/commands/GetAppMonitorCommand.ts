// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppMonitorRequest, GetAppMonitorResponse } from "../models/models_0";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";
import { GetAppMonitor } from "../schemas/schemas_4_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppMonitorCommand}.
 */
export interface GetAppMonitorCommandInput extends GetAppMonitorRequest {}
/**
 * @public
 *
 * The output of {@link GetAppMonitorCommand}.
 */
export interface GetAppMonitorCommandOutput extends GetAppMonitorResponse, __MetadataBearer {}

/**
 * <p>Retrieves the complete configuration information for one app monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, GetAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, GetAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // GetAppMonitorRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAppMonitorCommand(input);
 * const response = await client.send(command);
 * // { // GetAppMonitorResponse
 * //   AppMonitor: { // AppMonitor
 * //     Name: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     DomainList: [ // AppMonitorDomainList
 * //       "STRING_VALUE",
 * //     ],
 * //     Id: "STRING_VALUE",
 * //     Created: "STRING_VALUE",
 * //     LastModified: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     State: "STRING_VALUE",
 * //     AppMonitorConfiguration: { // AppMonitorConfiguration
 * //       IdentityPoolId: "STRING_VALUE",
 * //       ExcludedPages: [ // Pages
 * //         "STRING_VALUE",
 * //       ],
 * //       IncludedPages: [
 * //         "STRING_VALUE",
 * //       ],
 * //       FavoritePages: [ // FavoritePages
 * //         "STRING_VALUE",
 * //       ],
 * //       SessionSampleRate: Number("double"),
 * //       GuestRoleArn: "STRING_VALUE",
 * //       AllowCookies: true || false,
 * //       Telemetries: [ // Telemetries
 * //         "STRING_VALUE",
 * //       ],
 * //       EnableXRay: true || false,
 * //     },
 * //     DataStorage: { // DataStorage
 * //       CwLog: { // CwLog
 * //         CwLogEnabled: true || false,
 * //         CwLogGroup: "STRING_VALUE",
 * //       },
 * //     },
 * //     CustomEvents: { // CustomEvents
 * //       Status: "STRING_VALUE",
 * //     },
 * //     DeobfuscationConfiguration: { // DeobfuscationConfiguration
 * //       JavaScriptSourceMaps: { // JavaScriptSourceMaps
 * //         Status: "STRING_VALUE", // required
 * //         S3Uri: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAppMonitorCommandInput - {@link GetAppMonitorCommandInput}
 * @returns {@link GetAppMonitorCommandOutput}
 * @see {@link GetAppMonitorCommandInput} for command's `input` shape.
 * @see {@link GetAppMonitorCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 *
 * @public
 */
export class GetAppMonitorCommand extends $Command
  .classBuilder<
    GetAppMonitorCommandInput,
    GetAppMonitorCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RUM", "GetAppMonitor", {})
  .n("RUMClient", "GetAppMonitorCommand")
  .sc(GetAppMonitor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppMonitorRequest;
      output: GetAppMonitorResponse;
    };
    sdk: {
      input: GetAppMonitorCommandInput;
      output: GetAppMonitorCommandOutput;
    };
  };
}
