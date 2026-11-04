// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourcesInput, ListResourcesOutput } from "../models/models_0";
import { ListResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandInput extends ListResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandOutput extends ListResourcesOutput, __MetadataBearer {}

/**
 * Returns a list of resources and their details that match the specified criteria. This query must use a view. If you don’t explicitly specify a view, then Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListResourcesCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListResourcesCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListResourcesInput
 *   Filters: { // SearchFilter
 *     FilterString: "STRING_VALUE", // required
 *   },
 *   MaxResults: Number("int"),
 *   ViewArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesOutput
 * //   Resources: [ // ResourceList
 * //     { // Resource
 * //       Arn: "STRING_VALUE",
 * //       OwningAccountId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Service: "STRING_VALUE",
 * //       CfnResourceType: "STRING_VALUE",
 * //       LastReportedAt: new Date("TIMESTAMP"),
 * //       Properties: [ // ResourcePropertyList
 * //         { // ResourceProperty
 * //           Name: "STRING_VALUE",
 * //           LastReportedAt: new Date("TIMESTAMP"),
 * //           Data: "DOCUMENT_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ViewArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesCommandInput - {@link ListResourcesCommandInput}
 * @returns {@link ListResourcesCommandOutput}
 * @see {@link ListResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourcesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You specified a resource that doesn't exist. Check the ID or ARN that you used to identity the resource, and try again.
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
export class ListResourcesCommand extends command<ListResourcesCommandInput, ListResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListResources",
  ListResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesInput;
      output: ListResourcesOutput;
    };
    sdk: {
      input: ListResourcesCommandInput;
      output: ListResourcesCommandOutput;
    };
  };
}
