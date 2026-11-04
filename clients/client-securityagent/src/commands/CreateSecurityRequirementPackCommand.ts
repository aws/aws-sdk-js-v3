// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSecurityRequirementPackInput, CreateSecurityRequirementPackOutput } from "../models/models_0";
import { CreateSecurityRequirementPack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSecurityRequirementPackCommand}.
 */
export interface CreateSecurityRequirementPackCommandInput extends CreateSecurityRequirementPackInput {}
/**
 * @public
 *
 * The output of {@link CreateSecurityRequirementPackCommand}.
 */
export interface CreateSecurityRequirementPackCommandOutput extends CreateSecurityRequirementPackOutput, __MetadataBearer {}

/**
 * Creates a customer managed security requirement pack.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateSecurityRequirementPackCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateSecurityRequirementPackCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateSecurityRequirementPackInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "ENABLED" || "DISABLED",
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSecurityRequirementPackCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityRequirementPackOutput
 * //   packId: "STRING_VALUE", // required
 * //   status: "ENABLED" || "DISABLED", // required
 * //   kmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSecurityRequirementPackCommandInput - {@link CreateSecurityRequirementPackCommandInput}
 * @returns {@link CreateSecurityRequirementPackCommandOutput}
 * @see {@link CreateSecurityRequirementPackCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityRequirementPackCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of your request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota. Review your current usage and request a quota increase if needed.
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
export class CreateSecurityRequirementPackCommand extends command<CreateSecurityRequirementPackCommandInput, CreateSecurityRequirementPackCommandOutput>(
  _ep0,
  _mw0,
  "CreateSecurityRequirementPack",
  CreateSecurityRequirementPack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecurityRequirementPackInput;
      output: CreateSecurityRequirementPackOutput;
    };
    sdk: {
      input: CreateSecurityRequirementPackCommandInput;
      output: CreateSecurityRequirementPackCommandOutput;
    };
  };
}
