// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdatePartnershipRequest,
  UpdatePartnershipResponse,
  UpdatePartnershipResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdatePartnershipCommand, se_UpdatePartnershipCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePartnershipCommand}.
 */
export interface UpdatePartnershipCommandInput extends UpdatePartnershipRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePartnershipCommand}.
 */
export interface UpdatePartnershipCommandOutput extends UpdatePartnershipResponse, __MetadataBearer {}

/**
 * <p>Updates some of the parameters for a partnership between a customer and trading partner. A partnership represents the connection between you and your trading partner. It ties
 *    together a profile and one or more trading capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, UpdatePartnershipCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, UpdatePartnershipCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // UpdatePartnershipRequest
 *   partnershipId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   capabilities: [ // PartnershipCapabilities
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdatePartnershipCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePartnershipResponse
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
 * @param UpdatePartnershipCommandInput - {@link UpdatePartnershipCommandInput}
 * @returns {@link UpdatePartnershipCommandOutput}
 * @see {@link UpdatePartnershipCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnershipCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when the calling command attempts to exceed one of the service quotas, for example trying to create a capability when you already have the maximum number of capabilities allowed.</p>
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
 * @example Sample UpdatePartnership call
 * ```javascript
 * //
 * const input = {
 *   "name": "b2bipartner",
 *   "capabilities": [
 *     "ca-963a8121e4fc4e348"
 *   ],
 *   "partnershipId": "ps-219fa02f5b4242af8"
 * };
 * const command = new UpdatePartnershipCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "b2bipartner",
 *   "capabilities": [
 *     "ca-963a8121e4fc4e348"
 *   ],
 *   "createdAt": "2023-11-01T21:51:05.504Z",
 *   "email": "john@example.com",
 *   "modifiedAt": "2023-11-01T21:51:05.504Z",
 *   "partnershipArn": "arn:aws:b2bi:us-west-2:123456789012:partnership/ps-60fbc37c87f04fce9",
 *   "partnershipId": "ps-219fa02f5b4242af8",
 *   "phone": "5555555555",
 *   "profileId": "p-60fbc37c87f04fce9",
 *   "tradingPartnerId": "tp-2a17ca447f6f4a8a8"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class UpdatePartnershipCommand extends $Command
  .classBuilder<
    UpdatePartnershipCommandInput,
    UpdatePartnershipCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "UpdatePartnership", {})
  .n("B2biClient", "UpdatePartnershipCommand")
  .f(void 0, UpdatePartnershipResponseFilterSensitiveLog)
  .ser(se_UpdatePartnershipCommand)
  .de(de_UpdatePartnershipCommand)
  .build() {}
