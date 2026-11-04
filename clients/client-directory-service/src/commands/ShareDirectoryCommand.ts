// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ShareDirectoryRequest, ShareDirectoryResult } from "../models/models_0";
import { ShareDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ShareDirectoryCommand}.
 */
export interface ShareDirectoryCommandInput extends ShareDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link ShareDirectoryCommand}.
 */
export interface ShareDirectoryCommandOutput extends ShareDirectoryResult, __MetadataBearer {}

/**
 * Shares a specified directory (`DirectoryId`) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.
 *
 * When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.
 *
 * The `ShareMethod` parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (`ORGANIZATIONS`). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (`HANDSHAKE`).
 *
 * The `ShareNotes` parameter is only used when `HANDSHAKE` is called, which sends a directory sharing request to the directory consumer.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ShareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ShareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ShareDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   ShareNotes: "STRING_VALUE",
 *   ShareTarget: { // ShareTarget
 *     Id: "STRING_VALUE", // required
 *     Type: "ACCOUNT", // required
 *   },
 *   ShareMethod: "ORGANIZATIONS" || "HANDSHAKE", // required
 * };
 * const command = new ShareDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // ShareDirectoryResult
 * //   SharedDirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ShareDirectoryCommandInput - {@link ShareDirectoryCommandInput}
 * @returns {@link ShareDirectoryCommandOutput}
 * @see {@link ShareDirectoryCommandInput} for command's `input` shape.
 * @see {@link ShareDirectoryCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTargetException} (client fault)
 *
 * The specified shared target is not valid.
 *
 * @throws {@link OrganizationsException} (client fault)
 *
 * Exception encountered while trying to access your Amazon Web Services organization.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link ShareLimitExceededException} (client fault)
 *
 * The maximum number of Amazon Web Services accounts that you can share with this directory has been reached.
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
export class ShareDirectoryCommand extends command<ShareDirectoryCommandInput, ShareDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "ShareDirectory",
  ShareDirectory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ShareDirectoryRequest;
      output: ShareDirectoryResult;
    };
    sdk: {
      input: ShareDirectoryCommandInput;
      output: ShareDirectoryCommandOutput;
    };
  };
}
