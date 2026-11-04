// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProgressUpdateStreamRequest, DeleteProgressUpdateStreamResult } from "../models/models_0";
import { DeleteProgressUpdateStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProgressUpdateStreamCommand}.
 */
export interface DeleteProgressUpdateStreamCommandInput extends DeleteProgressUpdateStreamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProgressUpdateStreamCommand}.
 */
export interface DeleteProgressUpdateStreamCommandOutput extends DeleteProgressUpdateStreamResult, __MetadataBearer {}

/**
 * Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:
 *
 * - The only parameter needed for `DeleteProgressUpdateStream` is the stream name (same as a `CreateProgressUpdateStream` call).
 * - The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).
 * - If the stream takes time to be deleted, it might still show up on a `ListProgressUpdateStreams` call.
 * - `CreateProgressUpdateStream`, `ImportMigrationTask`, `NotifyMigrationTaskState`, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.
 * - Once the stream and all of its resources are deleted, `CreateProgressUpdateStream` for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DeleteProgressUpdateStreamCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DeleteProgressUpdateStreamCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // DeleteProgressUpdateStreamRequest
 *   ProgressUpdateStreamName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteProgressUpdateStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProgressUpdateStreamCommandInput - {@link DeleteProgressUpdateStreamCommandInput}
 * @returns {@link DeleteProgressUpdateStreamCommandOutput}
 * @see {@link DeleteProgressUpdateStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteProgressUpdateStreamCommandOutput} for command's `response` shape.
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
export class DeleteProgressUpdateStreamCommand extends command<DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProgressUpdateStream",
  DeleteProgressUpdateStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProgressUpdateStreamRequest;
      output: {};
    };
    sdk: {
      input: DeleteProgressUpdateStreamCommandInput;
      output: DeleteProgressUpdateStreamCommandOutput;
    };
  };
}
