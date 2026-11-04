// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteKeyGroupRequest } from "../models/models_0";
import { DeleteKeyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteKeyGroupCommand}.
 */
export interface DeleteKeyGroupCommandInput extends DeleteKeyGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyGroupCommand}.
 */
export interface DeleteKeyGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes a key group.
 *
 * You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.
 *
 * To delete a key group, you must provide the key group's identifier and version. To get these values, use `ListKeyGroups` followed by `GetKeyGroup` or `GetKeyGroupConfig`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteKeyGroupRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteKeyGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKeyGroupCommandInput - {@link DeleteKeyGroupCommandInput}
 * @returns {@link DeleteKeyGroupCommandOutput}
 * @see {@link DeleteKeyGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchResource} (client fault)
 *
 * A resource that was specified is not valid.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link ResourceInUse} (client fault)
 *
 * Cannot delete this resource because it is in use.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteKeyGroupCommand extends command<DeleteKeyGroupCommandInput, DeleteKeyGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteKeyGroup",
  DeleteKeyGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteKeyGroupCommandInput;
      output: DeleteKeyGroupCommandOutput;
    };
  };
}
