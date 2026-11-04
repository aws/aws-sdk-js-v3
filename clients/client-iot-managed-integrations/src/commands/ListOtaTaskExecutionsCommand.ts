// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOtaTaskExecutionsRequest, ListOtaTaskExecutionsResponse } from "../models/models_0";
import { ListOtaTaskExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List all of the over-the-air (OTA) task executions.
 *
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class ListOtaTaskExecutionsCommand extends command<ListOtaTaskExecutionsCommandInput, ListOtaTaskExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListOtaTaskExecutions",
  ListOtaTaskExecutions$
) {
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
