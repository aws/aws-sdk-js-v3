// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateEmailAddressAliasRequest, DisassociateEmailAddressAliasResponse } from "../models/models_1";
import { DisassociateEmailAddressAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateEmailAddressAliasCommand}.
 */
export interface DisassociateEmailAddressAliasCommandInput extends DisassociateEmailAddressAliasRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateEmailAddressAliasCommand}.
 */
export interface DisassociateEmailAddressAliasCommandOutput extends DisassociateEmailAddressAliasResponse, __MetadataBearer {}

/**
 * Removes the alias association between two email addresses in an Connect Customer instance. After disassociation, emails sent to the former alias email address are no longer forwarded to the primary email address. Both email addresses continue to exist independently and can receive emails directly.
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - **Department separation**: Remove alias relationships when splitting a consolidated support queue back into separate department-specific queues.
 * - **Email address retirement**: Cleanly remove forwarding relationships before decommissioning old email addresses.
 * - **Organizational restructuring**: Reconfigure email routing when business processes change and aliases are no longer needed.
 *
 * **Important things to know**
 *
 * - Concurrent operations: This API uses distributed locking, so concurrent operations on the same email addresses may be temporarily blocked.
 * - Emails sent to the former alias address are still delivered directly to that address if it exists.
 * - You do not need to delete the email addresses after disassociation. Both addresses remain active independently.
 * - After a successful disassociation, you can immediately create a new alias relationship with the same addresses.
 * - 200 status means alias was successfully disassociated.
 *
 * `DisassociateEmailAddressAlias` does not return the following information:
 *
 * - Details in the response about the email that was disassociated. The response returns an empty body.
 * - The timestamp of when the disassociation occurred.
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * **Related operations**
 *
 * - [AssociateEmailAddressAlias](https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateEmailAddressAlias.html): Associates an email address alias with an existing email address in an Connect Customer instance.
 * - [DescribeEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeEmailAddress.html): View current alias configurations for an email address.
 * - [SearchEmailAddresses](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchEmailAddresses.html): Find email addresses and their alias relationships across an instance.
 * - [CreateEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateEmailAddress.html): Create new email addresses that can participate in alias relationships.
 * - [DeleteEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteEmailAddress.html): Remove email addresses (automatically removes any alias relationships).
 * - [UpdateEmailAddressMetadata](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateEmailAddressMetadata.html): Modify email address properties (does not affect alias relationships).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateEmailAddressAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateEmailAddressAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateEmailAddressAliasRequest
 *   EmailAddressId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   AliasConfiguration: { // AliasConfiguration
 *     EmailAddressId: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateEmailAddressAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateEmailAddressAliasCommandInput - {@link DisassociateEmailAddressAliasCommandInput}
 * @returns {@link DisassociateEmailAddressAliasCommandOutput}
 * @see {@link DisassociateEmailAddressAliasCommandInput} for command's `input` shape.
 * @see {@link DisassociateEmailAddressAliasCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
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
export class DisassociateEmailAddressAliasCommand extends command<DisassociateEmailAddressAliasCommandInput, DisassociateEmailAddressAliasCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateEmailAddressAlias",
  DisassociateEmailAddressAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateEmailAddressAliasRequest;
      output: {};
    };
    sdk: {
      input: DisassociateEmailAddressAliasCommandInput;
      output: DisassociateEmailAddressAliasCommandOutput;
    };
  };
}
