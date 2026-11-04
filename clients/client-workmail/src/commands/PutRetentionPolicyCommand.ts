// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRetentionPolicyRequest, PutRetentionPolicyResponse } from "../models/models_0";
import { PutRetentionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRetentionPolicyCommand}.
 */
export interface PutRetentionPolicyCommandInput extends PutRetentionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionPolicyCommand}.
 */
export interface PutRetentionPolicyCommandOutput extends PutRetentionPolicyResponse, __MetadataBearer {}

/**
 * Puts a retention policy to the specified organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // PutRetentionPolicyRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   FolderConfigurations: [ // FolderConfigurations // required
 *     { // FolderConfiguration
 *       Name: "INBOX" || "DELETED_ITEMS" || "SENT_ITEMS" || "DRAFTS" || "JUNK_EMAIL", // required
 *       Action: "NONE" || "DELETE" || "PERMANENTLY_DELETE", // required
 *       Period: Number("int"),
 *     },
 *   ],
 * };
 * const command = new PutRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRetentionPolicyCommandInput - {@link PutRetentionPolicyCommandInput}
 * @returns {@link PutRetentionPolicyCommandOutput}
 * @see {@link PutRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeds the limit of the resource.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class PutRetentionPolicyCommand extends command<PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutRetentionPolicy",
  PutRetentionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRetentionPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutRetentionPolicyCommandInput;
      output: PutRetentionPolicyCommandOutput;
    };
  };
}
