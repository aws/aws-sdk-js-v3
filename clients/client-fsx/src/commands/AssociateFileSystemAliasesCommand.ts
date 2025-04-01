// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { AssociateFileSystemAliasesRequest, AssociateFileSystemAliasesResponse } from "../models/models_0";
import { de_AssociateFileSystemAliasesCommand, se_AssociateFileSystemAliasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateFileSystemAliasesCommand}.
 */
export interface AssociateFileSystemAliasesCommandInput extends AssociateFileSystemAliasesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFileSystemAliasesCommand}.
 */
export interface AssociateFileSystemAliasesCommandOutput extends AssociateFileSystemAliasesResponse, __MetadataBearer {}

/**
 * <p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system.
 *         A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to
 *         associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request.
 *         For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including
 *              additional steps you must take to be able to access your file system using a DNS alias.</p>
 *          <p>The system response shows the DNS aliases that
 *             Amazon FSx is attempting to associate with the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             associating with the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, AssociateFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, AssociateFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // AssociateFileSystemAliasesRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 *   Aliases: [ // AlternateDNSNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFileSystemAliasesResponse
 * //   Aliases: [ // Aliases
 * //     { // Alias
 * //       Name: "STRING_VALUE",
 * //       Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateFileSystemAliasesCommandInput - {@link AssociateFileSystemAliasesCommandInput}
 * @returns {@link AssociateFileSystemAliasesCommandOutput}
 * @see {@link AssociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link AssociateFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class AssociateFileSystemAliasesCommand extends $Command
  .classBuilder<
    AssociateFileSystemAliasesCommandInput,
    AssociateFileSystemAliasesCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "AssociateFileSystemAliases", {})
  .n("FSxClient", "AssociateFileSystemAliasesCommand")
  .f(void 0, void 0)
  .ser(se_AssociateFileSystemAliasesCommand)
  .de(de_AssociateFileSystemAliasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFileSystemAliasesRequest;
      output: AssociateFileSystemAliasesResponse;
    };
    sdk: {
      input: AssociateFileSystemAliasesCommandInput;
      output: AssociateFileSystemAliasesCommandOutput;
    };
  };
}
