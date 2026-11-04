// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableDirectoryDataAccessRequest, DisableDirectoryDataAccessResult } from "../models/models_0";
import { DisableDirectoryDataAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deactivates access to directory data via the Directory Service Data API for the specified directory. For more information, see [Directory Service Data API Reference](https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/Welcome.html).
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link DirectoryInDesiredStateException} (client fault)
 *
 * The directory is already updated to desired update type settings.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class DisableDirectoryDataAccessCommand extends command<DisableDirectoryDataAccessCommandInput, DisableDirectoryDataAccessCommandOutput>(
  _ep0,
  _mw0,
  "DisableDirectoryDataAccess",
  DisableDirectoryDataAccess$
) {
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
