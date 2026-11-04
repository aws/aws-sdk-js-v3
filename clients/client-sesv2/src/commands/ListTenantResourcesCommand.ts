// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTenantResourcesRequest, ListTenantResourcesResponse } from "../models/models_0";
import { ListTenantResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTenantResourcesCommand}.
 */
export interface ListTenantResourcesCommandInput extends ListTenantResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListTenantResourcesCommand}.
 */
export interface ListTenantResourcesCommandOutput extends ListTenantResourcesResponse, __MetadataBearer {}

/**
 * List all resources associated with a specific tenant.
 *
 * This operation returns a list of resources (email identities, configuration sets, or email templates) that are associated with the specified tenant. You can optionally filter the results by resource type.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListTenantResourcesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListTenantResourcesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // ListTenantResourcesRequest
 *   TenantName: "STRING_VALUE", // required
 *   Filter: { // ListTenantResourcesFilter
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PageSize: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTenantResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListTenantResourcesResponse
 * //   TenantResources: [ // TenantResourceList
 * //     { // TenantResource
 * //       ResourceType: "EMAIL_IDENTITY" || "CONFIGURATION_SET" || "EMAIL_TEMPLATE",
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTenantResourcesCommandInput - {@link ListTenantResourcesCommandInput}
 * @returns {@link ListTenantResourcesCommandOutput}
 * @see {@link ListTenantResourcesCommandInput} for command's `input` shape.
 * @see {@link ListTenantResourcesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @public
 */
export class ListTenantResourcesCommand extends command<ListTenantResourcesCommandInput, ListTenantResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListTenantResources",
  ListTenantResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTenantResourcesRequest;
      output: ListTenantResourcesResponse;
    };
    sdk: {
      input: ListTenantResourcesCommandInput;
      output: ListTenantResourcesCommandOutput;
    };
  };
}
