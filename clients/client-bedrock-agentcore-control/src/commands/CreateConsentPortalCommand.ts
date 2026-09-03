// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConsentPortalRequest, CreateConsentPortalResponse } from "../models/models_0";
import { CreateConsentPortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConsentPortalCommand}.
 */
export interface CreateConsentPortalCommandInput extends CreateConsentPortalRequest {}
/**
 * @public
 *
 * The output of {@link CreateConsentPortalCommand}.
 */
export interface CreateConsentPortalCommandOutput extends CreateConsentPortalResponse, __MetadataBearer {}

/**
 * <p>Creates a new consent portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateConsentPortalCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateConsentPortalCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateConsentPortalRequest
 *   executionRoleArn: "STRING_VALUE", // required
 *   idpConfig: { // ConsentPortalIdpConfig
 *     credentialProviderArn: "STRING_VALUE", // required
 *     scopes: [ // AllowedScopesType // required
 *       "STRING_VALUE",
 *     ],
 *     audience: "STRING_VALUE",
 *   },
 *   name: "STRING_VALUE", // required
 *   sources: [ // ConsentPortalSources // required
 *     { // ConsentPortalSource
 *       identifier: "STRING_VALUE", // required
 *       type: "agentcore-gateway", // required
 *     },
 *   ],
 *   description: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConsentPortalCommand(input);
 * const response = await client.send(command);
 * // { // CreateConsentPortalResponse
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
 * @param CreateConsentPortalCommandInput - {@link CreateConsentPortalCommandInput}
 * @returns {@link CreateConsentPortalCommandOutput}
 * @see {@link CreateConsentPortalCommandInput} for command's `input` shape.
 * @see {@link CreateConsentPortalCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class CreateConsentPortalCommand extends command<CreateConsentPortalCommandInput, CreateConsentPortalCommandOutput>(
  _ep0,
  _mw0,
  "CreateConsentPortal",
  CreateConsentPortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConsentPortalRequest;
      output: CreateConsentPortalResponse;
    };
    sdk: {
      input: CreateConsentPortalCommandInput;
      output: CreateConsentPortalCommandOutput;
    };
  };
}
