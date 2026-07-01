// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessGrantsInstanceRequest, GetAccessGrantsInstanceResult } from "../models/models_0";
import { GetAccessGrantsInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessGrantsInstanceCommand}.
 */
export interface GetAccessGrantsInstanceCommandInput extends GetAccessGrantsInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantsInstanceCommand}.
 */
export interface GetAccessGrantsInstanceCommandOutput extends GetAccessGrantsInstanceResult, __MetadataBearer {}

/**
 * <p>Retrieves the S3 Access Grants instance for a Region in your account. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetAccessGrantsInstance</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 *          <note>
 *             <p>
 *                <code>GetAccessGrantsInstance</code> is not supported for cross-account access. You can only call the API from the account that owns the S3 Access Grants instance.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantsInstanceCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantsInstanceCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantsInstanceRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetAccessGrantsInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantsInstanceResult
 * //   AccessGrantsInstanceArn: "STRING_VALUE",
 * //   AccessGrantsInstanceId: "STRING_VALUE",
 * //   IdentityCenterArn: "STRING_VALUE",
 * //   IdentityCenterInstanceArn: "STRING_VALUE",
 * //   IdentityCenterApplicationArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAccessGrantsInstanceCommandInput - {@link GetAccessGrantsInstanceCommandInput}
 * @returns {@link GetAccessGrantsInstanceCommandOutput}
 * @see {@link GetAccessGrantsInstanceCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantsInstanceCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessGrantsInstanceCommand extends command<GetAccessGrantsInstanceCommandInput, GetAccessGrantsInstanceCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessGrantsInstance",
  GetAccessGrantsInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessGrantsInstanceRequest;
      output: GetAccessGrantsInstanceResult;
    };
    sdk: {
      input: GetAccessGrantsInstanceCommandInput;
      output: GetAccessGrantsInstanceCommandOutput;
    };
  };
}
