// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCasesRequest, ListCasesResponse, ListCasesResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListCasesCommand, se_ListCasesCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCasesCommand}.
 */
export interface ListCasesCommandInput extends ListCasesRequest {}
/**
 * @public
 *
 * The output of {@link ListCasesCommand}.
 */
export interface ListCasesCommandOutput extends ListCasesResponse, __MetadataBearer {}

/**
 * <p>Lists all cases the requester has access to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, ListCasesCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, ListCasesCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * const client = new SecurityIRClient(config);
 * const input = { // ListCasesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCasesCommand(input);
 * const response = await client.send(command);
 * // { // ListCasesResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ListCasesItems
 * //     { // ListCasesItem
 * //       caseId: "STRING_VALUE", // required
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       title: "STRING_VALUE",
 * //       caseArn: "STRING_VALUE",
 * //       engagementType: "Security Incident" || "Investigation",
 * //       caseStatus: "Submitted" || "Acknowledged" || "Detection and Analysis" || "Containment, Eradication and Recovery" || "Post-incident Activities" || "Ready to Close" || "Closed",
 * //       createdDate: new Date("TIMESTAMP"),
 * //       closedDate: new Date("TIMESTAMP"),
 * //       resolverType: "AWS" || "Self",
 * //       pendingAction: "Customer" || "None",
 * //     },
 * //   ],
 * //   total: Number("long"),
 * // };
 *
 * ```
 *
 * @param ListCasesCommandInput - {@link ListCasesCommandInput}
 * @returns {@link ListCasesCommandOutput}
 * @see {@link ListCasesCommandInput} for command's `input` shape.
 * @see {@link ListCasesCommandOutput} for command's `response` shape.
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
 *
 * @example Invoke ListCases
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListCasesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       caseArn: "arn:aws:security-ir:us-west-1:123456789012:case/1234567890",
 *       caseId: "8403556009",
 *       caseStatus: "Acknowledged",
 *       createdDate: "2023-01-27T15:32:01.789Z",
 *       engagementType: "Security Incident",
 *       lastUpdatedDate: "2023-03-27T15:32:01.789Z",
 *       pendingAction: "None",
 *       resolverType: "Self",
 *       title: "Example case title"
 *     }
 *   ],
 *   total: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCasesCommand extends $Command
  .classBuilder<
    ListCasesCommandInput,
    ListCasesCommandOutput,
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
  .s("SecurityIncidentResponse", "ListCases", {})
  .n("SecurityIRClient", "ListCasesCommand")
  .f(void 0, ListCasesResponseFilterSensitiveLog)
  .ser(se_ListCasesCommand)
  .de(de_ListCasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCasesRequest;
      output: ListCasesResponse;
    };
    sdk: {
      input: ListCasesCommandInput;
      output: ListCasesCommandOutput;
    };
  };
}
