// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { ListOtaTasksRequest, ListOtaTasksResponse } from "../models/models_0";
import { de_ListOtaTasksCommand, se_ListOtaTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List all of the over-the-air (OTA) tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListOtaTasksCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListOtaTasksCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
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
export class ListOtaTasksCommand extends $Command
  .classBuilder<
    ListOtaTasksCommandInput,
    ListOtaTasksCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "ListOtaTasks", {})
  .n("IoTManagedIntegrationsClient", "ListOtaTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListOtaTasksCommand)
  .de(de_ListOtaTasksCommand)
  .build() {
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
