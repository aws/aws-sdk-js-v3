// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { PutResourceAttributesRequest, PutResourceAttributesResult } from "../models/models_0";
import { PutResourceAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutResourceAttributesCommand}.
 */
export interface PutResourceAttributesCommandInput extends PutResourceAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutResourceAttributesCommand}.
 */
export interface PutResourceAttributesCommandOutput extends PutResourceAttributesResult, __MetadataBearer {}

/**
 * <p>Provides identifying details of the resource being migrated so that it can be associated
 *          in the Application Discovery Service repository. This association occurs asynchronously
 *          after <code>PutResourceAttributes</code> returns.</p>
 *          <important>
 *             <ul>
 *                <li>
 *                   <p>Keep in mind that subsequent calls to PutResourceAttributes will override
 *                   previously stored attributes. For example, if it is first called with a MAC
 *                   address, but later, it is desired to <i>add</i> an IP address, it
 *                   will then be required to call it with <i>both</i> the IP and MAC
 *                   addresses to prevent overriding the MAC address.</p>
 *                </li>
 *                <li>
 *                   <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList">
 *                         <code>ResourceAttributeList</code>
 *                      </a> parameter when specifying any
 *                   "VM" related value.</p>
 *                </li>
 *             </ul>
 *          </important>
 *          <note>
 *             <p>Because this is an asynchronous call, it will always return 200, whether an
 *             association occurs or not. To confirm if an association was found based on the provided
 *             details, call <code>ListDiscoveredResources</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, PutResourceAttributesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, PutResourceAttributesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // PutResourceAttributesRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   ResourceAttributeList: [ // ResourceAttributeList // required
 *     { // ResourceAttribute
 *       Type: "IPV4_ADDRESS" || "IPV6_ADDRESS" || "MAC_ADDRESS" || "FQDN" || "VM_MANAGER_ID" || "VM_MANAGED_OBJECT_REFERENCE" || "VM_NAME" || "VM_PATH" || "BIOS_ID" || "MOTHERBOARD_SERIAL_NUMBER", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new PutResourceAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutResourceAttributesCommandInput - {@link PutResourceAttributesCommandInput}
 * @returns {@link PutResourceAttributesCommandOutput}
 * @see {@link PutResourceAttributesCommandInput} for command's `input` shape.
 * @see {@link PutResourceAttributesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DryRunOperation} (client fault)
 *  <p>Exception raised to indicate a successfully authorized action when the
 *             <code>DryRun</code> flag is set to "true".</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception raised when the request references a resource (Application Discovery Service
 *          configuration, update stream, migration task, etc.) that does not exist in Application
 *          Discovery Service (Application Discovery Service) or in Migration Hub's repository.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code>
 *          flag is set to "true".</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 *
 * @public
 */
export class PutResourceAttributesCommand extends $Command
  .classBuilder<
    PutResourceAttributesCommandInput,
    PutResourceAttributesCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHub", "PutResourceAttributes", {})
  .n("MigrationHubClient", "PutResourceAttributesCommand")
  .sc(PutResourceAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourceAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutResourceAttributesCommandInput;
      output: PutResourceAttributesCommandOutput;
    };
  };
}
