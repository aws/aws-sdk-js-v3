// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetProfileRequest, GetProfileResponse } from "../models/models_0";
import type {
  Route53ProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ProfilesClient";
import { GetProfile } from "../schemas/schemas_0";

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
 * <p>
 *   Returns information about a specified Route 53 Profile, such as whether whether the Profile is shared, and the current status of the Profile.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, GetProfileCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, GetProfileCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // GetProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileResponse
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
 * @param GetProfileCommandInput - {@link GetProfileCommandInput}
 * @returns {@link GetProfileCommandOutput}
 * @see {@link GetProfileCommandInput} for command's `input` shape.
 * @see {@link GetProfileCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *   The current account doesn't have the IAM permissions required to perform the specified operation.
 * </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 * The resource you are associating is not found.
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
export class GetProfileCommand extends $Command
  .classBuilder<
    GetProfileCommandInput,
    GetProfileCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Profiles", "GetProfile", {})
  .n("Route53ProfilesClient", "GetProfileCommand")
  .sc(GetProfile)
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
