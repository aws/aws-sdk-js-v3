// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeServiceAccessPoliciesRequest, DescribeServiceAccessPoliciesResponse } from "../models/models_0";
import { DescribeServiceAccessPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeServiceAccessPoliciesCommand}.
 */
export interface DescribeServiceAccessPoliciesCommandInput extends DescribeServiceAccessPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceAccessPoliciesCommand}.
 */
export interface DescribeServiceAccessPoliciesCommandOutput extends DescribeServiceAccessPoliciesResponse, __MetadataBearer {}

/**
 * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see [Configuring Access for a Search Domain](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeServiceAccessPoliciesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeServiceAccessPoliciesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeServiceAccessPoliciesRequest
 *   DomainName: "STRING_VALUE", // required
 *   Deployed: true || false,
 * };
 * const command = new DescribeServiceAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceAccessPoliciesResponse
 * //   AccessPolicies: { // AccessPoliciesStatus
 * //     Options: "STRING_VALUE", // required
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeServiceAccessPoliciesCommandInput - {@link DescribeServiceAccessPoliciesCommandInput}
 * @returns {@link DescribeServiceAccessPoliciesCommandOutput}
 * @see {@link DescribeServiceAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An internal error occurred while processing the request. If this problem persists, report an issue from the [Service Health Dashboard](http://status.aws.amazon.com/).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DescribeServiceAccessPoliciesCommand extends command<DescribeServiceAccessPoliciesCommandInput, DescribeServiceAccessPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeServiceAccessPolicies",
  DescribeServiceAccessPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceAccessPoliciesRequest;
      output: DescribeServiceAccessPoliciesResponse;
    };
    sdk: {
      input: DescribeServiceAccessPoliciesCommandInput;
      output: DescribeServiceAccessPoliciesCommandOutput;
    };
  };
}
