// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListManagedApisRequest, ListManagedApisResponse } from "../models/models_0";
import { ListManagedApis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedApisCommand}.
 */
export interface ListManagedApisCommandInput extends ListManagedApisRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedApisCommand}.
 */
export interface ListManagedApisCommandOutput extends ListManagedApisResponse, __MetadataBearer {}

/**
 * Lists the Managed APIs in your account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, ListManagedApisCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, ListManagedApisCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // ListManagedApisRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   productId: "STRING_VALUE",
 * };
 * const command = new ListManagedApisCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedApisResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ManagedApiList // required
 * //     { // ManagedApiSummary
 * //       managedApiId: "STRING_VALUE", // required
 * //       managedApiArn: "STRING_VALUE", // required
 * //       apiSignature: { // ApiSignature
 * //         resourceArn: "STRING_VALUE", // required
 * //         method: "GET" || "POST" || "PUT" || "DELETE" || "PATCH" || "ANY" || "HEAD" || "OPTIONS", // required
 * //         hostname: "STRING_VALUE", // required
 * //         port: Number("int"), // required
 * //         path: "STRING_VALUE", // required
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedApisCommandInput - {@link ListManagedApisCommandInput}
 * @returns {@link ListManagedApisCommandOutput}
 * @see {@link ListManagedApisCommandInput} for command's `input` shape.
 * @see {@link ListManagedApisCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class ListManagedApisCommand extends command<ListManagedApisCommandInput, ListManagedApisCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedApis",
  ListManagedApis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedApisRequest;
      output: ListManagedApisResponse;
    };
    sdk: {
      input: ListManagedApisCommandInput;
      output: ListManagedApisCommandOutput;
    };
  };
}
