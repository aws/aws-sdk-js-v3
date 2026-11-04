// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteExpressionRequest, DeleteExpressionResponse } from "../models/models_0";
import { DeleteExpression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteExpressionCommand}.
 */
export interface DeleteExpressionCommandInput extends DeleteExpressionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExpressionCommand}.
 */
export interface DeleteExpressionCommandOutput extends DeleteExpressionResponse, __MetadataBearer {}

/**
 * Removes an `Expression` from the search domain. For more information, see [Configuring Expressions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteExpressionCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteExpressionCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DeleteExpressionRequest
 *   DomainName: "STRING_VALUE", // required
 *   ExpressionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteExpressionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteExpressionResponse
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
 * @param DeleteExpressionCommandInput - {@link DeleteExpressionCommandInput}
 * @returns {@link DeleteExpressionCommandOutput}
 * @see {@link DeleteExpressionCommandInput} for command's `input` shape.
 * @see {@link DeleteExpressionCommandOutput} for command's `response` shape.
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
export class DeleteExpressionCommand extends command<DeleteExpressionCommandInput, DeleteExpressionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteExpression",
  DeleteExpression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExpressionRequest;
      output: DeleteExpressionResponse;
    };
    sdk: {
      input: DeleteExpressionCommandInput;
      output: DeleteExpressionCommandOutput;
    };
  };
}
