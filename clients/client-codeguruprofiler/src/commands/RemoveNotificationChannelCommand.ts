// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveNotificationChannelRequest, RemoveNotificationChannelResponse } from "../models/models_0";
import { RemoveNotificationChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveNotificationChannelCommand}.
 */
export interface RemoveNotificationChannelCommandInput extends RemoveNotificationChannelRequest {}
/**
 * @public
 *
 * The output of {@link RemoveNotificationChannelCommand}.
 */
export interface RemoveNotificationChannelCommandOutput extends RemoveNotificationChannelResponse, __MetadataBearer {}

/**
 * <p>Remove one anomaly notifications channel for a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, RemoveNotificationChannelCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, RemoveNotificationChannelCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // RemoveNotificationChannelRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   channelId: "STRING_VALUE", // required
 * };
 * const command = new RemoveNotificationChannelCommand(input);
 * const response = await client.send(command);
 * // { // RemoveNotificationChannelResponse
 * //   notificationConfiguration: { // NotificationConfiguration
 * //     channels: [ // Channels
 * //       { // Channel
 * //         id: "STRING_VALUE",
 * //         uri: "STRING_VALUE", // required
 * //         eventPublishers: [ // EventPublishers // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param RemoveNotificationChannelCommandInput - {@link RemoveNotificationChannelCommandInput}
 * @returns {@link RemoveNotificationChannelCommandOutput}
 * @see {@link RemoveNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link RemoveNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 *
 * @public
 */
export class RemoveNotificationChannelCommand extends command<RemoveNotificationChannelCommandInput, RemoveNotificationChannelCommandOutput>(
  _ep0,
  _mw0,
  "RemoveNotificationChannel",
  RemoveNotificationChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveNotificationChannelRequest;
      output: RemoveNotificationChannelResponse;
    };
    sdk: {
      input: RemoveNotificationChannelCommandInput;
      output: RemoveNotificationChannelCommandOutput;
    };
  };
}
