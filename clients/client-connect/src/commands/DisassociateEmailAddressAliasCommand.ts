// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateEmailAddressAliasRequest, DisassociateEmailAddressAliasResponse } from "../models/models_1";
import { DisassociateEmailAddressAlias } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DisassociateEmailAddressAliasCommandOutput
  extends DisassociateEmailAddressAliasResponse,
    __MetadataBearer {}

/**
 * <p>Removes the alias association between two email addresses in an Amazon Connect instance.
 *    After disassociation, emails sent to the former alias email address are no longer forwarded to
 *    the primary email address. Both email addresses continue to exist independently and can receive
 *    emails directly.</p>
 *          <p>
 *             <b>Use cases</b>
 *          </p>
 *          <p>Following are common uses cases for this API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Department separation</b>: Remove alias relationships when splitting a consolidated support
 *      queue back into separate department-specific queues.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Email address retirement</b>: Cleanly remove forwarding relationships before decommissioning
 *      old email addresses.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Organizational restructuring</b>: Reconfigure email routing when business processes change and
 *      aliases are no longer needed.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Concurrent operations: This API uses distributed locking, so concurrent operations on the
 *      same email addresses may be temporarily blocked.</p>
 *             </li>
 *             <li>
 *                <p>Emails sent to the former alias address are still delivered directly to that address if it
 *      exists.</p>
 *             </li>
 *             <li>
 *                <p>You do not need to delete the email addresses after disassociation. Both addresses remain
 *      active independently.</p>
 *             </li>
 *             <li>
 *                <p>After a successful disassociation, you can immediately create a new alias relationship
 *      with the same addresses.</p>
 *             </li>
 *             <li>
 *                <p>200 status means alias was successfully disassociated.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>DisassociateEmailAddressAlias</code> does not return the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Details in the response about the email that was disassociated. The response returns an empty body.</p>
 *             </li>
 *             <li>
 *                <p>The timestamp of when the disassociation occurred.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>: See
 *    <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and quotas</a>.</p>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateEmailAddressAlias.html">AssociateEmailAddressAlias</a>: Associates an email address alias with an existing email
 *      address in an Amazon Connect instance.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeEmailAddress.html">DescribeEmailAddress</a>:
 *      View current alias configurations for an email address.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchEmailAddresses.html">SearchEmailAddresses</a>:
 *      Find email addresses and their alias relationships across an instance.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateEmailAddress.html">CreateEmailAddress</a>: Create new email addresses that can participate in alias
 *      relationships.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteEmailAddress.html">DeleteEmailAddress</a>: Remove email addresses (automatically removes any alias
 *      relationships).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateEmailAddressMetadata.html">UpdateEmailAddressMetadata</a>: Modify email address properties (does not affect alias
 *      relationships).</p>
 *             </li>
 *          </ul>
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DisassociateEmailAddressAliasCommand extends $Command
  .classBuilder<
    DisassociateEmailAddressAliasCommandInput,
    DisassociateEmailAddressAliasCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DisassociateEmailAddressAlias", {})
  .n("ConnectClient", "DisassociateEmailAddressAliasCommand")
  .sc(DisassociateEmailAddressAlias)
  .build() {
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
