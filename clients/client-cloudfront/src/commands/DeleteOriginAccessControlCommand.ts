// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOriginAccessControlRequest } from "../models/models_0";
import { DeleteOriginAccessControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOriginAccessControlCommand}.
 */
export interface DeleteOriginAccessControlCommandInput extends DeleteOriginAccessControlRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOriginAccessControlCommand}.
 */
export interface DeleteOriginAccessControlCommandOutput extends __MetadataBearer {}

/**
 * Deletes a CloudFront origin access control.
 *
 * You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteOriginAccessControlCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteOriginAccessControlRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteOriginAccessControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOriginAccessControlCommandInput - {@link DeleteOriginAccessControlCommandInput}
 * @returns {@link DeleteOriginAccessControlCommandOutput}
 * @see {@link DeleteOriginAccessControlCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginAccessControlCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchOriginAccessControl} (client fault)
 *
 * The origin access control does not exist.
 *
 * @throws {@link OriginAccessControlInUse} (client fault)
 *
 * Cannot delete the origin access control because it's in use by one or more distributions.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteOriginAccessControlCommand extends command<DeleteOriginAccessControlCommandInput, DeleteOriginAccessControlCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOriginAccessControl",
  DeleteOriginAccessControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOriginAccessControlRequest;
      output: {};
    };
    sdk: {
      input: DeleteOriginAccessControlCommandInput;
      output: DeleteOriginAccessControlCommandOutput;
    };
  };
}
