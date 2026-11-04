// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateEmailAddressAliasRequest, AssociateEmailAddressAliasResponse } from "../models/models_0";
import { AssociateEmailAddressAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateEmailAddressAliasCommand}.
 */
export interface AssociateEmailAddressAliasCommandInput extends AssociateEmailAddressAliasRequest {}
/**
 * @public
 *
 * The output of {@link AssociateEmailAddressAliasCommand}.
 */
export interface AssociateEmailAddressAliasCommandOutput extends AssociateEmailAddressAliasResponse, __MetadataBearer {}

/**
 * Associates an email address alias with an existing email address in an Connect Customer instance. This creates a forwarding relationship where emails sent to the alias email address are automatically forwarded to the primary email address.
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - **Unified customer support**: Create multiple entry points (for example, support@example.com, help@example.com, customercare@example.com) that all forward to a single agent queue for streamlined management.
 * - **Department consolidation**: Forward emails from legacy department addresses (for example, sales@example.com, info@example.com) to a centralized customer service email during organizational restructuring.
 * - **Brand management**: Enable you to use familiar brand-specific email addresses that forward to the appropriate Connect Customer instance email address.
 *
 * **Important things to know**
 *
 * - Each email address can have a maximum of one alias. You cannot create multiple aliases for the same email address.
 * - If the alias email address already receives direct emails, it continues to receive direct emails plus forwarded emails.
 * - You cannot chain email aliases together (that is, create an alias of an alias).
 *
 * `AssociateEmailAddressAlias` does not return the following information:
 *
 * - A confirmation of the alias relationship details (you must call [DescribeEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeEmailAddress.html) to verify).
 * - The timestamp of when the association occurred.
 * - The status of the forwarding configuration.
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * **Related operations**
 *
 * - [DisassociateEmailAddressAlias](https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateEmailAddressAlias.html): Removes the alias association between two email addresses in an Connect Customer instance.
 * - [DescribeEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeEmailAddress.html): View current alias configurations for an email address.
 * - [SearchEmailAddresses](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchEmailAddresses.html): Find email addresses and their alias relationships across an instance.
 * - [CreateEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateEmailAddress.html): Create new email addresses that can participate in alias relationships.
 * - [DeleteEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteEmailAddress.html): Remove email addresses (automatically removes any alias relationships).
 * - [UpdateEmailAddressMetadata](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateEmailAddressMetadata.html): Modify email address properties (does not affect alias relationships).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateEmailAddressAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateEmailAddressAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateEmailAddressAliasRequest
 *   EmailAddressId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   AliasConfiguration: { // AliasConfiguration
 *     EmailAddressId: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AssociateEmailAddressAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateEmailAddressAliasCommandInput - {@link AssociateEmailAddressAliasCommandInput}
 * @returns {@link AssociateEmailAddressAliasCommandOutput}
 * @see {@link AssociateEmailAddressAliasCommandInput} for command's `input` shape.
 * @see {@link AssociateEmailAddressAliasCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link IdempotencyException} (client fault)
 *
 * An entity with the same name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class AssociateEmailAddressAliasCommand extends command<AssociateEmailAddressAliasCommandInput, AssociateEmailAddressAliasCommandOutput>(
  _ep0,
  _mw0,
  "AssociateEmailAddressAlias",
  AssociateEmailAddressAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateEmailAddressAliasRequest;
      output: {};
    };
    sdk: {
      input: AssociateEmailAddressAliasCommandInput;
      output: AssociateEmailAddressAliasCommandOutput;
    };
  };
}
