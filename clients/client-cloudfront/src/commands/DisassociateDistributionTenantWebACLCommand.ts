// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateDistributionTenantWebACLRequest,
  DisassociateDistributionTenantWebACLResult,
} from "../models/models_0";
import { DisassociateDistributionTenantWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateDistributionTenantWebACLCommand}.
 */
export interface DisassociateDistributionTenantWebACLCommandInput extends DisassociateDistributionTenantWebACLRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDistributionTenantWebACLCommand}.
 */
export interface DisassociateDistributionTenantWebACLCommandOutput extends DisassociateDistributionTenantWebACLResult, __MetadataBearer {}

/**
 * Disassociates a distribution tenant from the WAF web ACL.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DisassociateDistributionTenantWebACLCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DisassociateDistributionTenantWebACLCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DisassociateDistributionTenantWebACLRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DisassociateDistributionTenantWebACLCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateDistributionTenantWebACLResult
 * //   Id: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateDistributionTenantWebACLCommandInput - {@link DisassociateDistributionTenantWebACLCommandInput}
 * @returns {@link DisassociateDistributionTenantWebACLCommandOutput}
 * @see {@link DisassociateDistributionTenantWebACLCommandInput} for command's `input` shape.
 * @see {@link DisassociateDistributionTenantWebACLCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
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
export class DisassociateDistributionTenantWebACLCommand extends command<DisassociateDistributionTenantWebACLCommandInput, DisassociateDistributionTenantWebACLCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateDistributionTenantWebACL",
  DisassociateDistributionTenantWebACL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDistributionTenantWebACLRequest;
      output: DisassociateDistributionTenantWebACLResult;
    };
    sdk: {
      input: DisassociateDistributionTenantWebACLCommandInput;
      output: DisassociateDistributionTenantWebACLCommandOutput;
    };
  };
}
