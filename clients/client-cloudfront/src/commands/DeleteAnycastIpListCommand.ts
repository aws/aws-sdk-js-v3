// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAnycastIpListRequest } from "../models/models_0";
import { DeleteAnycastIpList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAnycastIpListCommand}.
 */
export interface DeleteAnycastIpListCommandInput extends DeleteAnycastIpListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnycastIpListCommand}.
 */
export interface DeleteAnycastIpListCommandOutput extends __MetadataBearer {}

/**
 * Deletes an Anycast static IP list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteAnycastIpListCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteAnycastIpListCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteAnycastIpListRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteAnycastIpListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnycastIpListCommandInput - {@link DeleteAnycastIpListCommandInput}
 * @returns {@link DeleteAnycastIpListCommandOutput}
 * @see {@link DeleteAnycastIpListCommandInput} for command's `input` shape.
 * @see {@link DeleteAnycastIpListCommandOutput} for command's `response` shape.
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
 * @throws {@link IllegalDelete} (client fault)
 *
 * Deletion is not allowed for this entity.
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
export class DeleteAnycastIpListCommand extends command<DeleteAnycastIpListCommandInput, DeleteAnycastIpListCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAnycastIpList",
  DeleteAnycastIpList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnycastIpListRequest;
      output: {};
    };
    sdk: {
      input: DeleteAnycastIpListCommandInput;
      output: DeleteAnycastIpListCommandOutput;
    };
  };
}
