// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { CreateWorkspaceServiceAccountRequest, CreateWorkspaceServiceAccountResponse } from "../models/models_0";
import {
  de_CreateWorkspaceServiceAccountCommand,
  se_CreateWorkspaceServiceAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceServiceAccountCommand}.
 */
export interface CreateWorkspaceServiceAccountCommandInput extends CreateWorkspaceServiceAccountRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceServiceAccountCommand}.
 */
export interface CreateWorkspaceServiceAccountCommandOutput
  extends CreateWorkspaceServiceAccountResponse,
    __MetadataBearer {}

/**
 * <p>Creates a service account for the workspace. A service account can be used to call
 *             Grafana HTTP APIs, and run automated workloads. After creating the service account with
 *             the correct <code>GrafanaRole</code> for your use case, use
 *             <code>CreateWorkspaceServiceAccountToken</code> to create a token that can be used to
 *             authenticate and authorize Grafana HTTP API calls.</p>
 *          <p>You can only create service accounts for workspaces that are compatible with Grafana
 *             version 9 and above.</p>
 *          <note>
 *             <p>For more information about service accounts, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/service-accounts.html">Service accounts</a> in
 *                 the <i>Amazon Managed Grafana User Guide</i>.</p>
 *             <p>For more information about the Grafana HTTP APIs, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">Using Grafana HTTP
 *                 APIs</a> in the <i>Amazon Managed Grafana User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, CreateWorkspaceServiceAccountCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, CreateWorkspaceServiceAccountCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // CreateWorkspaceServiceAccountRequest
 *   name: "STRING_VALUE", // required
 *   grafanaRole: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new CreateWorkspaceServiceAccountCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceServiceAccountResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   grafanaRole: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceServiceAccountCommandInput - {@link CreateWorkspaceServiceAccountCommandInput}
 * @returns {@link CreateWorkspaceServiceAccountCommandOutput}
 * @see {@link CreateWorkspaceServiceAccountCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceServiceAccountCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 *
 * @public
 */
export class CreateWorkspaceServiceAccountCommand extends $Command
  .classBuilder<
    CreateWorkspaceServiceAccountCommandInput,
    CreateWorkspaceServiceAccountCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGrafanaControlPlane", "CreateWorkspaceServiceAccount", {})
  .n("GrafanaClient", "CreateWorkspaceServiceAccountCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkspaceServiceAccountCommand)
  .de(de_CreateWorkspaceServiceAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceServiceAccountRequest;
      output: CreateWorkspaceServiceAccountResponse;
    };
    sdk: {
      input: CreateWorkspaceServiceAccountCommandInput;
      output: CreateWorkspaceServiceAccountCommandOutput;
    };
  };
}
