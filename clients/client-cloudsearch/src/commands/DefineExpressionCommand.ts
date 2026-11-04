// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DefineExpressionRequest, DefineExpressionResponse } from "../models/models_0";
import { DefineExpression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DefineExpressionCommand}.
 */
export interface DefineExpressionCommandInput extends DefineExpressionRequest {}
/**
 * @public
 *
 * The output of {@link DefineExpressionCommand}.
 */
export interface DefineExpressionCommandOutput extends DefineExpressionResponse, __MetadataBearer {}

/**
 * Configures an `Expression` for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see [Configuring Expressions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineExpressionCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineExpressionCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DefineExpressionRequest
 *   DomainName: "STRING_VALUE", // required
 *   Expression: { // Expression
 *     ExpressionName: "STRING_VALUE", // required
 *     ExpressionValue: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DefineExpressionCommand(input);
 * const response = await client.send(command);
 * // { // DefineExpressionResponse
 * //   Expression: { // ExpressionStatus
 * //     Options: { // Expression
 * //       ExpressionName: "STRING_VALUE", // required
 * //       ExpressionValue: "STRING_VALUE", // required
 * //     },
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
 * @param DefineExpressionCommandInput - {@link DefineExpressionCommandInput}
 * @returns {@link DefineExpressionCommandOutput}
 * @see {@link DefineExpressionCommandInput} for command's `input` shape.
 * @see {@link DefineExpressionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTypeException} (client fault)
 *
 * The request was rejected because it specified an invalid type definition.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because a resource limit has already been met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was rejected because it has invalid parameters.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DefineExpressionCommand extends command<DefineExpressionCommandInput, DefineExpressionCommandOutput>(
  _ep0,
  _mw0,
  "DefineExpression",
  DefineExpression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DefineExpressionRequest;
      output: DefineExpressionResponse;
    };
    sdk: {
      input: DefineExpressionCommandInput;
      output: DefineExpressionCommandOutput;
    };
  };
}
