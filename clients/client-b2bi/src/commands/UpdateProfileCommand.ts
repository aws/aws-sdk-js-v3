// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateProfileRequest,
  UpdateProfileRequestFilterSensitiveLog,
  UpdateProfileResponse,
  UpdateProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateProfileCommand, se_UpdateProfileCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandInput extends UpdateProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandOutput extends UpdateProfileResponse, __MetadataBearer {}

/**
 * <p>Updates the specified parameters for a profile. A profile is the mechanism used to create the concept of
 *    a private network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, UpdateProfileCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, UpdateProfileCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // UpdateProfileRequest
 *   profileId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   email: "STRING_VALUE",
 *   phone: "STRING_VALUE",
 *   businessName: "STRING_VALUE",
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileResponse
 * //   profileId: "STRING_VALUE", // required
 * //   profileArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   email: "STRING_VALUE",
 * //   phone: "STRING_VALUE", // required
 * //   businessName: "STRING_VALUE", // required
 * //   logging: "ENABLED" || "DISABLED",
 * //   logGroupName: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   modifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateProfileCommandInput - {@link UpdateProfileCommandInput}
 * @returns {@link UpdateProfileCommandOutput}
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
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
 * @example Sample UpdateProfile call
 * ```javascript
 * //
 * const input = {
 *   "name": "Shipping Profile",
 *   "businessName": "John's Shipping",
 *   "email": "john@example.com",
 *   "phone": "5555555555",
 *   "profileId": "p-60fbc37c87f04fce9"
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "Shipping Profile",
 *   "businessName": "John's Trucking",
 *   "createdAt": "2023-11-01T21:51:05.504Z",
 *   "email": "john@example.com",
 *   "logGroupName": "b2bi/p-60fbc37c87f04fce9-Logs",
 *   "logging": "ENABLED",
 *   "modifiedAt": "2023-11-02T21:51:05.504Z",
 *   "phone": "5555555555",
 *   "profileArn": "arn:aws:b2bi:us-west-2:123456789012:profile/p-60fbc37c87f04fce9",
 *   "profileId": "p-60fbc37c87f04fce9"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class UpdateProfileCommand extends $Command
  .classBuilder<
    UpdateProfileCommandInput,
    UpdateProfileCommandOutput,
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
  .s("B2BI", "UpdateProfile", {})
  .n("B2biClient", "UpdateProfileCommand")
  .f(UpdateProfileRequestFilterSensitiveLog, UpdateProfileResponseFilterSensitiveLog)
  .ser(se_UpdateProfileCommand)
  .de(de_UpdateProfileCommand)
  .build() {}
