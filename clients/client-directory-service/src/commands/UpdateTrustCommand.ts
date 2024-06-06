// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTrustRequest, UpdateTrustResult } from "../models/models_0";
import { de_UpdateTrustCommand, se_UpdateTrustCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrustCommand}.
 */
export interface UpdateTrustCommandInput extends UpdateTrustRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrustCommand}.
 */
export interface UpdateTrustCommandOutput extends UpdateTrustResult, __MetadataBearer {}

/**
 * <p>Updates the trust that has been set up between your Managed Microsoft AD directory and an
 *       self-managed Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateTrustRequest
 *   TrustId: "STRING_VALUE", // required
 *   SelectiveAuth: "Enabled" || "Disabled",
 * };
 * const command = new UpdateTrustCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrustResult
 * //   RequestId: "STRING_VALUE",
 * //   TrustId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTrustCommandInput - {@link UpdateTrustCommandInput}
 * @returns {@link UpdateTrustCommandOutput}
 * @see {@link UpdateTrustCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 * @public
 */
export class UpdateTrustCommand extends $Command
  .classBuilder<
    UpdateTrustCommandInput,
    UpdateTrustCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "UpdateTrust", {})
  .n("DirectoryServiceClient", "UpdateTrustCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTrustCommand)
  .de(de_UpdateTrustCommand)
  .build() {}
