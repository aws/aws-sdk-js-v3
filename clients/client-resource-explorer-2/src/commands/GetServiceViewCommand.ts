// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetServiceViewInput, GetServiceViewOutput } from "../models/models_0";
import type {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";
import { GetServiceView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceViewCommand}.
 */
export interface GetServiceViewCommandInput extends GetServiceViewInput {}
/**
 * @public
 *
 * The output of {@link GetServiceViewCommand}.
 */
export interface GetServiceViewCommandOutput extends GetServiceViewOutput, __MetadataBearer {}

/**
 * <p>Retrieves details about a specific Resource Explorer service view. This operation returns the configuration and properties of the specified view.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetServiceViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetServiceViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // GetServiceViewInput
 *   ServiceViewArn: "STRING_VALUE", // required
 * };
 * const command = new GetServiceViewCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceViewOutput
 * //   View: { // ServiceView
 * //     ServiceViewArn: "STRING_VALUE", // required
 * //     Filters: { // SearchFilter
 * //       FilterString: "STRING_VALUE", // required
 * //     },
 * //     IncludedProperties: [ // IncludedPropertyList
 * //       { // IncludedProperty
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     StreamingAccessForService: "STRING_VALUE",
 * //     ScopeType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceViewCommandInput - {@link GetServiceViewCommandInput}
 * @returns {@link GetServiceViewCommandOutput}
 * @see {@link GetServiceViewCommandInput} for command's `input` shape.
 * @see {@link GetServiceViewCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to identity the resource, and try again.</p>
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
export class GetServiceViewCommand extends $Command
  .classBuilder<
    GetServiceViewCommandInput,
    GetServiceViewCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceExplorer", "GetServiceView", {})
  .n("ResourceExplorer2Client", "GetServiceViewCommand")
  .sc(GetServiceView$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceViewInput;
      output: GetServiceViewOutput;
    };
    sdk: {
      input: GetServiceViewCommandInput;
      output: GetServiceViewCommandOutput;
    };
  };
}
