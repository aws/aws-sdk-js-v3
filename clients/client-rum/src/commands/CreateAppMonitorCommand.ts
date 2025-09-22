// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppMonitorRequest, CreateAppMonitorResponse } from "../models/models_0";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";
import { CreateAppMonitor } from "../schemas/schemas_1_Rum";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppMonitorCommand}.
 */
export interface CreateAppMonitorCommandInput extends CreateAppMonitorRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppMonitorCommand}.
 */
export interface CreateAppMonitorCommandOutput extends CreateAppMonitorResponse, __MetadataBearer {}

/**
 * <p>Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that
 *       data to RUM. The data includes performance and reliability information such as page load time, client-side errors,
 *       and user behavior.</p>
 *          <p>You use this operation only to create a new app monitor. To update an existing app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_UpdateAppMonitor.html">UpdateAppMonitor</a> instead.</p>
 *          <p>After you create an app monitor, sign in to the CloudWatch RUM console to get
 *          the JavaScript code snippet to add to your web application. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet
 *          that I've already generated?</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, CreateAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, CreateAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // CreateAppMonitorRequest
 *   Name: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
 *   DomainList: [ // AppMonitorDomainList
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AppMonitorConfiguration: { // AppMonitorConfiguration
 *     IdentityPoolId: "STRING_VALUE",
 *     ExcludedPages: [ // Pages
 *       "STRING_VALUE",
 *     ],
 *     IncludedPages: [
 *       "STRING_VALUE",
 *     ],
 *     FavoritePages: [ // FavoritePages
 *       "STRING_VALUE",
 *     ],
 *     SessionSampleRate: Number("double"),
 *     GuestRoleArn: "STRING_VALUE",
 *     AllowCookies: true || false,
 *     Telemetries: [ // Telemetries
 *       "STRING_VALUE",
 *     ],
 *     EnableXRay: true || false,
 *   },
 *   CwLogEnabled: true || false,
 *   CustomEvents: { // CustomEvents
 *     Status: "STRING_VALUE",
 *   },
 *   DeobfuscationConfiguration: { // DeobfuscationConfiguration
 *     JavaScriptSourceMaps: { // JavaScriptSourceMaps
 *       Status: "STRING_VALUE", // required
 *       S3Uri: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateAppMonitorCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppMonitorResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppMonitorCommandInput - {@link CreateAppMonitorCommandInput}
 * @returns {@link CreateAppMonitorCommandOutput}
 * @see {@link CreateAppMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateAppMonitorCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
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
export class CreateAppMonitorCommand extends $Command
  .classBuilder<
    CreateAppMonitorCommandInput,
    CreateAppMonitorCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RUM", "CreateAppMonitor", {})
  .n("RUMClient", "CreateAppMonitorCommand")
  .sc(CreateAppMonitor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppMonitorRequest;
      output: CreateAppMonitorResponse;
    };
    sdk: {
      input: CreateAppMonitorCommandInput;
      output: CreateAppMonitorCommandOutput;
    };
  };
}
