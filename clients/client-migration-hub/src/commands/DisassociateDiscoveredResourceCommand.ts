// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DisassociateDiscoveredResourceRequest, DisassociateDiscoveredResourceResult } from "../models/models_0";
import { DisassociateDiscoveredResource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateDiscoveredResourceCommand}.
 */
export interface DisassociateDiscoveredResourceCommandInput extends DisassociateDiscoveredResourceRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDiscoveredResourceCommand}.
 */
export interface DisassociateDiscoveredResourceCommandOutput
  extends DisassociateDiscoveredResourceResult,
    __MetadataBearer {}

/**
 * <p>Disassociate an Application Discovery Service discovered resource from a migration
 *          task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DisassociateDiscoveredResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DisassociateDiscoveredResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // DisassociateDiscoveredResourceRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   ConfigurationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateDiscoveredResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDiscoveredResourceCommandInput - {@link DisassociateDiscoveredResourceCommandInput}
 * @returns {@link DisassociateDiscoveredResourceCommandOutput}
 * @see {@link DisassociateDiscoveredResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateDiscoveredResourceCommandOutput} for command's `response` shape.
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
export class DisassociateDiscoveredResourceCommand extends $Command
  .classBuilder<
    DisassociateDiscoveredResourceCommandInput,
    DisassociateDiscoveredResourceCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHub", "DisassociateDiscoveredResource", {})
  .n("MigrationHubClient", "DisassociateDiscoveredResourceCommand")
  .sc(DisassociateDiscoveredResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDiscoveredResourceRequest;
      output: {};
    };
    sdk: {
      input: DisassociateDiscoveredResourceCommandInput;
      output: DisassociateDiscoveredResourceCommandOutput;
    };
  };
}
