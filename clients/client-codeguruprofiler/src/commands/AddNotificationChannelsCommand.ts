// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddNotificationChannelsRequest, AddNotificationChannelsResponse } from "../models/models_0";
import { AddNotificationChannels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Add up to 2 anomaly notifications channels for a profiling group.</p>
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
 *  <p>The requested operation would cause a conflict with the current state
 *         of a service resource associated with the request. Resolve the conflict
 *         before retrying this request.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota. To perform the requested action,
 *         remove some of the relevant resources, or use <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a> to request a
 *         service quota increase.
 *       </p>
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
export class AddNotificationChannelsCommand extends $Command
  .classBuilder<
    AddNotificationChannelsCommandInput,
    AddNotificationChannelsCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "AddNotificationChannels", {})
  .n("CodeGuruProfilerClient", "AddNotificationChannelsCommand")
  .sc(AddNotificationChannels)
  .build() {
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
