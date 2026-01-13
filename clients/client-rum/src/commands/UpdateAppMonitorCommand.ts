// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAppMonitorRequest, UpdateAppMonitorResponse } from "../models/models_0";
import type { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";
import { UpdateAppMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppMonitorCommand}.
 */
export interface UpdateAppMonitorCommandInput extends UpdateAppMonitorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppMonitorCommand}.
 */
export interface UpdateAppMonitorCommandOutput extends UpdateAppMonitorResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor configuration that you specify in this operation are changed. For any parameters that you omit, the existing values are kept.</p> <p>You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_TagResource.html">TagResource</a>.</p> <p>To create a new app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_CreateAppMonitor.html">CreateAppMonitor</a>.</p> <p>After you update an app monitor, sign in to the CloudWatch RUM console to get the updated JavaScript code snippet to add to your web application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet that I've already generated?</a> </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, UpdateAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, UpdateAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // UpdateAppMonitorRequest
 *   Name: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
 *   DomainList: [ // AppMonitorDomainList
 *     "STRING_VALUE",
 *   ],
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
 * const command = new UpdateAppMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAppMonitorCommandInput - {@link UpdateAppMonitorCommandInput}
 * @returns {@link UpdateAppMonitorCommandOutput}
 * @see {@link UpdateAppMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateAppMonitorCommandOutput} for command's `response` shape.
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
export class UpdateAppMonitorCommand extends $Command
  .classBuilder<
    UpdateAppMonitorCommandInput,
    UpdateAppMonitorCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RUM", "UpdateAppMonitor", {})
  .n("RUMClient", "UpdateAppMonitorCommand")
  .sc(UpdateAppMonitor$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppMonitorRequest;
      output: {};
    };
    sdk: {
      input: UpdateAppMonitorCommandInput;
      output: UpdateAppMonitorCommandOutput;
    };
  };
}
