// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServiceIndexesInput, ListServiceIndexesOutput } from "../models/models_0";
import { de_ListServiceIndexesCommand, se_ListServiceIndexesCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ListServiceIndexesCommand}.
 */
export interface ListServiceIndexesCommandInput extends ListServiceIndexesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceIndexesCommand}.
 */
export interface ListServiceIndexesCommandOutput extends ListServiceIndexesOutput, __MetadataBearer {}

/**
 * <p>Lists all Resource Explorer indexes across the specified Amazon Web Services Regions. This operation returns information about indexes including their ARNs, types, and Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListServiceIndexesCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListServiceIndexesCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListServiceIndexesInput
 *   Regions: [ // RegionList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceIndexesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceIndexesOutput
 * //   Indexes: [ // IndexList
 * //     { // Index
 * //       Region: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceIndexesCommandInput - {@link ListServiceIndexesCommandInput}
 * @returns {@link ListServiceIndexesCommandOutput}
 * @see {@link ListServiceIndexesCommandInput} for command's `input` shape.
 * @see {@link ListServiceIndexesCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for Resource Explorer</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 *
 * @public
 */
export class ListServiceIndexesCommand extends $Command
  .classBuilder<
    ListServiceIndexesCommandInput,
    ListServiceIndexesCommandOutput,
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
  .s("ResourceExplorer", "ListServiceIndexes", {})
  .n("ResourceExplorer2Client", "ListServiceIndexesCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceIndexesCommand)
  .de(de_ListServiceIndexesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceIndexesInput;
      output: ListServiceIndexesOutput;
    };
    sdk: {
      input: ListServiceIndexesCommandInput;
      output: ListServiceIndexesCommandOutput;
    };
  };
}
