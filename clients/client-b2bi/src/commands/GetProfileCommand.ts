// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetProfileRequest, GetProfileResponse, GetProfileResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetProfileCommand, se_GetProfileCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileCommand}.
 */
export interface GetProfileCommandInput extends GetProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileCommand}.
 */
export interface GetProfileCommandOutput extends GetProfileResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details for the profile specified by the profile ID. A profile is the mechanism used to create the concept of
 *    a private network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, GetProfileCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, GetProfileCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // GetProfileRequest
 *   profileId: "STRING_VALUE", // required
 * };
 * const command = new GetProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileResponse
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
 * @param GetProfileCommandInput - {@link GetProfileCommandInput}
 * @returns {@link GetProfileCommandOutput}
 * @see {@link GetProfileCommandInput} for command's `input` shape.
 * @see {@link GetProfileCommandOutput} for command's `response` shape.
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
 * @example Sample GetProfile call
 * ```javascript
 * //
 * const input = {
 *   profileId: "p-60fbc37c87f04fce9"
 * };
 * const command = new GetProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   businessName: "John's Trucking",
 *   createdAt: "2023-11-01T21:51:05.504Z",
 *   email: "john@example.com",
 *   logGroupName: "b2bi/p-60fbc37c87f04fce9-Logs",
 *   logging: "ENABLED",
 *   name: "Shipping Profile",
 *   phone: "5555555555",
 *   profileArn: "arn:aws:b2bi:us-west-2:123456789012:profile/p-60fbc37c87f04fce9",
 *   profileId: "p-60fbc37c87f04fce9"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetProfileCommand extends $Command
  .classBuilder<
    GetProfileCommandInput,
    GetProfileCommandOutput,
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
  .s("B2BI", "GetProfile", {})
  .n("B2biClient", "GetProfileCommand")
  .f(void 0, GetProfileResponseFilterSensitiveLog)
  .ser(se_GetProfileCommand)
  .de(de_GetProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProfileRequest;
      output: GetProfileResponse;
    };
    sdk: {
      input: GetProfileCommandInput;
      output: GetProfileCommandOutput;
    };
  };
}
