// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDirectorySetupRequest, UpdateDirectorySetupResult } from "../models/models_0";
import { UpdateDirectorySetup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDirectorySetupCommand}.
 */
export interface UpdateDirectorySetupCommandInput extends UpdateDirectorySetupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectorySetupCommand}.
 */
export interface UpdateDirectorySetupCommandOutput extends UpdateDirectorySetupResult, __MetadataBearer {}

/**
 * Updates directory configuration for the specified update type.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateDirectorySetupCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateDirectorySetupCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateDirectorySetupRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UpdateType: "OS" || "NETWORK" || "SIZE", // required
 *   OSUpdateSettings: { // OSUpdateSettings
 *     OSVersion: "SERVER_2012" || "SERVER_2019",
 *   },
 *   DirectorySizeUpdateSettings: { // DirectorySizeUpdateSettings
 *     DirectorySize: "Small" || "Large",
 *   },
 *   NetworkUpdateSettings: { // NetworkUpdateSettings
 *     NetworkType: "Dual-stack" || "IPv4" || "IPv6",
 *     CustomerDnsIpsV6: [ // DnsIpv6Addrs
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CreateSnapshotBeforeUpdate: true || false,
 * };
 * const command = new UpdateDirectorySetupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDirectorySetupCommandInput - {@link UpdateDirectorySetupCommandInput}
 * @returns {@link UpdateDirectorySetupCommandOutput}
 * @see {@link UpdateDirectorySetupCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectorySetupCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link SnapshotLimitExceededException} (client fault)
 *
 * The maximum number of manual snapshots for the directory has been reached. You can use the GetSnapshotLimits operation to determine the snapshot limits for a directory.
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
export class UpdateDirectorySetupCommand extends command<UpdateDirectorySetupCommandInput, UpdateDirectorySetupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDirectorySetup",
  UpdateDirectorySetup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDirectorySetupRequest;
      output: {};
    };
    sdk: {
      input: UpdateDirectorySetupCommandInput;
      output: UpdateDirectorySetupCommandOutput;
    };
  };
}
