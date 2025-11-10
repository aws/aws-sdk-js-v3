// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateEmailAddressAliasRequest, AssociateEmailAddressAliasResponse } from "../models/models_0";
import { AssociateEmailAddressAlias } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates an email address alias with an existing email address in an Amazon Connect
 *    instance. This creates a forwarding relationship where emails sent to the alias email address are
 *    automatically forwarded to the primary email address. </p>
 *          <p>
 *             <b>Use cases</b>
 *          </p>
 *          <p>Following are common uses cases for this API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Unified customer support</b>: Create multiple entry points (for example, support@example.com,
 *      help@example.com, customercare@example.com) that all forward to a single agent queue for
 *      streamlined management.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Department consolidation</b>: Forward emails from legacy department addresses (for example,
 *      sales@example.com, info@example.com) to a centralized customer service email during
 *      organizational restructuring.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Brand management</b>: Enable you to use familiar brand-specific email addresses that forward
 *      to the appropriate Amazon Connect instance email address.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Each email address can have a maximum of one alias. You cannot create multiple aliases for
 *      the same email address. </p>
 *             </li>
 *             <li>
 *                <p>If the alias email address already receives direct emails, it continues to receive direct
 *      emails plus forwarded emails.</p>
 *             </li>
 *             <li>
 *                <p>You cannot chain email aliases together (that is, create an alias of an alias).</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>AssociateEmailAddressAlias</code> does not return the following information:</p>
 *          <ul>
 *             <li>
 *                <p>A confirmation of the alias relationship details (you must call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeEmailAddress.html">DescribeEmailAddress</a> to verify).</p>
 *             </li>
 *             <li>
 *                <p>The timestamp of when the association occurred.</p>
 *             </li>
 *             <li>
 *                <p>The status of the forwarding configuration.</p>
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
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateEmailAddressAlias.html">DisassociateEmailAddressAlias</a>: Removes the alias association between two email
 *      addresses in an Amazon Connect instance.</p>
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
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
export class AssociateEmailAddressAliasCommand extends $Command
  .classBuilder<
    AssociateEmailAddressAliasCommandInput,
    AssociateEmailAddressAliasCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociateEmailAddressAlias", {})
  .n("ConnectClient", "AssociateEmailAddressAliasCommand")
  .sc(AssociateEmailAddressAlias)
  .build() {
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
