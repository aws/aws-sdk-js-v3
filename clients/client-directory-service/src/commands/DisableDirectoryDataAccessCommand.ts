// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableDirectoryDataAccessRequest, DisableDirectoryDataAccessResult } from "../models/models_0";
import { de_DisableDirectoryDataAccessCommand, se_DisableDirectoryDataAccessCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableDirectoryDataAccessCommand}.
 */
export interface DisableDirectoryDataAccessCommandInput extends DisableDirectoryDataAccessRequest {}
/**
 * @public
 *
 * The output of {@link DisableDirectoryDataAccessCommand}.
 */
export interface DisableDirectoryDataAccessCommandOutput extends DisableDirectoryDataAccessResult, __MetadataBearer {}

/**
 * <p>Deactivates access to directory data via the Directory Service Data API for the specified
 *       directory. For
 *       more information, see <a href="https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/Welcome.html">Directory Service Data API Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableDirectoryDataAccessCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableDirectoryDataAccessCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DisableDirectoryDataAccessRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DisableDirectoryDataAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableDirectoryDataAccessCommandInput - {@link DisableDirectoryDataAccessCommandInput}
 * @returns {@link DisableDirectoryDataAccessCommandOutput}
 * @see {@link DisableDirectoryDataAccessCommandInput} for command's `input` shape.
 * @see {@link DisableDirectoryDataAccessCommandOutput} for command's `response` shape.
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
 * @throws {@link DirectoryInDesiredStateException} (client fault)
 *  <p> The directory is already updated to desired update type settings. </p>
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
export class DisableDirectoryDataAccessCommand extends $Command
  .classBuilder<
    DisableDirectoryDataAccessCommandInput,
    DisableDirectoryDataAccessCommandOutput,
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
  .s("DirectoryService_20150416", "DisableDirectoryDataAccess", {})
  .n("DirectoryServiceClient", "DisableDirectoryDataAccessCommand")
  .f(void 0, void 0)
  .ser(se_DisableDirectoryDataAccessCommand)
  .de(de_DisableDirectoryDataAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableDirectoryDataAccessRequest;
      output: {};
    };
    sdk: {
      input: DisableDirectoryDataAccessCommandInput;
      output: DisableDirectoryDataAccessCommandOutput;
    };
  };
}
