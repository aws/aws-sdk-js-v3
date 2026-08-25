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
 * <p>Updates an approval request with the terminal decision (APPROVED or REJECTED). A single operation handles both verbs via the action enum.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
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
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
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
