// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPartnershipsRequest, ListPartnershipsResponse } from "../models/models_0";
import { de_ListPartnershipsCommand, se_ListPartnershipsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPartnershipsCommand}.
 */
export interface ListPartnershipsCommandInput extends ListPartnershipsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartnershipsCommand}.
 */
export interface ListPartnershipsCommandOutput extends ListPartnershipsResponse, __MetadataBearer {}

/**
 * <p>Lists the partnerships associated with your Amazon Web Services account for your current or specified region. A partnership represents the connection between you and your trading partner. It ties
 *    together a profile and one or more trading capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListPartnershipsCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListPartnershipsCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new B2biClient(config);
 * const input = { // ListPartnershipsRequest
 *   profileId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPartnershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartnershipsResponse
 * //   partnerships: [ // PartnershipList // required
 * //     { // PartnershipSummary
 * //       profileId: "STRING_VALUE", // required
 * //       partnershipId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       capabilities: [ // PartnershipCapabilities
 * //         "STRING_VALUE",
 * //       ],
 * //       capabilityOptions: { // CapabilityOptions
 * //         outboundEdi: { // OutboundEdiOptions Union: only one key present
 * //           x12: { // X12Envelope
 * //             common: { // X12OutboundEdiHeaders
 * //               interchangeControlHeaders: { // X12InterchangeControlHeaders
 * //                 senderIdQualifier: "STRING_VALUE",
 * //                 senderId: "STRING_VALUE",
 * //                 receiverIdQualifier: "STRING_VALUE",
 * //                 receiverId: "STRING_VALUE",
 * //                 repetitionSeparator: "STRING_VALUE",
 * //                 acknowledgmentRequestedCode: "STRING_VALUE",
 * //                 usageIndicatorCode: "STRING_VALUE",
 * //               },
 * //               functionalGroupHeaders: { // X12FunctionalGroupHeaders
 * //                 applicationSenderCode: "STRING_VALUE",
 * //                 applicationReceiverCode: "STRING_VALUE",
 * //                 responsibleAgencyCode: "STRING_VALUE",
 * //               },
 * //               delimiters: { // X12Delimiters
 * //                 componentSeparator: "STRING_VALUE",
 * //                 dataElementSeparator: "STRING_VALUE",
 * //                 segmentTerminator: "STRING_VALUE",
 * //               },
 * //               validateEdi: true || false,
 * //             },
 * //           },
 * //         },
 * //       },
 * //       tradingPartnerId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPartnershipsCommandInput - {@link ListPartnershipsCommandInput}
 * @returns {@link ListPartnershipsCommandOutput}
 * @see {@link ListPartnershipsCommandInput} for command's `input` shape.
 * @see {@link ListPartnershipsCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @public
 * @example Sample ListPartnerships call
 * ```javascript
 * //
 * const input = {
 *   "maxResults": 50,
 *   "nextToken": "foo",
 *   "profileId": "p-60fbc37c87f04fce9"
 * };
 * const command = new ListPartnershipsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "nextToken": "string",
 *   "partnerships": [
 *     {
 *       "name": "b2bipartner",
 *       "capabilities": [
 *         "ca-963a8121e4fc4e348"
 *       ],
 *       "createdAt": "2023-11-01T21:51:05.504Z",
 *       "modifiedAt": "2023-11-01T21:51:05.504Z",
 *       "partnershipId": "ps-219fa02f5b4242af8",
 *       "profileId": "p-60fbc37c87f04fce9",
 *       "tradingPartnerId": "tp-2a17ca447f6f4a8a8"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class ListPartnershipsCommand extends $Command
  .classBuilder<
    ListPartnershipsCommandInput,
    ListPartnershipsCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "ListPartnerships", {})
  .n("B2biClient", "ListPartnershipsCommand")
  .f(void 0, void 0)
  .ser(se_ListPartnershipsCommand)
  .de(de_ListPartnershipsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPartnershipsRequest;
      output: ListPartnershipsResponse;
    };
    sdk: {
      input: ListPartnershipsCommandInput;
      output: ListPartnershipsCommandOutput;
    };
  };
}
