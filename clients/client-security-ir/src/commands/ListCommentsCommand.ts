// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCommentsRequest, ListCommentsResponse, ListCommentsResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListCommentsCommand, se_ListCommentsCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCommentsCommand}.
 */
export interface ListCommentsCommandInput extends ListCommentsRequest {}
/**
 * @public
 *
 * The output of {@link ListCommentsCommand}.
 */
export interface ListCommentsCommandOutput extends ListCommentsResponse, __MetadataBearer {}

/**
 * <p>Grants permissions to list and view comments for a designated case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, ListCommentsCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, ListCommentsCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * const client = new SecurityIRClient(config);
 * const input = { // ListCommentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   caseId: "STRING_VALUE", // required
 * };
 * const command = new ListCommentsCommand(input);
 * const response = await client.send(command);
 * // { // ListCommentsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ListCommentsItems
 * //     { // ListCommentsItem
 * //       commentId: "STRING_VALUE", // required
 * //       createdDate: new Date("TIMESTAMP"),
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       creator: "STRING_VALUE",
 * //       lastUpdatedBy: "STRING_VALUE",
 * //       body: "STRING_VALUE",
 * //     },
 * //   ],
 * //   total: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListCommentsCommandInput - {@link ListCommentsCommandInput}
 * @returns {@link ListCommentsCommandOutput}
 * @see {@link ListCommentsCommandInput} for command's `input` shape.
 * @see {@link ListCommentsCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 * @public
 */
export class ListCommentsCommand extends $Command
  .classBuilder<
    ListCommentsCommandInput,
    ListCommentsCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityIncidentResponse", "ListComments", {})
  .n("SecurityIRClient", "ListCommentsCommand")
  .f(void 0, ListCommentsResponseFilterSensitiveLog)
  .ser(se_ListCommentsCommand)
  .de(de_ListCommentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCommentsRequest;
      output: ListCommentsResponse;
    };
    sdk: {
      input: ListCommentsCommandInput;
      output: ListCommentsCommandOutput;
    };
  };
}
