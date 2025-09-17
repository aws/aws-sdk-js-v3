// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOrganizationRequest, CreateOrganizationResponse } from "../models/models_0";
import { de_CreateOrganizationCommand, se_CreateOrganizationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p>
 *          <p>You can associate multiple email domains with an organization, then choose your
 *          default email domain from the WorkMail console. You can also associate a domain that is managed
 *          in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a
 *             domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a>
 *          in the <i>WorkMail Administrator Guide</i>.</p>
 *          <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS
 *          KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail
 *          creates a default, AWS managed key for you.</p>
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
 *  <p>The directory is already in use by another WorkMail organization in the same account and Region.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
 *
 * @throws {@link NameAvailabilityException} (client fault)
 *  <p>The user, group, or resource name isn't unique in WorkMail.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class CreateOrganizationCommand extends $Command
  .classBuilder<
    CreateOrganizationCommandInput,
    CreateOrganizationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "CreateOrganization", {})
  .n("WorkMailClient", "CreateOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_CreateOrganizationCommand)
  .de(de_CreateOrganizationCommand)
  .build() {
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
