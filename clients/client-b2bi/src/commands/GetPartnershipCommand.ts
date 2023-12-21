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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves the details for a partnership, based on the partner and profile IDs specified. A partnership represents the connection between you and your trading partner. It ties
 *    together a profile and one or more trading capabilities.</p>
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
 */
export class GetPartnershipCommand extends $Command
  .classBuilder<
    GetPartnershipCommandInput,
    GetPartnershipCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: B2biClientResolvedConfig) {
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
  .build() {}
