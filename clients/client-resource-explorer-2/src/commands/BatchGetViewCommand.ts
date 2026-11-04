// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetViewInput, BatchGetViewOutput } from "../models/models_0";
import { BatchGetView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetViewCommand}.
 */
export interface BatchGetViewCommandInput extends BatchGetViewInput {}
/**
 * @public
 *
 * The output of {@link BatchGetViewCommand}.
 */
export interface BatchGetViewCommandOutput extends BatchGetViewOutput, __MetadataBearer {}

/**
 * Retrieves details about a list of views.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, BatchGetViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, BatchGetViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // BatchGetViewInput
 *   ViewArns: [ // ViewArnList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetViewCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetViewOutput
 * //   Views: [ // ViewList
 * //     { // View
 * //       ViewArn: "STRING_VALUE",
 * //       ViewName: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Scope: "STRING_VALUE",
 * //       IncludedProperties: [ // IncludedPropertyList
 * //         { // IncludedProperty
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Filters: { // SearchFilter
 * //         FilterString: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // BatchGetViewErrors
 * //     { // BatchGetViewError
 * //       ViewArn: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetViewCommandInput - {@link BatchGetViewCommandInput}
 * @returns {@link BatchGetViewCommandOutput}
 * @see {@link BatchGetViewCommandInput} for command's `input` shape.
 * @see {@link BatchGetViewCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The credentials that you used to call this operation don't have the minimum required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of internal service error. Try your request again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request failed because you exceeded a rate limit for this operation. For more information, see [Quotas for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html).
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The principal making the request isn't permitted to perform the operation.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You provided an invalid value for one of the operation's parameters. Check the syntax for the operation, and try again.
 *
 * @throws {@link ResourceExplorer2ServiceException}
 *
 * Base exception class for all service exceptions from ResourceExplorer2 service.
 *
 * @public
 */
export class BatchGetViewCommand extends command<BatchGetViewCommandInput, BatchGetViewCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetView",
  BatchGetView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetViewInput;
      output: BatchGetViewOutput;
    };
    sdk: {
      input: BatchGetViewCommandInput;
      output: BatchGetViewCommandOutput;
    };
  };
}
