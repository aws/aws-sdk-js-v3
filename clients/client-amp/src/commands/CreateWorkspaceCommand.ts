// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkspaceRequest, CreateWorkspaceResponse } from "../models/models_0";
import { de_CreateWorkspaceCommand, se_CreateWorkspaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceCommand}.
 */
export interface CreateWorkspaceCommandInput extends CreateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceCommand}.
 */
export interface CreateWorkspaceCommandOutput extends CreateWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Creates a Prometheus workspace. A workspace is a logical space dedicated to the
 *             storage and querying of Prometheus metrics. You can have one or more workspaces in each
 *             Region in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateWorkspaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateWorkspaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // CreateWorkspaceRequest
 *   alias: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 * };
 * const command = new CreateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceResponse
 * //   workspaceId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: { // WorkspaceStatus
 * //     statusCode: "STRING_VALUE", // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   kmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceCommandInput - {@link CreateWorkspaceCommandInput}
 * @returns {@link CreateWorkspaceCommandOutput}
 * @see {@link CreateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Completing the request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *             service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class CreateWorkspaceCommand extends $Command
  .classBuilder<
    CreateWorkspaceCommandInput,
    CreateWorkspaceCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "CreateWorkspace", {})
  .n("AmpClient", "CreateWorkspaceCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkspaceCommand)
  .de(de_CreateWorkspaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceRequest;
      output: CreateWorkspaceResponse;
    };
    sdk: {
      input: CreateWorkspaceCommandInput;
      output: CreateWorkspaceCommandOutput;
    };
  };
}
