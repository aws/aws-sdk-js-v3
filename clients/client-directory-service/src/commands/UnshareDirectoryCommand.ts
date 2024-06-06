// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnshareDirectoryRequest, UnshareDirectoryResult } from "../models/models_0";
import { de_UnshareDirectoryCommand, se_UnshareDirectoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnshareDirectoryCommand}.
 */
export interface UnshareDirectoryCommandInput extends UnshareDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link UnshareDirectoryCommand}.
 */
export interface UnshareDirectoryCommandOutput extends UnshareDirectoryResult, __MetadataBearer {}

/**
 * <p>Stops the directory sharing between the directory owner and consumer accounts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UnshareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UnshareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // UnshareDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UnshareTarget: { // UnshareTarget
 *     Id: "STRING_VALUE", // required
 *     Type: "ACCOUNT", // required
 *   },
 * };
 * const command = new UnshareDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // UnshareDirectoryResult
 * //   SharedDirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UnshareDirectoryCommandInput - {@link UnshareDirectoryCommandInput}
 * @returns {@link UnshareDirectoryCommandOutput}
 * @see {@link UnshareDirectoryCommandInput} for command's `input` shape.
 * @see {@link UnshareDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryNotSharedException} (client fault)
 *  <p>The specified directory has not been shared with this Amazon Web Services account.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The specified shared target is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 * @public
 */
export class UnshareDirectoryCommand extends $Command
  .classBuilder<
    UnshareDirectoryCommandInput,
    UnshareDirectoryCommandOutput,
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
  .s("DirectoryService_20150416", "UnshareDirectory", {})
  .n("DirectoryServiceClient", "UnshareDirectoryCommand")
  .f(void 0, void 0)
  .ser(se_UnshareDirectoryCommand)
  .de(de_UnshareDirectoryCommand)
  .build() {}
