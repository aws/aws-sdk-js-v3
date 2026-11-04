// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTemplateGroupAccessControlEntryRequest } from "../models/models_0";
import { CreateTemplateGroupAccessControlEntry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTemplateGroupAccessControlEntryCommand}.
 */
export interface CreateTemplateGroupAccessControlEntryCommandInput extends CreateTemplateGroupAccessControlEntryRequest {}
/**
 * @public
 *
 * The output of {@link CreateTemplateGroupAccessControlEntryCommand}.
 */
export interface CreateTemplateGroupAccessControlEntryCommandOutput extends __MetadataBearer {}

/**
 * Create a group access control entry. Allow or deny Active Directory groups from enrolling and/or autoenrolling with the template based on the group security identifiers (SIDs).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, CreateTemplateGroupAccessControlEntryCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, CreateTemplateGroupAccessControlEntryCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // CreateTemplateGroupAccessControlEntryRequest
 *   TemplateArn: "STRING_VALUE", // required
 *   GroupSecurityIdentifier: "STRING_VALUE", // required
 *   GroupDisplayName: "STRING_VALUE", // required
 *   AccessRights: { // AccessRights
 *     Enroll: "ALLOW" || "DENY",
 *     AutoEnroll: "ALLOW" || "DENY",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTemplateGroupAccessControlEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTemplateGroupAccessControlEntryCommandInput - {@link CreateTemplateGroupAccessControlEntryCommandInput}
 * @returns {@link CreateTemplateGroupAccessControlEntryCommandOutput}
 * @see {@link CreateTemplateGroupAccessControlEntryCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateGroupAccessControlEntryCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You can receive this error if you attempt to create a resource share when you don't have the required permissions. This can be caused by insufficient permissions in policies attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP) that affects your Amazon Web Services account.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This request cannot be completed for one of the following reasons because the requested resource was being concurrently modified by another request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An input validation error occurred. For example, invalid characters in a template name, or if a pagination token is invalid.
 *
 * @throws {@link PcaConnectorAdServiceException}
 *
 * Base exception class for all service exceptions from PcaConnectorAd service.
 *
 * @public
 */
export class CreateTemplateGroupAccessControlEntryCommand extends command<CreateTemplateGroupAccessControlEntryCommandInput, CreateTemplateGroupAccessControlEntryCommandOutput>(
  _ep0,
  _mw0,
  "CreateTemplateGroupAccessControlEntry",
  CreateTemplateGroupAccessControlEntry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateGroupAccessControlEntryRequest;
      output: {};
    };
    sdk: {
      input: CreateTemplateGroupAccessControlEntryCommandInput;
      output: CreateTemplateGroupAccessControlEntryCommandOutput;
    };
  };
}
