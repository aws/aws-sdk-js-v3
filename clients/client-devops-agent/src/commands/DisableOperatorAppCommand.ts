// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableOperatorAppInput } from "../models/models_0";
import { DisableOperatorApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableOperatorAppCommand}.
 */
export interface DisableOperatorAppCommandInput extends DisableOperatorAppInput {}
/**
 * @public
 *
 * The output of {@link DisableOperatorAppCommand}.
 */
export interface DisableOperatorAppCommandOutput extends __MetadataBearer {}

/**
 * <p>Disable the Operator App for the specified AgentSpace</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, DisableOperatorAppCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, DisableOperatorAppCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // DisableOperatorAppInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   authFlow: "iam" || "idc" || "idp",
 * };
 * const command = new DisableOperatorAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableOperatorAppCommandInput - {@link DisableOperatorAppCommandInput}
 * @returns {@link DisableOperatorAppCommandOutput}
 * @see {@link DisableOperatorAppCommandInput} for command's `input` shape.
 * @see {@link DisableOperatorAppCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link IdentityCenterServiceException} (client fault)
 *  <p>Calls to the customer Identity Center have failed</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
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
export class DisableOperatorAppCommand extends command<DisableOperatorAppCommandInput, DisableOperatorAppCommandOutput>(
  _ep0,
  _mw0,
  "DisableOperatorApp",
  DisableOperatorApp$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableOperatorAppInput;
      output: {};
    };
    sdk: {
      input: DisableOperatorAppCommandInput;
      output: DisableOperatorAppCommandOutput;
    };
  };
}
