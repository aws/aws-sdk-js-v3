// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOtaTasksRequest, ListOtaTasksResponse } from "../models/models_0";
import { ListOtaTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOtaTasksCommand}.
 */
export interface ListOtaTasksCommandInput extends ListOtaTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListOtaTasksCommand}.
 */
export interface ListOtaTasksCommandOutput extends ListOtaTasksResponse, __MetadataBearer {}

/**
 * List all of the over-the-air (OTA) tasks.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListOtaTasksCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListOtaTasksCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListOtaTasksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOtaTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListOtaTasksResponse
 * //   Tasks: [ // OtaTaskListDefinition
 * //     { // OtaTaskSummary
 * //       TaskId: "STRING_VALUE",
 * //       TaskArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       TaskConfigurationId: "STRING_VALUE",
 * //       Status: "IN_PROGRESS" || "CANCELED" || "COMPLETED" || "DELETION_IN_PROGRESS" || "SCHEDULED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOtaTasksCommandInput - {@link ListOtaTasksCommandInput}
 * @returns {@link ListOtaTasksCommandOutput}
 * @see {@link ListOtaTasksCommandInput} for command's `input` shape.
 * @see {@link ListOtaTasksCommandOutput} for command's `response` shape.
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
export class ListOtaTasksCommand extends command<ListOtaTasksCommandInput, ListOtaTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListOtaTasks",
  ListOtaTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOtaTasksRequest;
      output: ListOtaTasksResponse;
    };
    sdk: {
      input: ListOtaTasksCommandInput;
      output: ListOtaTasksCommandOutput;
    };
  };
}
