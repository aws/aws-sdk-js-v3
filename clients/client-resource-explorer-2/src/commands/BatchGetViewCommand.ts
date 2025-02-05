// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetViewInput, BatchGetViewOutput, BatchGetViewOutputFilterSensitiveLog } from "../models/models_0";
import { de_BatchGetViewCommand, se_BatchGetViewCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves details about a list of views.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, BatchGetViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, BatchGetViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for
 *             Resource Explorer</a>.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The principal making the request isn't permitted to perform the operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 * @public
 */
export class BatchGetViewCommand extends $Command
  .classBuilder<
    BatchGetViewCommandInput,
    BatchGetViewCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ResourceExplorer", "BatchGetView", {})
  .n("ResourceExplorer2Client", "BatchGetViewCommand")
  .f(void 0, BatchGetViewOutputFilterSensitiveLog)
  .ser(se_BatchGetViewCommand)
  .de(de_BatchGetViewCommand)
  .build() {
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
