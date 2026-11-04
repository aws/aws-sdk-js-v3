// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddNotificationChannelsRequest, AddNotificationChannelsResponse } from "../models/models_0";
import { AddNotificationChannels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddNotificationChannelsCommand}.
 */
export interface AddNotificationChannelsCommandInput extends AddNotificationChannelsRequest {}
/**
 * @public
 *
 * The output of {@link AddNotificationChannelsCommand}.
 */
export interface AddNotificationChannelsCommandOutput extends AddNotificationChannelsResponse, __MetadataBearer {}

/**
 * Add up to 2 anomaly notifications channels for a profiling group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, AddNotificationChannelsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, AddNotificationChannelsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // AddNotificationChannelsRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   channels: [ // Channels // required
 *     { // Channel
 *       id: "STRING_VALUE",
 *       uri: "STRING_VALUE", // required
 *       eventPublishers: [ // EventPublishers // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new AddNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * // { // AddNotificationChannelsResponse
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
 * @param AddNotificationChannelsCommandInput - {@link AddNotificationChannelsCommandInput}
 * @returns {@link AddNotificationChannelsCommandOutput}
 * @see {@link AddNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link AddNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use [Service Quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html) to request a service quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The parameter is not valid.
 *
 * @throws {@link CodeGuruProfilerServiceException}
 *
 * Base exception class for all service exceptions from CodeGuruProfiler service.
 *
 * @public
 */
export class AddNotificationChannelsCommand extends command<AddNotificationChannelsCommandInput, AddNotificationChannelsCommandOutput>(
  _ep0,
  _mw0,
  "AddNotificationChannels",
  AddNotificationChannels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddNotificationChannelsRequest;
      output: AddNotificationChannelsResponse;
    };
    sdk: {
      input: AddNotificationChannelsCommandInput;
      output: AddNotificationChannelsCommandOutput;
    };
  };
}
