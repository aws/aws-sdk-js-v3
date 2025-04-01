// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DescribeMigrationTaskRequest, DescribeMigrationTaskResult } from "../models/models_0";
import { de_DescribeMigrationTaskCommand, se_DescribeMigrationTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a list of all attributes associated with a specific migration task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DescribeMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DescribeMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
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
export class DescribeMigrationTaskCommand extends $Command
  .classBuilder<
    DescribeMigrationTaskCommandInput,
    DescribeMigrationTaskCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHub", "DescribeMigrationTask", {})
  .n("MigrationHubClient", "DescribeMigrationTaskCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMigrationTaskCommand)
  .de(de_DescribeMigrationTaskCommand)
  .build() {
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
