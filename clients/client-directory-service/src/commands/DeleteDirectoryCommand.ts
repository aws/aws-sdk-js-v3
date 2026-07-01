// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDirectoryRequest, DeleteDirectoryResult } from "../models/models_0";
import { DeleteDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDirectoryCommand}.
 */
export interface DeleteDirectoryCommandInput extends DeleteDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectoryCommand}.
 */
export interface DeleteDirectoryCommandOutput extends DeleteDirectoryResult, __MetadataBearer {}

/**
 * <p>Deletes an Directory Service directory.</p>
 *          <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeleteDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDirectoryResult
 * //   DirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDirectoryCommandInput - {@link DeleteDirectoryCommandInput}
 * @returns {@link DeleteDirectoryCommandOutput}
 * @see {@link DeleteDirectoryCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To delete a directory
 * ```javascript
 * // The following example deletes a directory from your AWS account.
 * const input = {
 *   DirectoryId: "d-92654abfed"
 * };
 * const command = new DeleteDirectoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DirectoryId: "d-92654abfed"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDirectoryCommand extends command<DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDirectory",
  DeleteDirectory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectoryRequest;
      output: DeleteDirectoryResult;
    };
    sdk: {
      input: DeleteDirectoryCommandInput;
      output: DeleteDirectoryCommandOutput;
    };
  };
}
