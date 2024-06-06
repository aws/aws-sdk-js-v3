// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProfileObjectTypeTemplatesRequest, ListProfileObjectTypeTemplatesResponse } from "../models/models_0";
import {
  de_ListProfileObjectTypeTemplatesCommand,
  se_ListProfileObjectTypeTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListProfileObjectTypeTemplatesCommandOutput
  extends ListProfileObjectTypeTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all of the template information for object types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 * @public
 */
export class ListProfileObjectTypeTemplatesCommand extends $Command
  .classBuilder<
    ListProfileObjectTypeTemplatesCommandInput,
    ListProfileObjectTypeTemplatesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "ListProfileObjectTypeTemplates", {})
  .n("CustomerProfilesClient", "ListProfileObjectTypeTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListProfileObjectTypeTemplatesCommand)
  .de(de_ListProfileObjectTypeTemplatesCommand)
  .build() {}
