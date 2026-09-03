// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConsentPortalRequest, UpdateConsentPortalResponse } from "../models/models_0";
import { UpdateConsentPortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConsentPortalCommand}.
 */
export interface UpdateConsentPortalCommandInput extends UpdateConsentPortalRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConsentPortalCommand}.
 */
export interface UpdateConsentPortalCommandOutput extends UpdateConsentPortalResponse, __MetadataBearer {}

/**
 * <p>Updates an existing consent portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateConsentPortalCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateConsentPortalCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateConsentPortalRequest
 *   consentPortalIdentifier: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE",
 *   idpConfig: { // ConsentPortalIdpConfig
 *     credentialProviderArn: "STRING_VALUE", // required
 *     scopes: [ // AllowedScopesType // required
 *       "STRING_VALUE",
 *     ],
 *     audience: "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateConsentPortalCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConsentPortalResponse
 * //   sources: [ // ConsentPortalSources // required
 * //     { // ConsentPortalSource
 * //       identifier: "STRING_VALUE", // required
 * //       type: "agentcore-gateway", // required
 * //     },
 * //   ],
 * //   consentPortalArn: "STRING_VALUE", // required
 * //   consentPortalId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   executionRoleArn: "STRING_VALUE", // required
 * //   idpConfig: { // ConsentPortalIdpConfig
 * //     credentialProviderArn: "STRING_VALUE", // required
 * //     scopes: [ // AllowedScopesType // required
 * //       "STRING_VALUE",
 * //     ],
 * //     audience: "STRING_VALUE",
 * //   },
 * //   name: "STRING_VALUE", // required
 * //   portalUrl: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "FAILED", // required
 * //   statusReason: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateConsentPortalCommandInput - {@link UpdateConsentPortalCommandInput}
 * @returns {@link UpdateConsentPortalCommandOutput}
 * @see {@link UpdateConsentPortalCommandInput} for command's `input` shape.
 * @see {@link UpdateConsentPortalCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class UpdateConsentPortalCommand extends command<UpdateConsentPortalCommandInput, UpdateConsentPortalCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConsentPortal",
  UpdateConsentPortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConsentPortalRequest;
      output: UpdateConsentPortalResponse;
    };
    sdk: {
      input: UpdateConsentPortalCommandInput;
      output: UpdateConsentPortalCommandOutput;
    };
  };
}
