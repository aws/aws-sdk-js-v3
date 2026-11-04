// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UnshareDirectoryRequest, UnshareDirectoryResult } from "../models/models_0";
import { UnshareDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops the directory sharing between the directory owner and consumer accounts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UnshareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UnshareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
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
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryNotSharedException} (client fault)
 *
 * The specified directory has not been shared with this Amazon Web Services account.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidTargetException} (client fault)
 *
 * The specified shared target is not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class UnshareDirectoryCommand extends command<UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "UnshareDirectory",
  UnshareDirectory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnshareDirectoryRequest;
      output: UnshareDirectoryResult;
    };
    sdk: {
      input: UnshareDirectoryCommandInput;
      output: UnshareDirectoryCommandOutput;
    };
  };
}
