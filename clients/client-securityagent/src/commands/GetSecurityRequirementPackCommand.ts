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
 * Retrieves information about a security requirement pack.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link SecurityAgentServiceException}
 *
 * Base exception class for all service exceptions from SecurityAgent service.
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
