// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSupportedResourceTypesInput, ListSupportedResourceTypesOutput } from "../models/models_0";
import type {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";
import { ListSupportedResourceTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSupportedResourceTypesCommand}.
 */
export interface ListSupportedResourceTypesCommandInput extends ListSupportedResourceTypesInput {}
/**
 * @public
 *
 * The output of {@link ListSupportedResourceTypesCommand}.
 */
export interface ListSupportedResourceTypesCommandOutput extends ListSupportedResourceTypesOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListSupportedResourceTypesCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListSupportedResourceTypesCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListSupportedResourceTypesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSupportedResourceTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListSupportedResourceTypesOutput
 * //   ResourceTypes: [ // ResourceTypeList
 * //     { // SupportedResourceType
 * //       Service: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSupportedResourceTypesCommandInput - {@link ListSupportedResourceTypesCommandInput}
 * @returns {@link ListSupportedResourceTypesCommandOutput}
 * @see {@link ListSupportedResourceTypesCommandInput} for command's `input` shape.
 * @see {@link ListSupportedResourceTypesCommandOutput} for command's `response` shape.
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
export class ListSupportedResourceTypesCommand extends $Command
  .classBuilder<
    ListSupportedResourceTypesCommandInput,
    ListSupportedResourceTypesCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceExplorer", "ListSupportedResourceTypes", {})
  .n("ResourceExplorer2Client", "ListSupportedResourceTypesCommand")
  .sc(ListSupportedResourceTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSupportedResourceTypesInput;
      output: ListSupportedResourceTypesOutput;
    };
    sdk: {
      input: ListSupportedResourceTypesCommandInput;
      output: ListSupportedResourceTypesCommandOutput;
    };
  };
}
