// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateProfileRequest,
  CreateProfileRequestFilterSensitiveLog,
  CreateProfileResponse,
  CreateProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateProfileCommand, se_CreateProfileCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandInput extends CreateProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandOutput extends CreateProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a customer profile. You can have up to five customer profiles, each representing a distinct private network. A profile is the mechanism used to create the concept of a private network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, CreateProfileCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, CreateProfileCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // CreateProfileRequest
 *   name: "STRING_VALUE", // required
 *   email: "STRING_VALUE",
 *   phone: "STRING_VALUE", // required
 *   businessName: "STRING_VALUE", // required
 *   logging: "ENABLED" || "DISABLED", // required
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfileResponse
 * //   profileId: "STRING_VALUE", // required
 * //   profileArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   businessName: "STRING_VALUE", // required
 * //   phone: "STRING_VALUE", // required
 * //   email: "STRING_VALUE",
 * //   logging: "ENABLED" || "DISABLED",
 * //   logGroupName: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateProfileCommandInput - {@link CreateProfileCommandInput}
 * @returns {@link CreateProfileCommandOutput}
 * @see {@link CreateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProfileCommandOutput} for command's `response` shape.
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
 *
 * @example Sample CreateProfile call
 * ```javascript
 * //
 * const input = {
 *   businessName: "John's Shipping",
 *   clientToken: "foo",
 *   email: "john@example.com",
 *   logging: "ENABLED",
 *   name: "Shipping Profile",
 *   phone: "5555555555",
 *   tags: [
 *     {
 *       Key: "sampleKey",
 *       Value: "sampleValue"
 *     }
 *   ]
 * };
 * const command = new CreateProfileCommand(input);
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
export class CreateProfileCommand extends $Command
  .classBuilder<
    CreateProfileCommandInput,
    CreateProfileCommandOutput,
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
  .s("B2BI", "CreateProfile", {})
  .n("B2biClient", "CreateProfileCommand")
  .f(CreateProfileRequestFilterSensitiveLog, CreateProfileResponseFilterSensitiveLog)
  .ser(se_CreateProfileCommand)
  .de(de_CreateProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProfileRequest;
      output: CreateProfileResponse;
    };
    sdk: {
      input: CreateProfileCommandInput;
      output: CreateProfileCommandOutput;
    };
  };
}
