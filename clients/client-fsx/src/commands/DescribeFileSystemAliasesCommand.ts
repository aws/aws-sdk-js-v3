// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeFileSystemAliasesRequest, DescribeFileSystemAliasesResponse } from "../models/models_0";
import { DescribeFileSystemAliases } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFileSystemAliasesCommand}.
 */
export interface DescribeFileSystemAliasesCommandInput extends DescribeFileSystemAliasesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFileSystemAliasesCommand}.
 */
export interface DescribeFileSystemAliasesCommandOutput extends DescribeFileSystemAliasesResponse, __MetadataBearer {}

/**
 * <p>Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of
 *             all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a>
 *         provided in the <a>DescribeFileSystems</a> operation response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeFileSystemAliasesRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFileSystemAliasesResponse
 * //   Aliases: [ // Aliases
 * //     { // Alias
 * //       Name: "STRING_VALUE",
 * //       Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFileSystemAliasesCommandInput - {@link DescribeFileSystemAliasesCommandInput}
 * @returns {@link DescribeFileSystemAliasesCommandOutput}
 * @see {@link DescribeFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemAliasesCommandOutput} for command's `response` shape.
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
export class DescribeFileSystemAliasesCommand extends $Command
  .classBuilder<
    DescribeFileSystemAliasesCommandInput,
    DescribeFileSystemAliasesCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSimbaAPIService_v20180301", "DescribeFileSystemAliases", {})
  .n("FSxClient", "DescribeFileSystemAliasesCommand")
  .sc(DescribeFileSystemAliases)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFileSystemAliasesRequest;
      output: DescribeFileSystemAliasesResponse;
    };
    sdk: {
      input: DescribeFileSystemAliasesCommandInput;
      output: DescribeFileSystemAliasesCommandOutput;
    };
  };
}
