// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDirectoryDataAccessRequest, DescribeDirectoryDataAccessResult } from "../models/models_0";
import { DescribeDirectoryDataAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDirectoryDataAccessCommand}.
 */
export interface DescribeDirectoryDataAccessCommandInput extends DescribeDirectoryDataAccessRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectoryDataAccessCommand}.
 */
export interface DescribeDirectoryDataAccessCommandOutput extends DescribeDirectoryDataAccessResult, __MetadataBearer {}

/**
 * Obtains status of directory data access enablement through the Directory Service Data API for the specified directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeDirectoryDataAccessCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeDirectoryDataAccessCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeDirectoryDataAccessRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDirectoryDataAccessCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectoryDataAccessResult
 * //   DataAccessStatus: "Disabled" || "Disabling" || "Enabled" || "Enabling" || "Failed",
 * // };
 *
 * ```
 *
 * @param DescribeDirectoryDataAccessCommandInput - {@link DescribeDirectoryDataAccessCommandInput}
 * @returns {@link DescribeDirectoryDataAccessCommandOutput}
 * @see {@link DescribeDirectoryDataAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectoryDataAccessCommandOutput} for command's `response` shape.
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
export class DescribeDirectoryDataAccessCommand extends command<DescribeDirectoryDataAccessCommandInput, DescribeDirectoryDataAccessCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDirectoryDataAccess",
  DescribeDirectoryDataAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDirectoryDataAccessRequest;
      output: DescribeDirectoryDataAccessResult;
    };
    sdk: {
      input: DescribeDirectoryDataAccessCommandInput;
      output: DescribeDirectoryDataAccessCommandOutput;
    };
  };
}
