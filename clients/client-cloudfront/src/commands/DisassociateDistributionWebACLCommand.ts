// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateDistributionWebACLRequest, DisassociateDistributionWebACLResult } from "../models/models_0";
import { DisassociateDistributionWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateDistributionWebACLCommand}.
 */
export interface DisassociateDistributionWebACLCommandInput extends DisassociateDistributionWebACLRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDistributionWebACLCommand}.
 */
export interface DisassociateDistributionWebACLCommandOutput extends DisassociateDistributionWebACLResult, __MetadataBearer {}

/**
 * Disassociates a distribution from the WAF web ACL.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DisassociateDistributionWebACLCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DisassociateDistributionWebACLCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DisassociateDistributionWebACLRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DisassociateDistributionWebACLCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateDistributionWebACLResult
 * //   Id: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateDistributionWebACLCommandInput - {@link DisassociateDistributionWebACLCommandInput}
 * @returns {@link DisassociateDistributionWebACLCommandOutput}
 * @see {@link DisassociateDistributionWebACLCommandInput} for command's `input` shape.
 * @see {@link DisassociateDistributionWebACLCommandOutput} for command's `response` shape.
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
export class DisassociateDistributionWebACLCommand extends command<DisassociateDistributionWebACLCommandInput, DisassociateDistributionWebACLCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateDistributionWebACL",
  DisassociateDistributionWebACL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDistributionWebACLRequest;
      output: DisassociateDistributionWebACLResult;
    };
    sdk: {
      input: DisassociateDistributionWebACLCommandInput;
      output: DisassociateDistributionWebACLCommandOutput;
    };
  };
}
