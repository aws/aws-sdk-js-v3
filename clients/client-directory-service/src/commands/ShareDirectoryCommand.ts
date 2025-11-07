// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ShareDirectoryRequest, ShareDirectoryResult } from "../models/models_0";
import { ShareDirectory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory
 *       owner) with another Amazon Web Services account (directory consumer). With this operation you can use your
 *       directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p>
 *          <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the
 *       directory consumer account. This shared directory contains the metadata to provide access to
 *       the directory within the directory owner account. The shared directory is visible in all VPCs
 *       in the directory consumer account.</p>
 *          <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be
 *       shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>).
 *       It also determines whether you can share the directory with any other Amazon Web Services account either
 *       inside or outside of the organization (<code>HANDSHAKE</code>).</p>
 *          <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called,
 *       which sends a directory sharing request to the directory consumer. </p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The specified shared target is not valid.</p>
 *
 * @throws {@link OrganizationsException} (client fault)
 *  <p>Exception encountered while trying to access your Amazon Web Services organization.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link ShareLimitExceededException} (client fault)
 *  <p>The maximum number of Amazon Web Services accounts that you can share with this directory has been
 *             reached.</p>
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
export class ShareDirectoryCommand extends $Command
  .classBuilder<
    ShareDirectoryCommandInput,
    ShareDirectoryCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "ShareDirectory", {})
  .n("DirectoryServiceClient", "ShareDirectoryCommand")
  .sc(ShareDirectory)
  .build() {
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
