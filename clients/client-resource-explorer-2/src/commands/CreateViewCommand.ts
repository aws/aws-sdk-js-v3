// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateViewInput, CreateViewOutput } from "../models/models_0";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";
import { CreateView } from "../schemas/schemas_1_View";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateViewCommand}.
 */
export interface CreateViewCommandInput extends CreateViewInput {}
/**
 * @public
 *
 * The output of {@link CreateViewCommand}.
 */
export interface CreateViewCommandOutput extends CreateViewOutput, __MetadataBearer {}

/**
 * <p>Creates a view that users can query by using the <a>Search</a> operation.
 *             Results from queries that you make using this view include only resources that match the
 *             view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a>
 *             in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
 *          <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code>
 *             to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of
 *             this view can <a>Search</a> using views you create with this
 *             operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, CreateViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, CreateViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // CreateViewInput
 *   ClientToken: "STRING_VALUE",
 *   ViewName: "STRING_VALUE", // required
 *   IncludedProperties: [ // IncludedPropertyList
 *     { // IncludedProperty
 *       Name: "STRING_VALUE", // required
 *     },
 *   ],
 *   Scope: "STRING_VALUE",
 *   Filters: { // SearchFilter
 *     FilterString: "STRING_VALUE", // required
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateViewOutput
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
 * @param CreateViewCommandInput - {@link CreateViewCommandInput}
 * @returns {@link CreateViewCommandOutput}
 * @see {@link CreateViewCommandInput} for command's `input` shape.
 * @see {@link CreateViewCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>If you attempted to create a view, then the request failed because either you specified parameters that didn’t match the
 *             original request, or you attempted to create a view with a name that already exists in
 *             this Amazon Web Services Region.</p>
 *          <p>If you attempted to create an index, then the request failed because either you specified parameters that didn't match
 *             the original request, or an index already exists in the current Amazon Web Services Region.</p>
 *          <p>If you attempted to update an index type to <code>AGGREGATOR</code>, then the request failed because you already
 *             have an <code>AGGREGATOR</code> index in a different Amazon Web Services Region.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because it exceeds a service quota.</p>
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
 *
 * @public
 */
export class CreateViewCommand extends $Command
  .classBuilder<
    CreateViewCommandInput,
    CreateViewCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceExplorer", "CreateView", {})
  .n("ResourceExplorer2Client", "CreateViewCommand")
  .sc(CreateView)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateViewInput;
      output: CreateViewOutput;
    };
    sdk: {
      input: CreateViewCommandInput;
      output: CreateViewCommandOutput;
    };
  };
}
