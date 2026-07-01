// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { DeleteAccessPointForObjectLambdaRequest } from "../models/models_0";
import { DeleteAccessPointForObjectLambda$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessPointForObjectLambdaCommand}.
 */
export interface DeleteAccessPointForObjectLambdaCommandInput extends DeleteAccessPointForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessPointForObjectLambdaCommand}.
 */
export interface DeleteAccessPointForObjectLambdaCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Deletes the specified Object Lambda Access Point.</p>
 *          <p>The following actions are related to
 *          <code>DeleteAccessPointForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessPointForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessPointForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessPointForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessPointForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessPointForObjectLambdaCommandInput - {@link DeleteAccessPointForObjectLambdaCommandInput}
 * @returns {@link DeleteAccessPointForObjectLambdaCommandOutput}
 * @see {@link DeleteAccessPointForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteAccessPointForObjectLambdaCommand extends command<DeleteAccessPointForObjectLambdaCommandInput, DeleteAccessPointForObjectLambdaCommandOutput>(
  _ep0,
  _mw1,
  "DeleteAccessPointForObjectLambda",
  DeleteAccessPointForObjectLambda$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPointForObjectLambdaRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessPointForObjectLambdaCommandInput;
      output: DeleteAccessPointForObjectLambdaCommandOutput;
    };
  };
}
