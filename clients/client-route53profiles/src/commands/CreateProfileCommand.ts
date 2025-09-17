// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProfileRequest, CreateProfileResponse } from "../models/models_0";
import { de_CreateProfileCommand, se_CreateProfileCommand } from "../protocols/Aws_restJson1";
import { Route53ProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ProfilesClient";

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
 * <p>
 *   Creates an empty Route 53 Profile.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, CreateProfileCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, CreateProfileCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // CreateProfileRequest
 *   Name: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfileResponse
 * //   Profile: { // Profile
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING" || "CREATING" || "DELETED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ModificationTime: new Date("TIMESTAMP"),
 * //     ClientToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateProfileCommandInput - {@link CreateProfileCommandInput}
 * @returns {@link CreateProfileCommandOutput}
 * @see {@link CreateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProfileCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *   The current account doesn't have the IAM permissions required to perform the specified operation.
 * </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>
 *   One or more parameters in this request are not valid.
 * </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>
 *   The request caused one or more limits to be exceeded.
 * </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *   The request was throttled. Try again in a few minutes.
 * </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *   You have provided an invalid command.
 * </p>
 *
 * @throws {@link Route53ProfilesServiceException}
 * <p>Base exception class for all service exceptions from Route53Profiles service.</p>
 *
 *
 * @public
 */
export class CreateProfileCommand extends $Command
  .classBuilder<
    CreateProfileCommandInput,
    CreateProfileCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Profiles", "CreateProfile", {})
  .n("Route53ProfilesClient", "CreateProfileCommand")
  .f(void 0, void 0)
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
