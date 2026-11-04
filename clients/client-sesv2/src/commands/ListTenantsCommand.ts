// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTenantsRequest, ListTenantsResponse } from "../models/models_0";
import { ListTenants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTenantsCommand}.
 */
export interface ListTenantsCommandInput extends ListTenantsRequest {}
/**
 * @public
 *
 * The output of {@link ListTenantsCommand}.
 */
export interface ListTenantsCommandOutput extends ListTenantsResponse, __MetadataBearer {}

/**
 * List all tenants associated with your account in the current Amazon Web Services Region.
 *
 * This operation returns basic information about each tenant, such as tenant name, ID, ARN, and creation timestamp.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListTenantsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListTenantsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // ListTenantsRequest
 *   Filter: { // ListTenantsFilter
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListTenantsCommand(input);
 * const response = await client.send(command);
 * // { // ListTenantsResponse
 * //   Tenants: [ // TenantInfoList
 * //     { // TenantInfo
 * //       TenantName: "STRING_VALUE",
 * //       TenantId: "STRING_VALUE",
 * //       TenantArn: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       SendingStatus: "ENABLED" || "REINSTATED" || "DISABLED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTenantsCommandInput - {@link ListTenantsCommandInput}
 * @returns {@link ListTenantsCommandOutput}
 * @see {@link ListTenantsCommandInput} for command's `input` shape.
 * @see {@link ListTenantsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
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
export class ListTenantsCommand extends command<ListTenantsCommandInput, ListTenantsCommandOutput>(
  _ep0,
  _mw0,
  "ListTenants",
  ListTenants$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTenantsRequest;
      output: ListTenantsResponse;
    };
    sdk: {
      input: ListTenantsCommandInput;
      output: ListTenantsCommandOutput;
    };
  };
}
