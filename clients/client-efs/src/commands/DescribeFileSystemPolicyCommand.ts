// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFileSystemPolicyRequest, FileSystemPolicyDescription } from "../models/models_0";
import { de_DescribeFileSystemPolicyCommand, se_DescribeFileSystemPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFileSystemPolicyCommand}.
 */
export interface DescribeFileSystemPolicyCommandInput extends DescribeFileSystemPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFileSystemPolicyCommand}.
 */
export interface DescribeFileSystemPolicyCommandOutput extends FileSystemPolicyDescription, __MetadataBearer {}

/**
 * <p>Returns the <code>FileSystemPolicy</code> for the specified EFS file
 *       system.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeFileSystemPolicyRequest
 *   FileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * // { // FileSystemPolicyDescription
 * //   FileSystemId: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFileSystemPolicyCommandInput - {@link DescribeFileSystemPolicyCommandInput}
 * @returns {@link DescribeFileSystemPolicyCommandOutput}
 * @see {@link DescribeFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link PolicyNotFound} (client fault)
 *  <p>Returned if <code>no backup</code> is specified for a One Zone EFS file system.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class DescribeFileSystemPolicyCommand extends $Command
  .classBuilder<
    DescribeFileSystemPolicyCommandInput,
    DescribeFileSystemPolicyCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "DescribeFileSystemPolicy", {})
  .n("EFSClient", "DescribeFileSystemPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFileSystemPolicyCommand)
  .de(de_DescribeFileSystemPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFileSystemPolicyRequest;
      output: FileSystemPolicyDescription;
    };
    sdk: {
      input: DescribeFileSystemPolicyCommandInput;
      output: DescribeFileSystemPolicyCommandOutput;
    };
  };
}
