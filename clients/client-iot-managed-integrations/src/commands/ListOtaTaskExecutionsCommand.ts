// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { ListOtaTaskExecutionsRequest, ListOtaTaskExecutionsResponse } from "../models/models_0";
import { ListOtaTaskExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOtaTaskExecutionsCommand}.
 */
export interface ListOtaTaskExecutionsCommandInput extends ListOtaTaskExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListOtaTaskExecutionsCommand}.
 */
export interface ListOtaTaskExecutionsCommandOutput extends ListOtaTaskExecutionsResponse, __MetadataBearer {}

/**
 * <p>List all of the over-the-air (OTA) task executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListOtaTaskExecutionsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListOtaTaskExecutionsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListOtaTaskExecutionsRequest
 *   Identifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOtaTaskExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListOtaTaskExecutionsResponse
 * //   ExecutionSummaries: [ // OtaTaskExecutionSummariesListDefinition
 * //     { // OtaTaskExecutionSummaries
 * //       TaskExecutionSummary: { // OtaTaskExecutionSummary
 * //         ExecutionNumber: Number("long"),
 * //         LastUpdatedAt: new Date("TIMESTAMP"),
 * //         QueuedAt: new Date("TIMESTAMP"),
 * //         RetryAttempt: Number("int"),
 * //         StartedAt: new Date("TIMESTAMP"),
 * //         Status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 * //       },
 * //       ManagedThingId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOtaTaskExecutionsCommandInput - {@link ListOtaTaskExecutionsCommandInput}
 * @returns {@link ListOtaTaskExecutionsCommandOutput}
 * @see {@link ListOtaTaskExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListOtaTaskExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class ListOtaTaskExecutionsCommand extends $Command
  .classBuilder<
    ListOtaTaskExecutionsCommandInput,
    ListOtaTaskExecutionsCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "ListOtaTaskExecutions", {})
  .n("IoTManagedIntegrationsClient", "ListOtaTaskExecutionsCommand")
  .sc(ListOtaTaskExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOtaTaskExecutionsRequest;
      output: ListOtaTaskExecutionsResponse;
    };
    sdk: {
      input: ListOtaTaskExecutionsCommandInput;
      output: ListOtaTaskExecutionsCommandOutput;
    };
  };
}
