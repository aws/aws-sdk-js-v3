// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFieldOptionsRequest, ListFieldOptionsResponse } from "../models/models_0";
import { de_ListFieldOptionsCommand, se_ListFieldOptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFieldOptionsCommand}.
 */
export interface ListFieldOptionsCommandInput extends ListFieldOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFieldOptionsCommand}.
 */
export interface ListFieldOptionsCommandOutput extends ListFieldOptionsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the field options for a field identifier in the domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, ListFieldOptionsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, ListFieldOptionsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // ListFieldOptionsRequest
 *   domainId: "STRING_VALUE", // required
 *   fieldId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   values: [ // ValuesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListFieldOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFieldOptionsResponse
 * //   options: [ // FieldOptionsList // required
 * //     { // FieldOption
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //       active: true || false, // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFieldOptionsCommandInput - {@link ListFieldOptionsCommandInput}
 * @returns {@link ListFieldOptionsCommandOutput}
 * @see {@link ListFieldOptionsCommandInput} for command's `input` shape.
 * @see {@link ListFieldOptionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 * @public
 */
export class ListFieldOptionsCommand extends $Command
  .classBuilder<
    ListFieldOptionsCommandInput,
    ListFieldOptionsCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "ListFieldOptions", {})
  .n("ConnectCasesClient", "ListFieldOptionsCommand")
  .f(void 0, void 0)
  .ser(se_ListFieldOptionsCommand)
  .de(de_ListFieldOptionsCommand)
  .build() {}
