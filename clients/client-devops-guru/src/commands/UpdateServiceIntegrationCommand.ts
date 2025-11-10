// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServiceIntegrationRequest, UpdateServiceIntegrationResponse } from "../models/models_0";
import { UpdateServiceIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceIntegrationCommand}.
 */
export interface UpdateServiceIntegrationCommandInput extends UpdateServiceIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceIntegrationCommand}.
 */
export interface UpdateServiceIntegrationCommandOutput extends UpdateServiceIntegrationResponse, __MetadataBearer {}

/**
 * <p> Enables or disables integration with a service that can be integrated with DevOps Guru. The
 * 			one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create
 * 			an OpsItem for each generated insight. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // UpdateServiceIntegrationRequest
 *   ServiceIntegration: { // UpdateServiceIntegrationConfig
 *     OpsCenter: { // OpsCenterIntegrationConfig
 *       OptInStatus: "ENABLED" || "DISABLED",
 *     },
 *     LogsAnomalyDetection: { // LogsAnomalyDetectionIntegrationConfig
 *       OptInStatus: "ENABLED" || "DISABLED",
 *     },
 *     KMSServerSideEncryption: { // KMSServerSideEncryptionIntegrationConfig
 *       KMSKeyId: "STRING_VALUE",
 *       OptInStatus: "ENABLED" || "DISABLED",
 *       Type: "CUSTOMER_MANAGED_KEY" || "AWS_OWNED_KMS_KEY",
 *     },
 *   },
 * };
 * const command = new UpdateServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateServiceIntegrationCommandInput - {@link UpdateServiceIntegrationCommandInput}
 * @returns {@link UpdateServiceIntegrationCommandOutput}
 * @see {@link UpdateServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> An exception that is thrown when a conflict occurs. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class UpdateServiceIntegrationCommand extends $Command
  .classBuilder<
    UpdateServiceIntegrationCommandInput,
    UpdateServiceIntegrationCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "UpdateServiceIntegration", {})
  .n("DevOpsGuruClient", "UpdateServiceIntegrationCommand")
  .sc(UpdateServiceIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceIntegrationRequest;
      output: {};
    };
    sdk: {
      input: UpdateServiceIntegrationCommandInput;
      output: UpdateServiceIntegrationCommandOutput;
    };
  };
}
