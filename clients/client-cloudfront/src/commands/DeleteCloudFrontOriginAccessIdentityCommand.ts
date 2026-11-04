// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCloudFrontOriginAccessIdentityRequest } from "../models/models_0";
import { DeleteCloudFrontOriginAccessIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCloudFrontOriginAccessIdentityCommand}.
 */
export interface DeleteCloudFrontOriginAccessIdentityCommandInput extends DeleteCloudFrontOriginAccessIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCloudFrontOriginAccessIdentityCommand}.
 */
export interface DeleteCloudFrontOriginAccessIdentityCommandOutput extends __MetadataBearer {}

/**
 * Delete an origin access identity.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteCloudFrontOriginAccessIdentityRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCloudFrontOriginAccessIdentityCommandInput - {@link DeleteCloudFrontOriginAccessIdentityCommandInput}
 * @returns {@link DeleteCloudFrontOriginAccessIdentityCommandOutput}
 * @see {@link DeleteCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CloudFrontOriginAccessIdentityInUse} (client fault)
 *
 * The Origin Access Identity specified is already in use.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchCloudFrontOriginAccessIdentity} (client fault)
 *
 * The specified origin access identity does not exist.
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
export class DeleteCloudFrontOriginAccessIdentityCommand extends command<DeleteCloudFrontOriginAccessIdentityCommandInput, DeleteCloudFrontOriginAccessIdentityCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCloudFrontOriginAccessIdentity",
  DeleteCloudFrontOriginAccessIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudFrontOriginAccessIdentityRequest;
      output: {};
    };
    sdk: {
      input: DeleteCloudFrontOriginAccessIdentityCommandInput;
      output: DeleteCloudFrontOriginAccessIdentityCommandOutput;
    };
  };
}
