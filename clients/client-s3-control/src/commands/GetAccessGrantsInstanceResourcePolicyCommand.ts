// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetAccessGrantsInstanceResourcePolicyRequest,
  GetAccessGrantsInstanceResourcePolicyResult,
} from "../models/models_0";
import { GetAccessGrantsInstanceResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface GetAccessGrantsInstanceResourcePolicyCommandInput extends GetAccessGrantsInstanceResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface GetAccessGrantsInstanceResourcePolicyCommandOutput extends GetAccessGrantsInstanceResourcePolicyResult, __MetadataBearer {}

/**
 * Returns the resource policy of the S3 Access Grants instance.
 *
 * - **Permissions**
 *
 *   You must have the `s3:GetAccessGrantsInstanceResourcePolicy` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantsInstanceResourcePolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantsInstanceResourcePolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantsInstanceResourcePolicyRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetAccessGrantsInstanceResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantsInstanceResourcePolicyResult
 * //   Policy: "STRING_VALUE",
 * //   Organization: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAccessGrantsInstanceResourcePolicyCommandInput - {@link GetAccessGrantsInstanceResourcePolicyCommandInput}
 * @returns {@link GetAccessGrantsInstanceResourcePolicyCommandOutput}
 * @see {@link GetAccessGrantsInstanceResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantsInstanceResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class GetAccessGrantsInstanceResourcePolicyCommand extends command<GetAccessGrantsInstanceResourcePolicyCommandInput, GetAccessGrantsInstanceResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessGrantsInstanceResourcePolicy",
  GetAccessGrantsInstanceResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessGrantsInstanceResourcePolicyRequest;
      output: GetAccessGrantsInstanceResourcePolicyResult;
    };
    sdk: {
      input: GetAccessGrantsInstanceResourcePolicyCommandInput;
      output: GetAccessGrantsInstanceResourcePolicyCommandOutput;
    };
  };
}
