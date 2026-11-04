// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateApprovalActionRequest, UpdateApprovalActionResponse } from "../models/models_0";
import { UpdateApprovalAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApprovalActionCommand}.
 */
export interface UpdateApprovalActionCommandInput extends UpdateApprovalActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApprovalActionCommand}.
 */
export interface UpdateApprovalActionCommandOutput extends UpdateApprovalActionResponse, __MetadataBearer {}

/**
 * Updates an approval request with the terminal decision (APPROVED or REJECTED). A single operation handles both verbs via the action enum.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, UpdateApprovalActionCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, UpdateApprovalActionCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // UpdateApprovalActionRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   approvalId: "STRING_VALUE", // required
 *   action: "APPROVED" || "REJECTED", // required
 *   finalPattern: { // ApprovalPattern
 *     tool: "STRING_VALUE", // required
 *     argumentPins: { // ApprovalArgumentPins // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   reason: "STRING_VALUE",
 *   ttlSeconds: Number("int"),
 *   singleUse: true || false,
 * };
 * const command = new UpdateApprovalActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApprovalActionResponse
 * //   approvalId: "STRING_VALUE", // required
 * //   status: "PENDING" || "APPROVED" || "REJECTED" || "REVOKED" || "REDEEMED", // required
 * //   expiresAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateApprovalActionCommandInput - {@link UpdateApprovalActionCommandInput}
 * @returns {@link UpdateApprovalActionCommandOutput}
 * @see {@link UpdateApprovalActionCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalActionCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed the service quota limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *
 * This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters provided in the request are invalid.
 *
 * @throws {@link DevOpsAgentServiceException}
 *
 * Base exception class for all service exceptions from DevOpsAgent service.
 *
 * @public
 */
export class UpdateApprovalActionCommand extends command<UpdateApprovalActionCommandInput, UpdateApprovalActionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApprovalAction",
  UpdateApprovalAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApprovalActionRequest;
      output: UpdateApprovalActionResponse;
    };
    sdk: {
      input: UpdateApprovalActionCommandInput;
      output: UpdateApprovalActionCommandOutput;
    };
  };
}
