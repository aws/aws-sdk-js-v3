// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateViewInput, CreateViewOutput } from "../models/models_0";
import { CreateView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a view that users can query by using the Search operation. Results from queries that you make using this view include only resources that match the view's `Filters`. For more information about Amazon Web Services Resource Explorer views, see [Managing views](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html) in the *Amazon Web Services Resource Explorer User Guide*.
 *
 * Only the principals with an IAM identity-based policy that grants `Allow` to the `Search` action on a `Resource` with the [Amazon resource name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of this view can Search using views you create with this operation.
 *
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
 * //     ViewName: "STRING_VALUE",
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
 *
 * The credentials that you used to call this operation don't have the minimum required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * If you attempted to create a view, then the request failed because either you specified parameters that didn’t match the original request, or you attempted to create a view with a name that already exists in this Amazon Web Services Region.
 *
 * If you attempted to create an index, then the request failed because either you specified parameters that didn't match the original request, or an index already exists in the current Amazon Web Services Region.
 *
 * If you attempted to update an index type to `AGGREGATOR`, then the request failed because you already have an `AGGREGATOR` index in a different Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of internal service error. Try your request again later.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request failed because it exceeds a service quota.
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
export class CreateViewCommand extends command<CreateViewCommandInput, CreateViewCommandOutput>(
  _ep0,
  _mw0,
  "CreateView",
  CreateView$
) {
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
