// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListProfileObjectsRequest,
  ListProfileObjectsResponse,
  ListProfileObjectsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListProfileObjectsCommand, se_ListProfileObjectsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfileObjectsCommand}.
 */
export interface ListProfileObjectsCommandInput extends ListProfileObjectsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileObjectsCommand}.
 */
export interface ListProfileObjectsCommandOutput extends ListProfileObjectsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of objects associated with a profile of a given ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListProfileObjectsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 *   ObjectFilter: { // ObjectFilter
 *     KeyName: "STRING_VALUE", // required
 *     Values: [ // requestValueList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListProfileObjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileObjectsResponse
 * //   Items: [ // ProfileObjectList
 * //     { // ListProfileObjectsItem
 * //       ObjectTypeName: "STRING_VALUE",
 * //       ProfileObjectUniqueKey: "STRING_VALUE",
 * //       Object: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileObjectsCommandInput - {@link ListProfileObjectsCommandInput}
 * @returns {@link ListProfileObjectsCommandOutput}
 * @see {@link ListProfileObjectsCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectsCommandOutput} for command's `response` shape.
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
export class ListProfileObjectsCommand extends $Command
  .classBuilder<
    ListProfileObjectsCommandInput,
    ListProfileObjectsCommandOutput,
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
  .s("CustomerProfiles_20200815", "ListProfileObjects", {})
  .n("CustomerProfilesClient", "ListProfileObjectsCommand")
  .f(void 0, ListProfileObjectsResponseFilterSensitiveLog)
  .ser(se_ListProfileObjectsCommand)
  .de(de_ListProfileObjectsCommand)
  .build() {}
