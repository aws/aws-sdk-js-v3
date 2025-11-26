// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import type { DisassociateCreatedArtifactRequest, DisassociateCreatedArtifactResult } from "../models/models_0";
import { DisassociateCreatedArtifact } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateCreatedArtifactCommand}.
 */
export interface DisassociateCreatedArtifactCommandInput extends DisassociateCreatedArtifactRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateCreatedArtifactCommand}.
 */
export interface DisassociateCreatedArtifactCommandOutput extends DisassociateCreatedArtifactResult, __MetadataBearer {}

/**
 * <p>Disassociates a created artifact of an AWS resource with a migration task performed by a
 *          migration tool that was previously associated. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation
 *                to disassociate a created AWS Artifact from a migration task.</p>
 *             </li>
 *             <li>
 *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
 *                which will contain information about type and region; for example:
 *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
 *             </li>
 *             <li>
 *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
 *                or RDS instance, etc.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DisassociateCreatedArtifactCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DisassociateCreatedArtifactCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // DisassociateCreatedArtifactRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   CreatedArtifactName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateCreatedArtifactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateCreatedArtifactCommandInput - {@link DisassociateCreatedArtifactCommandInput}
 * @returns {@link DisassociateCreatedArtifactCommandOutput}
 * @see {@link DisassociateCreatedArtifactCommandInput} for command's `input` shape.
 * @see {@link DisassociateCreatedArtifactCommandOutput} for command's `response` shape.
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
export class DisassociateCreatedArtifactCommand extends $Command
  .classBuilder<
    DisassociateCreatedArtifactCommandInput,
    DisassociateCreatedArtifactCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHub", "DisassociateCreatedArtifact", {})
  .n("MigrationHubClient", "DisassociateCreatedArtifactCommand")
  .sc(DisassociateCreatedArtifact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateCreatedArtifactRequest;
      output: {};
    };
    sdk: {
      input: DisassociateCreatedArtifactCommandInput;
      output: DisassociateCreatedArtifactCommandOutput;
    };
  };
}
