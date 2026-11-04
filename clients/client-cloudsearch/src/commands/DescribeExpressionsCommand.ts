// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeExpressionsRequest, DescribeExpressionsResponse } from "../models/models_0";
import { DescribeExpressions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeExpressionsCommand}.
 */
export interface DescribeExpressionsCommandInput extends DescribeExpressionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExpressionsCommand}.
 */
export interface DescribeExpressionsCommandOutput extends DescribeExpressionsResponse, __MetadataBearer {}

/**
 * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see [Configuring Expressions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeExpressionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeExpressionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeExpressionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   ExpressionNames: [ // StandardNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeExpressionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExpressionsResponse
 * //   Expressions: [ // ExpressionStatusList // required
 * //     { // ExpressionStatus
 * //       Options: { // Expression
 * //         ExpressionName: "STRING_VALUE", // required
 * //         ExpressionValue: "STRING_VALUE", // required
 * //       },
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeExpressionsCommandInput - {@link DescribeExpressionsCommandInput}
 * @returns {@link DescribeExpressionsCommandOutput}
 * @see {@link DescribeExpressionsCommandInput} for command's `input` shape.
 * @see {@link DescribeExpressionsCommandOutput} for command's `response` shape.
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
export class DescribeExpressionsCommand extends command<DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeExpressions",
  DescribeExpressions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExpressionsRequest;
      output: DescribeExpressionsResponse;
    };
    sdk: {
      input: DescribeExpressionsCommandInput;
      output: DescribeExpressionsCommandOutput;
    };
  };
}
