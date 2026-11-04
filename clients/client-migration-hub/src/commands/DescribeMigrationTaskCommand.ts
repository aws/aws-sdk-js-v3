// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMigrationTaskRequest, DescribeMigrationTaskResult } from "../models/models_0";
import { DescribeMigrationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMigrationTaskCommand}.
 */
export interface DescribeMigrationTaskCommandInput extends DescribeMigrationTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMigrationTaskCommand}.
 */
export interface DescribeMigrationTaskCommandOutput extends DescribeMigrationTaskResult, __MetadataBearer {}

/**
 * Retrieves a list of all attributes associated with a specific migration task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DescribeMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DescribeMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // DescribeMigrationTaskRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 * };
 * const command = new DescribeMigrationTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMigrationTaskResult
 * //   MigrationTask: { // MigrationTask
 * //     ProgressUpdateStream: "STRING_VALUE",
 * //     MigrationTaskName: "STRING_VALUE",
 * //     Task: { // Task
 * //       Status: "NOT_STARTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED", // required
 * //       StatusDetail: "STRING_VALUE",
 * //       ProgressPercent: Number("int"),
 * //     },
 * //     UpdateDateTime: new Date("TIMESTAMP"),
 * //     ResourceAttributeList: [ // LatestResourceAttributeList
 * //       { // ResourceAttribute
 * //         Type: "IPV4_ADDRESS" || "IPV6_ADDRESS" || "MAC_ADDRESS" || "FQDN" || "VM_MANAGER_ID" || "VM_MANAGED_OBJECT_REFERENCE" || "VM_NAME" || "VM_PATH" || "BIOS_ID" || "MOTHERBOARD_SERIAL_NUMBER", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMigrationTaskCommandInput - {@link DescribeMigrationTaskCommandInput}
 * @returns {@link DescribeMigrationTaskCommandOutput}
 * @see {@link DescribeMigrationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeMigrationTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
 * @throws {@link MigrationHubServiceException}
 *
 * Base exception class for all service exceptions from MigrationHub service.
 *
 * @public
 */
export class DescribeMigrationTaskCommand extends command<DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMigrationTask",
  DescribeMigrationTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMigrationTaskRequest;
      output: DescribeMigrationTaskResult;
    };
    sdk: {
      input: DescribeMigrationTaskCommandInput;
      output: DescribeMigrationTaskCommandOutput;
    };
  };
}
