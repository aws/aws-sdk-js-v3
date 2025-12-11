// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RejectSharedDirectoryRequest, RejectSharedDirectoryResult } from "../models/models_0";
import { RejectSharedDirectory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectSharedDirectoryCommand}.
 */
export interface RejectSharedDirectoryCommandInput extends RejectSharedDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link RejectSharedDirectoryCommand}.
 */
export interface RejectSharedDirectoryCommandOutput extends RejectSharedDirectoryResult, __MetadataBearer {}

/**
 * <p>Rejects a directory sharing request that was sent from the directory owner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RejectSharedDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RejectSharedDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // RejectSharedDirectoryRequest
 *   SharedDirectoryId: "STRING_VALUE", // required
 * };
 * const command = new RejectSharedDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // RejectSharedDirectoryResult
 * //   SharedDirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RejectSharedDirectoryCommandInput - {@link RejectSharedDirectoryCommandInput}
 * @returns {@link RejectSharedDirectoryCommandOutput}
 * @see {@link RejectSharedDirectoryCommandInput} for command's `input` shape.
 * @see {@link RejectSharedDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryAlreadySharedException} (client fault)
 *  <p>The specified directory has already been shared with this Amazon Web Services account.</p>
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
 *
 * @public
 */
export class RejectSharedDirectoryCommand extends $Command
  .classBuilder<
    RejectSharedDirectoryCommandInput,
    RejectSharedDirectoryCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "RejectSharedDirectory", {})
  .n("DirectoryServiceClient", "RejectSharedDirectoryCommand")
  .sc(RejectSharedDirectory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectSharedDirectoryRequest;
      output: RejectSharedDirectoryResult;
    };
    sdk: {
      input: RejectSharedDirectoryCommandInput;
      output: RejectSharedDirectoryCommandOutput;
    };
  };
}
