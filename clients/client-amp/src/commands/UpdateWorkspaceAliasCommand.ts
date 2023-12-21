// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkspaceAliasRequest } from "../models/models_0";
import { de_UpdateWorkspaceAliasCommand, se_UpdateWorkspaceAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceAliasCommand}.
 */
export interface UpdateWorkspaceAliasCommandInput extends UpdateWorkspaceAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceAliasCommand}.
 */
export interface UpdateWorkspaceAliasCommandOutput extends __MetadataBearer {}

/**
 * @public
 * Updates an AMP workspace alias.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateWorkspaceAliasCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateWorkspaceAliasCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // UpdateWorkspaceAliasRequest
 *   workspaceId: "STRING_VALUE", // required
 *   alias: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspaceAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceAliasCommandInput - {@link UpdateWorkspaceAliasCommandInput}
 * @returns {@link UpdateWorkspaceAliasCommandOutput}
 * @see {@link UpdateWorkspaceAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceAliasCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 */
export class UpdateWorkspaceAliasCommand extends $Command
  .classBuilder<
    UpdateWorkspaceAliasCommandInput,
    UpdateWorkspaceAliasCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AmpClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "UpdateWorkspaceAlias", {})
  .n("AmpClient", "UpdateWorkspaceAliasCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkspaceAliasCommand)
  .de(de_UpdateWorkspaceAliasCommand)
  .build() {}
