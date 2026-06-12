// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTriggerRequest, GetTriggerResponse } from "../models/models_0";
import { GetTrigger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTriggerCommand}.
 */
export interface GetTriggerCommandInput extends GetTriggerRequest {}
/**
 * @public
 *
 * The output of {@link GetTriggerCommand}.
 */
export interface GetTriggerCommandOutput extends GetTriggerResponse, __MetadataBearer {}

/**
 * <p>Gets a Trigger from the specified agent space</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetTriggerCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetTriggerCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // GetTriggerRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   triggerId: "STRING_VALUE", // required
 * };
 * const command = new GetTriggerCommand(input);
 * const response = await client.send(command);
 * // { // GetTriggerResponse
 * //   trigger: { // Trigger
 * //     triggerId: "STRING_VALUE", // required
 * //     agentSpaceId: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     condition: { // TriggerCondition Union: only one key present
 * //       schedule: { // ScheduleCondition
 * //         expression: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     action: "DOCUMENT_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTriggerCommandInput - {@link GetTriggerCommandInput}
 * @returns {@link GetTriggerCommandOutput}
 * @see {@link GetTriggerCommandInput} for command's `input` shape.
 * @see {@link GetTriggerCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class GetTriggerCommand extends $Command
  .classBuilder<
    GetTriggerCommandInput,
    GetTriggerCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "GetTrigger", {})
  .n("DevOpsAgentClient", "GetTriggerCommand")
  .sc(GetTrigger$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTriggerRequest;
      output: GetTriggerResponse;
    };
    sdk: {
      input: GetTriggerCommandInput;
      output: GetTriggerCommandOutput;
    };
  };
}
