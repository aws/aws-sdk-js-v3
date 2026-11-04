// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutAccessGrantsInstanceResourcePolicyRequest,
  PutAccessGrantsInstanceResourcePolicyResult,
} from "../models/models_0";
import { PutAccessGrantsInstanceResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface PutAccessGrantsInstanceResourcePolicyCommandInput extends PutAccessGrantsInstanceResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface PutAccessGrantsInstanceResourcePolicyCommandOutput extends PutAccessGrantsInstanceResourcePolicyResult, __MetadataBearer {}

/**
 * Updates the resource policy of the S3 Access Grants instance.
 *
 * - **Permissions**
 *
 *   You must have the `s3:PutAccessGrantsInstanceResourcePolicy` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessGrantsInstanceResourcePolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessGrantsInstanceResourcePolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessGrantsInstanceResourcePolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Policy: "STRING_VALUE", // required
 *   Organization: "STRING_VALUE",
 * };
 * const command = new PutAccessGrantsInstanceResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutAccessGrantsInstanceResourcePolicyResult
 * //   Policy: "STRING_VALUE",
 * //   Organization: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutAccessGrantsInstanceResourcePolicyCommandInput - {@link PutAccessGrantsInstanceResourcePolicyCommandInput}
 * @returns {@link PutAccessGrantsInstanceResourcePolicyCommandOutput}
 * @see {@link PutAccessGrantsInstanceResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutAccessGrantsInstanceResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class PutAccessGrantsInstanceResourcePolicyCommand extends command<PutAccessGrantsInstanceResourcePolicyCommandInput, PutAccessGrantsInstanceResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutAccessGrantsInstanceResourcePolicy",
  PutAccessGrantsInstanceResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccessGrantsInstanceResourcePolicyRequest;
      output: PutAccessGrantsInstanceResourcePolicyResult;
    };
    sdk: {
      input: PutAccessGrantsInstanceResourcePolicyCommandInput;
      output: PutAccessGrantsInstanceResourcePolicyCommandOutput;
    };
  };
}
