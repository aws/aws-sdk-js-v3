// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProfileObjectTypeTemplatesRequest, ListProfileObjectTypeTemplatesResponse } from "../models/models_1";
import { ListProfileObjectTypeTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProfileObjectTypeTemplatesCommand}.
 */
export interface ListProfileObjectTypeTemplatesCommandInput extends ListProfileObjectTypeTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileObjectTypeTemplatesCommand}.
 */
export interface ListProfileObjectTypeTemplatesCommandOutput extends ListProfileObjectTypeTemplatesResponse, __MetadataBearer {}

/**
 * Lists all of the template information for object types.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListProfileObjectTypeTemplatesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProfileObjectTypeTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileObjectTypeTemplatesResponse
 * //   Items: [ // ProfileObjectTypeTemplateList
 * //     { // ListProfileObjectTypeTemplateItem
 * //       TemplateId: "STRING_VALUE",
 * //       SourceName: "STRING_VALUE",
 * //       SourceObject: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileObjectTypeTemplatesCommandInput - {@link ListProfileObjectTypeTemplatesCommandInput}
 * @returns {@link ListProfileObjectTypeTemplatesCommandOutput}
 * @see {@link ListProfileObjectTypeTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypeTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class ListProfileObjectTypeTemplatesCommand extends command<ListProfileObjectTypeTemplatesCommandInput, ListProfileObjectTypeTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListProfileObjectTypeTemplates",
  ListProfileObjectTypeTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileObjectTypeTemplatesRequest;
      output: ListProfileObjectTypeTemplatesResponse;
    };
    sdk: {
      input: ListProfileObjectTypeTemplatesCommandInput;
      output: ListProfileObjectTypeTemplatesCommandOutput;
    };
  };
}
