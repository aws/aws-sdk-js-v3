// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateViewInput, UpdateViewOutput } from "../models/models_0";
import type {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";
import { UpdateView } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateViewCommand}.
 */
export interface UpdateViewCommandInput extends UpdateViewInput {}
/**
 * @public
 *
 * The output of {@link UpdateViewCommand}.
 */
export interface UpdateViewCommandOutput extends UpdateViewOutput, __MetadataBearer {}

/**
 * <p>Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, UpdateViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, UpdateViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // UpdateViewInput
 *   ViewArn: "STRING_VALUE", // required
 *   IncludedProperties: [ // IncludedPropertyList
 *     { // IncludedProperty
 *       Name: "STRING_VALUE", // required
 *     },
 *   ],
 *   Filters: { // SearchFilter
 *     FilterString: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateViewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateViewOutput
 * //   View: { // View
 * //     ViewArn: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     Scope: "STRING_VALUE",
 * //     IncludedProperties: [ // IncludedPropertyList
 * //       { // IncludedProperty
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Filters: { // SearchFilter
 * //       FilterString: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateViewCommandInput - {@link UpdateViewCommandInput}
 * @returns {@link UpdateViewCommandOutput}
 * @see {@link UpdateViewCommandInput} for command's `input` shape.
 * @see {@link UpdateViewCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because it exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for Resource Explorer</a>.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The principal making the request isn't permitted to perform the operation.</p>
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
export class UpdateViewCommand extends $Command
  .classBuilder<
    UpdateViewCommandInput,
    UpdateViewCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceExplorer", "UpdateView", {})
  .n("ResourceExplorer2Client", "UpdateViewCommand")
  .sc(UpdateView)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateViewInput;
      output: UpdateViewOutput;
    };
    sdk: {
      input: UpdateViewCommandInput;
      output: UpdateViewCommandOutput;
    };
  };
}
