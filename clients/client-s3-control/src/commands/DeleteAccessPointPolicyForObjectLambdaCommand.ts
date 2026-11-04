// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { DeleteAccessPointPolicyForObjectLambdaRequest } from "../models/models_0";
import { DeleteAccessPointPolicyForObjectLambda$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessPointPolicyForObjectLambdaCommand}.
 */
export interface DeleteAccessPointPolicyForObjectLambdaCommandInput extends DeleteAccessPointPolicyForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessPointPolicyForObjectLambdaCommand}.
 */
export interface DeleteAccessPointPolicyForObjectLambdaCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Removes the resource policy for an Object Lambda Access Point.
 *
 * The following actions are related to `DeleteAccessPointPolicyForObjectLambda`:
 *
 * - [GetAccessPointPolicyForObjectLambda](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html)
 * - [PutAccessPointPolicyForObjectLambda](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessPointPolicyForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessPointPolicyForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessPointPolicyForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessPointPolicyForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessPointPolicyForObjectLambdaCommandInput - {@link DeleteAccessPointPolicyForObjectLambdaCommandInput}
 * @returns {@link DeleteAccessPointPolicyForObjectLambdaCommandOutput}
 * @see {@link DeleteAccessPointPolicyForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointPolicyForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DeleteAccessPointPolicyForObjectLambdaCommand extends command<DeleteAccessPointPolicyForObjectLambdaCommandInput, DeleteAccessPointPolicyForObjectLambdaCommandOutput>(
  _ep0,
  _mw1,
  "DeleteAccessPointPolicyForObjectLambda",
  DeleteAccessPointPolicyForObjectLambda$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPointPolicyForObjectLambdaRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessPointPolicyForObjectLambdaCommandInput;
      output: DeleteAccessPointPolicyForObjectLambdaCommandOutput;
    };
  };
}
