// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { FileSystemPolicyDescription, PutFileSystemPolicyRequest } from "../models/models_0";
import { PutFileSystemPolicy } from "../schemas/schemas_5_FileSystem";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutFileSystemPolicyCommand}.
 */
export interface PutFileSystemPolicyCommandInput extends PutFileSystemPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutFileSystemPolicyCommand}.
 */
export interface PutFileSystemPolicyCommandOutput extends FileSystemPolicyDescription, __MetadataBearer {}

/**
 * <p>Applies an Amazon EFS
 *       <code>FileSystemPolicy</code> to an Amazon EFS file system. A file system policy is an
 *       IAM resource-based policy and can contain multiple policy statements. A file system always has
 *       exactly one file system policy, which can be the default policy or an explicit policy set or
 *       updated using this API operation. EFS file system policies have a 20,000 character
 *       limit. When an explicit policy is set, it overrides the default policy. For more information
 *       about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">
 *         Default EFS file system policy</a>. </p>
 *          <note>
 *             <p>EFS file system policies have a 20,000 character limit.</p>
 *          </note>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // PutFileSystemPolicyRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 *   BypassPolicyLockoutSafetyCheck: true || false,
 * };
 * const command = new PutFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * // { // FileSystemPolicyDescription
 * //   FileSystemId: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutFileSystemPolicyCommandInput - {@link PutFileSystemPolicyCommandInput}
 * @returns {@link PutFileSystemPolicyCommandOutput}
 * @see {@link PutFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFileSystemPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *  <p>Returned if the file system's lifecycle state is not "available".</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *  <p>Returned if the <code>FileSystemPolicy</code> is malformed or contains an error such
 *             as a parameter value that is not valid or a missing required parameter. Returned in the
 *             case of a policy lockout safety check error.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class PutFileSystemPolicyCommand extends $Command
  .classBuilder<
    PutFileSystemPolicyCommandInput,
    PutFileSystemPolicyCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "PutFileSystemPolicy", {})
  .n("EFSClient", "PutFileSystemPolicyCommand")
  .sc(PutFileSystemPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFileSystemPolicyRequest;
      output: FileSystemPolicyDescription;
    };
    sdk: {
      input: PutFileSystemPolicyCommandInput;
      output: PutFileSystemPolicyCommandOutput;
    };
  };
}
