// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeApplicationStateRequest, DescribeApplicationStateResult } from "../models/models_0";
import { DescribeApplicationState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeApplicationStateCommand}.
 */
export interface DescribeApplicationStateCommandInput extends DescribeApplicationStateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationStateCommand}.
 */
export interface DescribeApplicationStateCommandOutput extends DescribeApplicationStateResult, __MetadataBearer {}

/**
 * <p>Gets the migration status of an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DescribeApplicationStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DescribeApplicationStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // DescribeApplicationStateRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationStateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationStateResult
 * //   ApplicationStatus: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED",
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeApplicationStateCommandInput - {@link DescribeApplicationStateCommandInput}
 * @returns {@link DescribeApplicationStateCommandOutput}
 * @see {@link DescribeApplicationStateCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @throws {@link PolicyErrorException} (client fault)
 *  <p>Exception raised when there are problems accessing Application Discovery Service
 *          (Application Discovery Service); most likely due to a misconfigured policy or the
 *             <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
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
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 *
 * @public
 */
export class DescribeApplicationStateCommand extends command<DescribeApplicationStateCommandInput, DescribeApplicationStateCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplicationState",
  DescribeApplicationState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationStateRequest;
      output: DescribeApplicationStateResult;
    };
    sdk: {
      input: DescribeApplicationStateCommandInput;
      output: DescribeApplicationStateCommandOutput;
    };
  };
}
