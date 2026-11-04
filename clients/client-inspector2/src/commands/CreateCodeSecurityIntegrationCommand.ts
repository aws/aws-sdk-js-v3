// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCodeSecurityIntegrationRequest, CreateCodeSecurityIntegrationResponse } from "../models/models_0";
import { CreateCodeSecurityIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCodeSecurityIntegrationCommand}.
 */
export interface CreateCodeSecurityIntegrationCommandInput extends CreateCodeSecurityIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCodeSecurityIntegrationCommand}.
 */
export interface CreateCodeSecurityIntegrationCommandOutput extends CreateCodeSecurityIntegrationResponse, __MetadataBearer {}

/**
 * Creates a code security integration with a source code repository provider.
 *
 * After calling the `CreateCodeSecurityIntegration` operation, you complete authentication and authorization with your provider. Next you call the `UpdateCodeSecurityIntegration` operation to provide the `details` to complete the integration setup
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CreateCodeSecurityIntegrationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CreateCodeSecurityIntegrationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // CreateCodeSecurityIntegrationRequest
 *   name: "STRING_VALUE", // required
 *   type: "GITLAB_SELF_MANAGED" || "GITHUB", // required
 *   details: { // CreateIntegrationDetail Union: only one key present
 *     gitlabSelfManaged: { // CreateGitLabSelfManagedIntegrationDetail
 *       instanceUrl: "STRING_VALUE", // required
 *       accessToken: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCodeSecurityIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeSecurityIntegrationResponse
 * //   integrationArn: "STRING_VALUE", // required
 * //   status: "PENDING" || "IN_PROGRESS" || "ACTIVE" || "INACTIVE" || "DISABLING", // required
 * //   authorizationUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCodeSecurityIntegrationCommandInput - {@link CreateCodeSecurityIntegrationCommandInput}
 * @returns {@link CreateCodeSecurityIntegrationCommandOutput}
 * @see {@link CreateCodeSecurityIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateCodeSecurityIntegrationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred. This exception occurs when the same resource is being modified by concurrent requests.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use Service Quotas to request a service quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class CreateCodeSecurityIntegrationCommand extends command<CreateCodeSecurityIntegrationCommandInput, CreateCodeSecurityIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "CreateCodeSecurityIntegration",
  CreateCodeSecurityIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCodeSecurityIntegrationRequest;
      output: CreateCodeSecurityIntegrationResponse;
    };
    sdk: {
      input: CreateCodeSecurityIntegrationCommandInput;
      output: CreateCodeSecurityIntegrationCommandOutput;
    };
  };
}
