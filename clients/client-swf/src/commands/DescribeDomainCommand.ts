// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDomainInput, DomainDetail } from "../models/models_0";
import { DescribeDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDomainCommand}.
 */
export interface DescribeDomainCommandInput extends DescribeDomainInput {}
/**
 * @public
 *
 * The output of {@link DescribeDomainCommand}.
 */
export interface DescribeDomainCommandOutput extends DomainDetail, __MetadataBearer {}

/**
 * Returns information about the specified domain, including description and status.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, DescribeDomainCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DescribeDomainCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // DescribeDomainInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DescribeDomainCommand(input);
 * const response = await client.send(command);
 * // { // DomainDetail
 * //   domainInfo: { // DomainInfo
 * //     name: "STRING_VALUE", // required
 * //     status: "REGISTERED" || "DEPRECATED", // required
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //   },
 * //   configuration: { // DomainConfiguration
 * //     workflowExecutionRetentionPeriodInDays: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDomainCommandInput - {@link DescribeDomainCommandInput}
 * @returns {@link DescribeDomainCommandOutput}
 * @see {@link DescribeDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *
 * Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.
 *
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class DescribeDomainCommand extends command<DescribeDomainCommandInput, DescribeDomainCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDomain",
  DescribeDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainInput;
      output: DomainDetail;
    };
    sdk: {
      input: DescribeDomainCommandInput;
      output: DescribeDomainCommandOutput;
    };
  };
}
