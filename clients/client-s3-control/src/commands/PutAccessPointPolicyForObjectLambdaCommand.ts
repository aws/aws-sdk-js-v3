// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { PutAccessPointPolicyForObjectLambdaRequest } from "../models/models_0";
import { PutAccessPointPolicyForObjectLambda$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccessPointPolicyForObjectLambdaCommand}.
 */
export interface PutAccessPointPolicyForObjectLambdaCommandInput extends PutAccessPointPolicyForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessPointPolicyForObjectLambdaCommand}.
 */
export interface PutAccessPointPolicyForObjectLambdaCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see [Creating Object Lambda Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html#olap-create-cli) in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `PutAccessPointPolicyForObjectLambda`:
 *
 * - [DeleteAccessPointPolicyForObjectLambda](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html)
 * - [GetAccessPointPolicyForObjectLambda](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointPolicyForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointPolicyForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessPointPolicyForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutAccessPointPolicyForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccessPointPolicyForObjectLambdaCommandInput - {@link PutAccessPointPolicyForObjectLambdaCommandInput}
 * @returns {@link PutAccessPointPolicyForObjectLambdaCommandOutput}
 * @see {@link PutAccessPointPolicyForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointPolicyForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class PutAccessPointPolicyForObjectLambdaCommand extends command<PutAccessPointPolicyForObjectLambdaCommandInput, PutAccessPointPolicyForObjectLambdaCommandOutput>(
  _ep0,
  _mw1,
  "PutAccessPointPolicyForObjectLambda",
  PutAccessPointPolicyForObjectLambda$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccessPointPolicyForObjectLambdaRequest;
      output: {};
    };
    sdk: {
      input: PutAccessPointPolicyForObjectLambdaCommandInput;
      output: PutAccessPointPolicyForObjectLambdaCommandOutput;
    };
  };
}
