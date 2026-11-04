// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAppMonitorRequest, CreateAppMonitorResponse } from "../models/models_0";
import { CreateAppMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior.
 *
 * You use this operation only to create a new app monitor. To update an existing app monitor, use [UpdateAppMonitor](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_UpdateAppMonitor.html) instead.
 *
 * After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see [How do I find a code snippet that I've already generated?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html)
 *
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
 *   Platform: "STRING_VALUE",
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the arguments for the request is not valid.
 *
 * @throws {@link RUMServiceException}
 *
 * Base exception class for all service exceptions from RUM service.
 *
 * @public
 */
export class CreateAppMonitorCommand extends command<CreateAppMonitorCommandInput, CreateAppMonitorCommandOutput>(
  _ep0,
  _mw0,
  "CreateAppMonitor",
  CreateAppMonitor$
) {
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
