// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCaseAuditEventsRequest, GetCaseAuditEventsResponse } from "../models/models_0";
import { de_GetCaseAuditEventsCommand, se_GetCaseAuditEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCaseAuditEventsCommand}.
 */
export interface GetCaseAuditEventsCommandInput extends GetCaseAuditEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetCaseAuditEventsCommand}.
 */
export interface GetCaseAuditEventsCommandOutput extends GetCaseAuditEventsResponse, __MetadataBearer {}

/**
 * <p>Returns the audit history about a specific case if it exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetCaseAuditEventsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetCaseAuditEventsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // GetCaseAuditEventsRequest
 *   caseId: "STRING_VALUE", // required
 *   domainId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetCaseAuditEventsCommand(input);
 * const response = await client.send(command);
 * // { // GetCaseAuditEventsResponse
 * //   nextToken: "STRING_VALUE",
 * //   auditEvents: [ // AuditEventsList // required
 * //     { // AuditEvent
 * //       eventId: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       relatedItemType: "STRING_VALUE",
 * //       performedTime: new Date("TIMESTAMP"), // required
 * //       fields: [ // AuditEventFieldList // required
 * //         { // AuditEventField
 * //           eventFieldId: "STRING_VALUE", // required
 * //           oldValue: { // AuditEventFieldValueUnion Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             doubleValue: Number("double"),
 * //             booleanValue: true || false,
 * //             emptyValue: {},
 * //             userArnValue: "STRING_VALUE",
 * //           },
 * //           newValue: {//  Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             doubleValue: Number("double"),
 * //             booleanValue: true || false,
 * //             emptyValue: {},
 * //             userArnValue: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       performedBy: { // AuditEventPerformedBy
 * //         user: { // UserUnion Union: only one key present
 * //           userArn: "STRING_VALUE",
 * //         },
 * //         iamPrincipalArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCaseAuditEventsCommandInput - {@link GetCaseAuditEventsCommandInput}
 * @returns {@link GetCaseAuditEventsCommandOutput}
 * @see {@link GetCaseAuditEventsCommandInput} for command's `input` shape.
 * @see {@link GetCaseAuditEventsCommandOutput} for command's `response` shape.
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
export class GetCaseAuditEventsCommand extends $Command
  .classBuilder<
    GetCaseAuditEventsCommandInput,
    GetCaseAuditEventsCommandOutput,
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
  .s("AmazonConnectCases", "GetCaseAuditEvents", {})
  .n("ConnectCasesClient", "GetCaseAuditEventsCommand")
  .f(void 0, void 0)
  .ser(se_GetCaseAuditEventsCommand)
  .de(de_GetCaseAuditEventsCommand)
  .build() {}
