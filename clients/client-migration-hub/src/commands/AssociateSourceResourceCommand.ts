// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { AssociateSourceResourceRequest, AssociateSourceResourceResult } from "../models/models_0";
import { de_AssociateSourceResourceCommand, se_AssociateSourceResourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSourceResourceCommand}.
 */
export interface AssociateSourceResourceCommandInput extends AssociateSourceResourceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSourceResourceCommand}.
 */
export interface AssociateSourceResourceCommandOutput extends AssociateSourceResourceResult, __MetadataBearer {}

/**
 * <p>Associates a source resource with a migration task. For example, the source resource can
 *          be a source server, an application, or a migration wave.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateSourceResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, AssociateSourceResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MigrationHubClient(config);
 * const input = { // AssociateSourceResourceRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   SourceResource: { // SourceResource
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     StatusDetail: "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new AssociateSourceResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSourceResourceCommandInput - {@link AssociateSourceResourceCommandInput}
 * @returns {@link AssociateSourceResourceCommandOutput}
 * @see {@link AssociateSourceResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateSourceResourceCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DryRunOperation} (client fault)
 *  <p>Exception raised to indicate a successfully authorized action when the
 *             <code>DryRun</code> flag is set to "true".</p>
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
 * @public
 */
export class AssociateSourceResourceCommand extends $Command
  .classBuilder<
    AssociateSourceResourceCommandInput,
    AssociateSourceResourceCommandOutput,
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
  .s("AWSMigrationHub", "AssociateSourceResource", {})
  .n("MigrationHubClient", "AssociateSourceResourceCommand")
  .f(void 0, void 0)
  .ser(se_AssociateSourceResourceCommand)
  .de(de_AssociateSourceResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSourceResourceRequest;
      output: {};
    };
    sdk: {
      input: AssociateSourceResourceCommandInput;
      output: AssociateSourceResourceCommandOutput;
    };
  };
}
