// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DisassociateFileSystemAliasesRequest, DisassociateFileSystemAliasesResponse } from "../models/models_0";
import {
  de_DisassociateFileSystemAliasesCommand,
  se_DisassociateFileSystemAliasesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFileSystemAliasesCommand}.
 */
export interface DisassociateFileSystemAliasesCommandInput extends DisassociateFileSystemAliasesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFileSystemAliasesCommand}.
 */
export interface DisassociateFileSystemAliasesCommandOutput
  extends DisassociateFileSystemAliasesResponse,
    __MetadataBearer {}

/**
 * <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases
 *             from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not
 *             associated with the file system, Amazon FSx responds with an HTTP status code 400 (Bad Request). For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p>
 *          <p>The system generated response showing the DNS aliases that
 *             Amazon FSx is attempting to disassociate from the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             disassociating with the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DisassociateFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DisassociateFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FSxClient(config);
 * const input = { // DisassociateFileSystemAliasesRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 *   Aliases: [ // AlternateDNSNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateFileSystemAliasesResponse
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
 * @param DisassociateFileSystemAliasesCommandInput - {@link DisassociateFileSystemAliasesCommandInput}
 * @returns {@link DisassociateFileSystemAliasesCommandOutput}
 * @see {@link DisassociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link DisassociateFileSystemAliasesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateFileSystemAliasesCommand extends $Command
  .classBuilder<
    DisassociateFileSystemAliasesCommandInput,
    DisassociateFileSystemAliasesCommandOutput,
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
  .s("AWSSimbaAPIService_v20180301", "DisassociateFileSystemAliases", {})
  .n("FSxClient", "DisassociateFileSystemAliasesCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateFileSystemAliasesCommand)
  .de(de_DisassociateFileSystemAliasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFileSystemAliasesRequest;
      output: DisassociateFileSystemAliasesResponse;
    };
    sdk: {
      input: DisassociateFileSystemAliasesCommandInput;
      output: DisassociateFileSystemAliasesCommandOutput;
    };
  };
}
