// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateDistributionWebACLRequest, AssociateDistributionWebACLResult } from "../models/models_0";
import { AssociateDistributionWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateDistributionWebACLCommand}.
 */
export interface AssociateDistributionWebACLCommandInput extends AssociateDistributionWebACLRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDistributionWebACLCommand}.
 */
export interface AssociateDistributionWebACLCommandOutput extends AssociateDistributionWebACLResult, __MetadataBearer {}

/**
 * Associates the WAF web ACL with a distribution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, AssociateDistributionWebACLCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, AssociateDistributionWebACLCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // AssociateDistributionWebACLRequest
 *   Id: "STRING_VALUE", // required
 *   WebACLArn: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new AssociateDistributionWebACLCommand(input);
 * const response = await client.send(command);
 * // { // AssociateDistributionWebACLResult
 * //   Id: "STRING_VALUE",
 * //   WebACLArn: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateDistributionWebACLCommandInput - {@link AssociateDistributionWebACLCommandInput}
 * @returns {@link AssociateDistributionWebACLCommandOutput}
 * @see {@link AssociateDistributionWebACLCommandInput} for command's `input` shape.
 * @see {@link AssociateDistributionWebACLCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *
 * The entity limit has been exceeded.
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
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class AssociateDistributionWebACLCommand extends command<AssociateDistributionWebACLCommandInput, AssociateDistributionWebACLCommandOutput>(
  _ep0,
  _mw0,
  "AssociateDistributionWebACL",
  AssociateDistributionWebACL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDistributionWebACLRequest;
      output: AssociateDistributionWebACLResult;
    };
    sdk: {
      input: AssociateDistributionWebACLCommandInput;
      output: AssociateDistributionWebACLCommandOutput;
    };
  };
}
