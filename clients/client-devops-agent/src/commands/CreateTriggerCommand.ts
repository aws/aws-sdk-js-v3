// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTriggerRequest, CreateTriggerResponse } from "../models/models_0";
import { CreateTrigger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTriggerCommand}.
 */
export interface CreateTriggerCommandInput extends CreateTriggerRequest {}
/**
 * @public
 *
 * The output of {@link CreateTriggerCommand}.
 */
export interface CreateTriggerCommandOutput extends CreateTriggerResponse, __MetadataBearer {}

/**
 * <p>Creates a new Trigger in the specified agent space</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, CreateTriggerCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, CreateTriggerCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // CreateTriggerRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   condition: { // TriggerCondition Union: only one key present
 *     schedule: { // ScheduleCondition
 *       expression: "STRING_VALUE", // required
 *     },
 *   },
 *   action: "DOCUMENT_VALUE", // required
 *   status: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateTriggerCommand(input);
 * const response = await client.send(command);
 * // { // CreateTriggerResponse
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
 * @param CreateTriggerCommandInput - {@link CreateTriggerCommandInput}
 * @returns {@link CreateTriggerCommandOutput}
 * @see {@link CreateTriggerCommandInput} for command's `input` shape.
 * @see {@link CreateTriggerCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
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
export class CreateTriggerCommand extends command<CreateTriggerCommandInput, CreateTriggerCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrigger",
  CreateTrigger$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTriggerRequest;
      output: CreateTriggerResponse;
    };
    sdk: {
      input: CreateTriggerCommandInput;
      output: CreateTriggerCommandOutput;
    };
  };
}
