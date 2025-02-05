// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import {
  CreateWorkspaceServiceAccountTokenRequest,
  CreateWorkspaceServiceAccountTokenResponse,
  CreateWorkspaceServiceAccountTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateWorkspaceServiceAccountTokenCommand,
  se_CreateWorkspaceServiceAccountTokenCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceServiceAccountTokenCommand}.
 */
export interface CreateWorkspaceServiceAccountTokenCommandInput extends CreateWorkspaceServiceAccountTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceServiceAccountTokenCommand}.
 */
export interface CreateWorkspaceServiceAccountTokenCommandOutput
  extends CreateWorkspaceServiceAccountTokenResponse,
    __MetadataBearer {}

/**
 * <p>Creates a token that can be used to authenticate and authorize Grafana HTTP API
 *             operations for the given <a href="https://docs.aws.amazon.com/grafana/latest/userguide/service-accounts.html">workspace service
 *             account</a>. The service account acts as a user for the API operations, and
 *             defines the permissions that are used by the API.</p>
 *          <important>
 *             <p>When you create the service account token, you will receive a key that is used
 *                 when calling Grafana APIs. Do not lose this key, as it will not be retrievable
 *                 again.</p>
 *             <p>If you do lose the key, you can delete the token and recreate it to receive a
 *                 new key. This will disable the initial key.</p>
 *          </important>
 *          <p>Service accounts are only available for workspaces that are compatible with Grafana
 *             version 9 and above.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, CreateWorkspaceServiceAccountTokenCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, CreateWorkspaceServiceAccountTokenCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GrafanaClient(config);
 * const input = { // CreateWorkspaceServiceAccountTokenRequest
 *   name: "STRING_VALUE", // required
 *   secondsToLive: Number("int"), // required
 *   serviceAccountId: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new CreateWorkspaceServiceAccountTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceServiceAccountTokenResponse
 * //   serviceAccountToken: { // ServiceAccountTokenSummaryWithKey
 * //     id: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     key: "STRING_VALUE", // required
 * //   },
 * //   serviceAccountId: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceServiceAccountTokenCommandInput - {@link CreateWorkspaceServiceAccountTokenCommandInput}
 * @returns {@link CreateWorkspaceServiceAccountTokenCommandOutput}
 * @see {@link CreateWorkspaceServiceAccountTokenCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceServiceAccountTokenCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateWorkspaceServiceAccountTokenCommand extends $Command
  .classBuilder<
    CreateWorkspaceServiceAccountTokenCommandInput,
    CreateWorkspaceServiceAccountTokenCommandOutput,
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
  .s("AWSGrafanaControlPlane", "CreateWorkspaceServiceAccountToken", {})
  .n("GrafanaClient", "CreateWorkspaceServiceAccountTokenCommand")
  .f(void 0, CreateWorkspaceServiceAccountTokenResponseFilterSensitiveLog)
  .ser(se_CreateWorkspaceServiceAccountTokenCommand)
  .de(de_CreateWorkspaceServiceAccountTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceServiceAccountTokenRequest;
      output: CreateWorkspaceServiceAccountTokenResponse;
    };
    sdk: {
      input: CreateWorkspaceServiceAccountTokenCommandInput;
      output: CreateWorkspaceServiceAccountTokenCommandOutput;
    };
  };
}
