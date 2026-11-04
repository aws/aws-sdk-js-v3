// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTemplateShareInput, CreateTemplateShareOutput } from "../models/models_0";
import { CreateTemplateShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTemplateShareCommand}.
 */
export interface CreateTemplateShareCommandInput extends CreateTemplateShareInput {}
/**
 * @public
 *
 * The output of {@link CreateTemplateShareCommand}.
 */
export interface CreateTemplateShareCommandOutput extends CreateTemplateShareOutput, __MetadataBearer {}

/**
 * Create a review template share.
 *
 * The owner of a review template can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region.
 *
 * Shared access to a review template is not removed until the review template share invitation is deleted.
 *
 * If you share a review template with an organization or OU, all accounts in the organization or OU are granted access to the review template.
 *
 * > **Note:**
 * >
 * > **Disclaimer**
 * >
 * > By sharing your review template with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your review template available to those other accounts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateTemplateShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateTemplateShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateTemplateShareInput
 *   TemplateArn: "STRING_VALUE", // required
 *   SharedWith: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateTemplateShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateShareOutput
 * //   TemplateArn: "STRING_VALUE",
 * //   ShareId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTemplateShareCommandInput - {@link CreateTemplateShareCommandInput}
 * @returns {@link CreateTemplateShareCommandOutput}
 * @see {@link CreateTemplateShareCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class CreateTemplateShareCommand extends command<CreateTemplateShareCommandInput, CreateTemplateShareCommandOutput>(
  _ep0,
  _mw0,
  "CreateTemplateShare",
  CreateTemplateShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateShareInput;
      output: CreateTemplateShareOutput;
    };
    sdk: {
      input: CreateTemplateShareCommandInput;
      output: CreateTemplateShareCommandOutput;
    };
  };
}
