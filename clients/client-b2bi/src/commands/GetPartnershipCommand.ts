// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetPartnershipRequest,
  GetPartnershipResponse,
  GetPartnershipResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPartnershipCommand, se_GetPartnershipCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPartnershipCommand}.
 */
export interface GetPartnershipCommandInput extends GetPartnershipRequest {}
/**
 * @public
 *
 * The output of {@link GetPartnershipCommand}.
 */
export interface GetPartnershipCommandOutput extends GetPartnershipResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details for a partnership, based on the partner and profile IDs specified. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, GetPartnershipCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, GetPartnershipCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // GetPartnershipRequest
 *   partnershipId: "STRING_VALUE", // required
 * };
 * const command = new GetPartnershipCommand(input);
 * const response = await client.send(command);
 * // { // GetPartnershipResponse
 * //   profileId: "STRING_VALUE", // required
 * //   partnershipId: "STRING_VALUE", // required
 * //   partnershipArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   email: "STRING_VALUE",
 * //   phone: "STRING_VALUE",
 * //   capabilities: [ // PartnershipCapabilities
 * //     "STRING_VALUE",
 * //   ],
 * //   capabilityOptions: { // CapabilityOptions
 * //     outboundEdi: { // OutboundEdiOptions Union: only one key present
 * //       x12: { // X12Envelope
 * //         common: { // X12OutboundEdiHeaders
 * //           interchangeControlHeaders: { // X12InterchangeControlHeaders
 * //             senderIdQualifier: "STRING_VALUE",
 * //             senderId: "STRING_VALUE",
 * //             receiverIdQualifier: "STRING_VALUE",
 * //             receiverId: "STRING_VALUE",
 * //             repetitionSeparator: "STRING_VALUE",
 * //             acknowledgmentRequestedCode: "STRING_VALUE",
 * //             usageIndicatorCode: "STRING_VALUE",
 * //           },
 * //           functionalGroupHeaders: { // X12FunctionalGroupHeaders
 * //             applicationSenderCode: "STRING_VALUE",
 * //             applicationReceiverCode: "STRING_VALUE",
 * //             responsibleAgencyCode: "STRING_VALUE",
 * //           },
 * //           delimiters: { // X12Delimiters
 * //             componentSeparator: "STRING_VALUE",
 * //             dataElementSeparator: "STRING_VALUE",
 * //             segmentTerminator: "STRING_VALUE",
 * //           },
 * //           validateEdi: true || false,
 * //           controlNumbers: { // X12ControlNumbers
 * //             startingInterchangeControlNumber: Number("int"),
 * //             startingFunctionalGroupControlNumber: Number("int"),
 * //             startingTransactionSetControlNumber: Number("int"),
 * //           },
 * //           gs05TimeFormat: "HHMM" || "HHMMSS" || "HHMMSSDD",
 * //         },
 * //         wrapOptions: { // WrapOptions
 * //           wrapBy: "SEGMENT" || "ONE_LINE" || "LINE_LENGTH", // required
 * //           lineTerminator: "CRLF" || "LF" || "CR",
 * //           lineLength: Number("int"),
 * //         },
 * //       },
 * //     },
 * //     inboundEdi: { // InboundEdiOptions
 * //       x12: { // X12InboundEdiOptions
 * //         acknowledgmentOptions: { // X12AcknowledgmentOptions
 * //           functionalAcknowledgment: "DO_NOT_GENERATE" || "GENERATE_ALL_SEGMENTS" || "GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP", // required
 * //           technicalAcknowledgment: "DO_NOT_GENERATE" || "GENERATE_ALL_SEGMENTS", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   tradingPartnerId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   modifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPartnershipCommandInput - {@link GetPartnershipCommandInput}
 * @returns {@link GetPartnershipCommandOutput}
 * @see {@link GetPartnershipCommandInput} for command's `input` shape.
 * @see {@link GetPartnershipCommandOutput} for command's `response` shape.
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
 *
 * @example Sample GetPartnership call
 * ```javascript
 * //
 * const input = {
 *   partnershipId: "ps-219fa02f5b4242af8"
 * };
 * const command = new GetPartnershipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   capabilities: [
 *     "ca-963a8121e4fc4e348"
 *   ],
 *   createdAt: "2023-11-01T21:51:05.504Z",
 *   email: "john@example.com",
 *   modifiedAt: "2023-11-01T21:51:05.504Z",
 *   name: "b2bipartner",
 *   partnershipArn: "arn:aws:b2bi:us-west-2:123456789012:partnership/ps-219fa02f5b4242af8",
 *   partnershipId: "ps-219fa02f5b4242af8",
 *   phone: "5555555555",
 *   profileId: "p-60fbc37c87f04fce9",
 *   tradingPartnerId: "tp-2a17ca447f6f4a8a8"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPartnershipCommand extends $Command
  .classBuilder<
    GetPartnershipCommandInput,
    GetPartnershipCommandOutput,
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
  .s("B2BI", "GetPartnership", {})
  .n("B2biClient", "GetPartnershipCommand")
  .f(void 0, GetPartnershipResponseFilterSensitiveLog)
  .ser(se_GetPartnershipCommand)
  .de(de_GetPartnershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPartnershipRequest;
      output: GetPartnershipResponse;
    };
    sdk: {
      input: GetPartnershipCommandInput;
      output: GetPartnershipCommandOutput;
    };
  };
}
