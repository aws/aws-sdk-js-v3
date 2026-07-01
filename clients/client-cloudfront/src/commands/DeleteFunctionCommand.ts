// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFunctionRequest } from "../models/models_0";
import { DeleteFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFunctionCommand}.
 */
export interface DeleteFunctionCommandInput extends DeleteFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFunctionCommand}.
 */
export interface DeleteFunctionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFunctionCommandInput - {@link DeleteFunctionCommandInput}
 * @returns {@link DeleteFunctionCommandOutput}
 * @see {@link DeleteFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FunctionInUse} (client fault)
 *  <p>Cannot delete the function because it's attached to one or more cache behaviors.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchFunctionExists} (client fault)
 *  <p>The function does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class DeleteFunctionCommand extends command<DeleteFunctionCommandInput, DeleteFunctionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFunction",
  DeleteFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFunctionRequest;
      output: {};
    };
    sdk: {
      input: DeleteFunctionCommandInput;
      output: DeleteFunctionCommandOutput;
    };
  };
}
