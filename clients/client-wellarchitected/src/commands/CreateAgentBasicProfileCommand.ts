// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { CreateAgentBasicProfileRequest, CreateAgentBasicProfileResponse } from "../models/models_0";
import { CreateAgentBasicProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentBasicProfileCommand}.
 */
export interface CreateAgentBasicProfileCommandInput extends CreateAgentBasicProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentBasicProfileCommand}.
 */
export interface CreateAgentBasicProfileCommandOutput extends CreateAgentBasicProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a Basic profile for the calling account. No configuration input is required because the account and region are inferred from the caller. The profile uses the reserved name <code>basic</code>. This operation is idempotent. Calling it twice returns the same ARN. Each account can have at most one Basic profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateAgentBasicProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateAgentBasicProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateAgentBasicProfileRequest
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAgentBasicProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentBasicProfileResponse
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastModifiedBy: "STRING_VALUE",
 * //   lastModifiedAt: new Date("TIMESTAMP"),
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAgentBasicProfileCommandInput - {@link CreateAgentBasicProfileCommandInput}
 * @returns {@link CreateAgentBasicProfileCommandOutput}
 * @see {@link CreateAgentBasicProfileCommandInput} for command's `input` shape.
 * @see {@link CreateAgentBasicProfileCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class CreateAgentBasicProfileCommand extends command<CreateAgentBasicProfileCommandInput, CreateAgentBasicProfileCommandOutput>(
  _ep1,
  _mw0,
  "CreateAgentBasicProfile",
  CreateAgentBasicProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentBasicProfileRequest;
      output: CreateAgentBasicProfileResponse;
    };
    sdk: {
      input: CreateAgentBasicProfileCommandInput;
      output: CreateAgentBasicProfileCommandOutput;
    };
  };
}
