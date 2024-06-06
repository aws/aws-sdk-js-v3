// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSuppressedDestinationRequest, GetSuppressedDestinationResponse } from "../models/models_0";
import { de_GetSuppressedDestinationCommand, se_GetSuppressedDestinationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSuppressedDestinationCommand}.
 */
export interface GetSuppressedDestinationCommandInput extends GetSuppressedDestinationRequest {}
/**
 * @public
 *
 * The output of {@link GetSuppressedDestinationCommand}.
 */
export interface GetSuppressedDestinationCommandOutput extends GetSuppressedDestinationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific email address that's on the suppression list
 *             for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetSuppressedDestinationRequest
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new GetSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetSuppressedDestinationResponse
 * //   SuppressedDestination: { // SuppressedDestination
 * //     EmailAddress: "STRING_VALUE", // required
 * //     Reason: "BOUNCE" || "COMPLAINT", // required
 * //     LastUpdateTime: new Date("TIMESTAMP"), // required
 * //     Attributes: { // SuppressedDestinationAttributes
 * //       MessageId: "STRING_VALUE",
 * //       FeedbackId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSuppressedDestinationCommandInput - {@link GetSuppressedDestinationCommandInput}
 * @returns {@link GetSuppressedDestinationCommandOutput}
 * @see {@link GetSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link GetSuppressedDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @public
 */
export class GetSuppressedDestinationCommand extends $Command
  .classBuilder<
    GetSuppressedDestinationCommandInput,
    GetSuppressedDestinationCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "GetSuppressedDestination", {})
  .n("SESv2Client", "GetSuppressedDestinationCommand")
  .f(void 0, void 0)
  .ser(se_GetSuppressedDestinationCommand)
  .de(de_GetSuppressedDestinationCommand)
  .build() {}
