// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFileSystemPolicyRequest, FileSystemPolicyDescription } from "../models/models_0";
import { DescribeFileSystemPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the `FileSystemPolicy` for the specified EFS file system.
 *
 * This operation requires permissions for the `elasticfilesystem:DescribeFileSystemPolicy` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
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
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * Returned if the specified `FileSystemId` value doesn't exist in the requester's Amazon Web Services account.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link PolicyNotFound} (client fault)
 *
 * Returned if `no backup` is specified for a One Zone EFS file system.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @public
 */
export class DescribeFileSystemPolicyCommand extends command<DescribeFileSystemPolicyCommandInput, DescribeFileSystemPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFileSystemPolicy",
  DescribeFileSystemPolicy$
) {
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
