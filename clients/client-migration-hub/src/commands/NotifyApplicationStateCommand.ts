// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { NotifyApplicationStateRequest, NotifyApplicationStateResult } from "../models/models_0";
import { de_NotifyApplicationStateCommand, se_NotifyApplicationStateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NotifyApplicationStateCommand}.
 */
export interface NotifyApplicationStateCommandInput extends NotifyApplicationStateRequest {}
/**
 * @public
 *
 * The output of {@link NotifyApplicationStateCommand}.
 */
export interface NotifyApplicationStateCommandOutput extends NotifyApplicationStateResult, __MetadataBearer {}

/**
 * <p>Sets the migration state of an application. For a given application identified by the
 *          value passed to <code>ApplicationId</code>, its status is set or updated by passing one of
 *          three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS |
 *          COMPLETED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyApplicationStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyApplicationStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const input = { // NotifyApplicationStateRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED", // required
 *   UpdateDateTime: new Date("TIMESTAMP"),
 *   DryRun: true || false,
 * };
 * const command = new NotifyApplicationStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyApplicationStateCommandInput - {@link NotifyApplicationStateCommandInput}
 * @returns {@link NotifyApplicationStateCommandOutput}
 * @see {@link NotifyApplicationStateCommandInput} for command's `input` shape.
 * @see {@link NotifyApplicationStateCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code>
 *          flag is set to "true".</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 * @public
 */
export class NotifyApplicationStateCommand extends $Command
  .classBuilder<
    NotifyApplicationStateCommandInput,
    NotifyApplicationStateCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHub", "NotifyApplicationState", {})
  .n("MigrationHubClient", "NotifyApplicationStateCommand")
  .f(void 0, void 0)
  .ser(se_NotifyApplicationStateCommand)
  .de(de_NotifyApplicationStateCommand)
  .build() {}
