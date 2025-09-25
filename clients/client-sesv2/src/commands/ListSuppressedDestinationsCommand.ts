// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSuppressedDestinationsRequest, ListSuppressedDestinationsResponse } from "../models/models_1";
import { ListSuppressedDestinations } from "../schemas/schemas_4_ConfigurationSet";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSuppressedDestinationsCommand}.
 */
export interface ListSuppressedDestinationsCommandInput extends ListSuppressedDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSuppressedDestinationsCommand}.
 */
export interface ListSuppressedDestinationsCommandOutput extends ListSuppressedDestinationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of email addresses that are on the suppression list for your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListSuppressedDestinationsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListSuppressedDestinationsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // ListSuppressedDestinationsRequest
 *   Reasons: [ // SuppressionListReasons
 *     "BOUNCE" || "COMPLAINT",
 *   ],
 *   StartDate: new Date("TIMESTAMP"),
 *   EndDate: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListSuppressedDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSuppressedDestinationsResponse
 * //   SuppressedDestinationSummaries: [ // SuppressedDestinationSummaries
 * //     { // SuppressedDestinationSummary
 * //       EmailAddress: "STRING_VALUE", // required
 * //       Reason: "BOUNCE" || "COMPLAINT", // required
 * //       LastUpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSuppressedDestinationsCommandInput - {@link ListSuppressedDestinationsCommandInput}
 * @returns {@link ListSuppressedDestinationsCommandOutput}
 * @see {@link ListSuppressedDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListSuppressedDestinationsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified request includes an invalid or expired token.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class ListSuppressedDestinationsCommand extends $Command
  .classBuilder<
    ListSuppressedDestinationsCommandInput,
    ListSuppressedDestinationsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "ListSuppressedDestinations", {})
  .n("SESv2Client", "ListSuppressedDestinationsCommand")
  .sc(ListSuppressedDestinations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSuppressedDestinationsRequest;
      output: ListSuppressedDestinationsResponse;
    };
    sdk: {
      input: ListSuppressedDestinationsCommandInput;
      output: ListSuppressedDestinationsCommandOutput;
    };
  };
}
