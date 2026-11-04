// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOrganizationRequest, CreateOrganizationResponse } from "../models/models_0";
import { CreateOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOrganizationCommand}.
 */
export interface CreateOrganizationCommandInput extends CreateOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link CreateOrganizationCommand}.
 */
export interface CreateOrganizationCommandOutput extends CreateOrganizationResponse, __MetadataBearer {}

/**
 * Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see [Adding an organization](https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html) in the *WorkMail Administrator Guide*.
 *
 * You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see [Adding a domain](https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html) and [Choosing the default domain](https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html) in the *WorkMail Administrator Guide*.
 *
 * Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateOrganizationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateOrganizationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // CreateOrganizationRequest
 *   DirectoryId: "STRING_VALUE",
 *   Alias: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Domains: [ // Domains
 *     { // Domain
 *       DomainName: "STRING_VALUE", // required
 *       HostedZoneId: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyArn: "STRING_VALUE",
 *   EnableInteroperability: true || false,
 * };
 * const command = new CreateOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateOrganizationResponse
 * //   OrganizationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOrganizationCommandInput - {@link CreateOrganizationCommandInput}
 * @returns {@link CreateOrganizationCommandOutput}
 * @see {@link CreateOrganizationCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryInUseException} (client fault)
 *
 * The directory is already in use by another WorkMail organization in the same account and Region.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The directory is unavailable. It might be located in another Region or deleted.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeds the limit of the resource.
 *
 * @throws {@link NameAvailabilityException} (client fault)
 *
 * The user, group, or resource name isn't unique in WorkMail.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class CreateOrganizationCommand extends command<CreateOrganizationCommandInput, CreateOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "CreateOrganization",
  CreateOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOrganizationRequest;
      output: CreateOrganizationResponse;
    };
    sdk: {
      input: CreateOrganizationCommandInput;
      output: CreateOrganizationCommandOutput;
    };
  };
}
