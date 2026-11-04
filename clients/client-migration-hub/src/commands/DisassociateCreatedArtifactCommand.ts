// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateCreatedArtifactRequest, DisassociateCreatedArtifactResult } from "../models/models_0";
import { DisassociateCreatedArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:
 *
 * - A migration user can call the `DisassociateCreatedArtifacts` operation to disassociate a created AWS Artifact from a migration task.
 * - The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: `arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b`.
 * - Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DryRunOperation} (client fault)
 *
 * Exception raised to indicate a successfully authorized action when the `DryRun` flag is set to "true".
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home region is not set. Set the home region to continue.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Exception raised when an internal, configuration, or dependency error is encountered.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception raised when the request references a resource (Application Discovery Service configuration, update stream, migration task, etc.) that does not exist in Application Discovery Service (Application Discovery Service) or in Migration Hub's repository.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Exception raised when there is an internal, configuration, or dependency error encountered.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *
 * Exception raised to indicate a request was not authorized when the `DryRun` flag is set to "true".
 *
 * @throws {@link MigrationHubServiceException}
 *
 * Base exception class for all service exceptions from MigrationHub service.
 *
 * @public
 */
export class DisassociateCreatedArtifactCommand extends command<DisassociateCreatedArtifactCommandInput, DisassociateCreatedArtifactCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateCreatedArtifact",
  DisassociateCreatedArtifact$
) {
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
