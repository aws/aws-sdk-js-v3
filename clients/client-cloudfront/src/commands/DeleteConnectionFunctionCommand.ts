// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectionFunctionRequest } from "../models/models_0";
import { DeleteConnectionFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectionFunctionCommand}.
 */
export interface DeleteConnectionFunctionCommandInput extends DeleteConnectionFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionFunctionCommand}.
 */
export interface DeleteConnectionFunctionCommandOutput extends __MetadataBearer {}

/**
 * Deletes a connection function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteConnectionFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteConnectionFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteConnectionFunctionRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionFunctionCommandInput - {@link DeleteConnectionFunctionCommandInput}
 * @returns {@link DeleteConnectionFunctionCommandOutput}
 * @see {@link DeleteConnectionFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CannotDeleteEntityWhileInUse} (client fault)
 *
 * The entity cannot be deleted while it is in use.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteConnectionFunctionCommand extends command<DeleteConnectionFunctionCommandInput, DeleteConnectionFunctionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnectionFunction",
  DeleteConnectionFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionFunctionRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionFunctionCommandInput;
      output: DeleteConnectionFunctionCommandOutput;
    };
  };
}
