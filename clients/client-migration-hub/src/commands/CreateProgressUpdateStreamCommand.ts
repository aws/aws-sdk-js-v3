// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProgressUpdateStreamRequest, CreateProgressUpdateStreamResult } from "../models/models_0";
import { CreateProgressUpdateStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProgressUpdateStreamCommand}.
 */
export interface CreateProgressUpdateStreamCommandInput extends CreateProgressUpdateStreamRequest {}
/**
 * @public
 *
 * The output of {@link CreateProgressUpdateStreamCommand}.
 */
export interface CreateProgressUpdateStreamCommandOutput extends CreateProgressUpdateStreamResult, __MetadataBearer {}

/**
 * Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, CreateProgressUpdateStreamCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, CreateProgressUpdateStreamCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // CreateProgressUpdateStreamRequest
 *   ProgressUpdateStreamName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CreateProgressUpdateStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateProgressUpdateStreamCommandInput - {@link CreateProgressUpdateStreamCommandInput}
 * @returns {@link CreateProgressUpdateStreamCommandOutput}
 * @see {@link CreateProgressUpdateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateProgressUpdateStreamCommandOutput} for command's `response` shape.
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
export class CreateProgressUpdateStreamCommand extends command<CreateProgressUpdateStreamCommandInput, CreateProgressUpdateStreamCommandOutput>(
  _ep0,
  _mw0,
  "CreateProgressUpdateStream",
  CreateProgressUpdateStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProgressUpdateStreamRequest;
      output: {};
    };
    sdk: {
      input: CreateProgressUpdateStreamCommandInput;
      output: CreateProgressUpdateStreamCommandOutput;
    };
  };
}
