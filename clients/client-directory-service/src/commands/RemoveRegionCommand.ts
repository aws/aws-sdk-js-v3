// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveRegionRequest, RemoveRegionResult } from "../models/models_0";
import { de_RemoveRegionCommand, se_RemoveRegionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveRegionCommand}.
 */
export interface RemoveRegionCommandInput extends RemoveRegionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveRegionCommand}.
 */
export interface RemoveRegionCommandOutput extends RemoveRegionResult, __MetadataBearer {}

/**
 * <p>Stops all replication and removes the domain controllers from the specified Region. You
 *       cannot remove the primary Region with this operation. Instead, use the
 *         <code>DeleteDirectory</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RemoveRegionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RemoveRegionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // RemoveRegionRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new RemoveRegionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveRegionCommandInput - {@link RemoveRegionCommandInput}
 * @returns {@link RemoveRegionCommandOutput}
 * @see {@link RemoveRegionCommandInput} for command's `input` shape.
 * @see {@link RemoveRegionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class RemoveRegionCommand extends $Command
  .classBuilder<
    RemoveRegionCommandInput,
    RemoveRegionCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "RemoveRegion", {})
  .n("DirectoryServiceClient", "RemoveRegionCommand")
  .f(void 0, void 0)
  .ser(se_RemoveRegionCommand)
  .de(de_RemoveRegionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveRegionRequest;
      output: {};
    };
    sdk: {
      input: RemoveRegionCommandInput;
      output: RemoveRegionCommandOutput;
    };
  };
}
