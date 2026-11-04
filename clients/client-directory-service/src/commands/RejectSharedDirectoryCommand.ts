// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectSharedDirectoryRequest, RejectSharedDirectoryResult } from "../models/models_0";
import { RejectSharedDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Rejects a directory sharing request that was sent from the directory owner account.
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryAlreadySharedException} (client fault)
 *
 * The specified directory has already been shared with this Amazon Web Services account.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
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
export class RejectSharedDirectoryCommand extends command<RejectSharedDirectoryCommandInput, RejectSharedDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "RejectSharedDirectory",
  RejectSharedDirectory$
) {
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
