// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAppMonitorRequest, UpdateAppMonitorResponse } from "../models/models_0";
import { UpdateAppMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor configuration that you specify in this operation are changed. For any parameters that you omit, the existing values are kept.
 *
 * You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use [TagResource](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_TagResource.html).
 *
 * To create a new app monitor, use [CreateAppMonitor](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_CreateAppMonitor.html).
 *
 * After you update an app monitor, sign in to the CloudWatch RUM console to get the updated JavaScript code snippet to add to your web application. For more information, see [How do I find a code snippet that I've already generated?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html)
 *
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
export class UpdateAppMonitorCommand extends command<UpdateAppMonitorCommandInput, UpdateAppMonitorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAppMonitor",
  UpdateAppMonitor$
) {
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
