// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListStreamingAccessForServicesInput, ListStreamingAccessForServicesOutput } from "../models/models_0";
import type {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";
import { ListStreamingAccessForServices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamingAccessForServicesCommand}.
 */
export interface ListStreamingAccessForServicesCommandInput extends ListStreamingAccessForServicesInput {}
/**
 * @public
 *
 * The output of {@link ListStreamingAccessForServicesCommand}.
 */
export interface ListStreamingAccessForServicesCommandOutput extends ListStreamingAccessForServicesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of Amazon Web Services services that have been granted streaming access to your Resource Explorer data. Streaming access allows Amazon Web Services services to receive real-time updates about your resources as they are indexed by Resource Explorer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListStreamingAccessForServicesCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListStreamingAccessForServicesCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListStreamingAccessForServicesInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListStreamingAccessForServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamingAccessForServicesOutput
 * //   StreamingAccessForServices: [ // StreamingAccessDetailsList // required
 * //     { // StreamingAccessDetails
 * //       ServicePrincipal: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamingAccessForServicesCommandInput - {@link ListStreamingAccessForServicesCommandInput}
 * @returns {@link ListStreamingAccessForServicesCommandOutput}
 * @see {@link ListStreamingAccessForServicesCommandInput} for command's `input` shape.
 * @see {@link ListStreamingAccessForServicesCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again later.</p>
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
export class ListStreamingAccessForServicesCommand extends $Command
  .classBuilder<
    ListStreamingAccessForServicesCommandInput,
    ListStreamingAccessForServicesCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceExplorer", "ListStreamingAccessForServices", {})
  .n("ResourceExplorer2Client", "ListStreamingAccessForServicesCommand")
  .sc(ListStreamingAccessForServices$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamingAccessForServicesInput;
      output: ListStreamingAccessForServicesOutput;
    };
    sdk: {
      input: ListStreamingAccessForServicesCommandInput;
      output: ListStreamingAccessForServicesCommandOutput;
    };
  };
}
