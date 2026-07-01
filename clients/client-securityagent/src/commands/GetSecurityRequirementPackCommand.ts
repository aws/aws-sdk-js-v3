// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSecurityRequirementPackInput, GetSecurityRequirementPackOutput } from "../models/models_0";
import { GetSecurityRequirementPack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSecurityRequirementPackCommand}.
 */
export interface GetSecurityRequirementPackCommandInput extends GetSecurityRequirementPackInput {}
/**
 * @public
 *
 * The output of {@link GetSecurityRequirementPackCommand}.
 */
export interface GetSecurityRequirementPackCommandOutput extends GetSecurityRequirementPackOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a security requirement pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, GetSecurityRequirementPackCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, GetSecurityRequirementPackCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // GetSecurityRequirementPackInput
 *   packId: "STRING_VALUE", // required
 * };
 * const command = new GetSecurityRequirementPackCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityRequirementPackOutput
 * //   packId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   vendorName: "STRING_VALUE",
 * //   managementType: "AWS_MANAGED" || "CUSTOMER_MANAGED", // required
 * //   status: "ENABLED" || "DISABLED", // required
 * //   importStatus: "PENDING" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   kmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSecurityRequirementPackCommandInput - {@link GetSecurityRequirementPackCommandInput}
 * @returns {@link GetSecurityRequirementPackCommandOutput}
 * @see {@link GetSecurityRequirementPackCommandInput} for command's `input` shape.
 * @see {@link GetSecurityRequirementPackCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class GetSecurityRequirementPackCommand extends command<GetSecurityRequirementPackCommandInput, GetSecurityRequirementPackCommandOutput>(
  _ep0,
  _mw0,
  "GetSecurityRequirementPack",
  GetSecurityRequirementPack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSecurityRequirementPackInput;
      output: GetSecurityRequirementPackOutput;
    };
    sdk: {
      input: GetSecurityRequirementPackCommandInput;
      output: GetSecurityRequirementPackCommandOutput;
    };
  };
}
