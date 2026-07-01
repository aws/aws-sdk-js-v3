// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutFileSystemPolicyRequest, PutFileSystemPolicyResponse } from "../models/models_0";
import { PutFileSystemPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface PutFileSystemPolicyCommandOutput extends PutFileSystemPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates or replaces the IAM resource policy for an S3 File System to control access permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, PutFileSystemPolicyCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, PutFileSystemPolicyCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // PutFileSystemPolicyRequest
 *   fileSystemId: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutFileSystemPolicyCommandInput - {@link PutFileSystemPolicyCommandInput}
 * @returns {@link PutFileSystemPolicyCommandOutput}
 * @see {@link PutFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
 *
 * @public
 */
export class PutFileSystemPolicyCommand extends command<PutFileSystemPolicyCommandInput, PutFileSystemPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutFileSystemPolicy",
  PutFileSystemPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFileSystemPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutFileSystemPolicyCommandInput;
      output: PutFileSystemPolicyCommandOutput;
    };
  };
}
