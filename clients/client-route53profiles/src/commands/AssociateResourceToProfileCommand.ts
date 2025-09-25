// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateResourceToProfileRequest, AssociateResourceToProfileResponse } from "../models/models_0";
import { Route53ProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ProfilesClient";
import { AssociateResourceToProfile } from "../schemas/schemas_3_Profile";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateResourceToProfileCommand}.
 */
export interface AssociateResourceToProfileCommandInput extends AssociateResourceToProfileRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceToProfileCommand}.
 */
export interface AssociateResourceToProfileCommandOutput extends AssociateResourceToProfileResponse, __MetadataBearer {}

/**
 * <p>
 *   Associates a DNS reource configuration to a Route 53 Profile.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, AssociateResourceToProfileCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, AssociateResourceToProfileCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // AssociateResourceToProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ResourceProperties: "STRING_VALUE",
 * };
 * const command = new AssociateResourceToProfileCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResourceToProfileResponse
 * //   ProfileResourceAssociation: { // ProfileResourceAssociation
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     ProfileId: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     ResourceType: "STRING_VALUE",
 * //     ResourceProperties: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING" || "CREATING" || "DELETED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ModificationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateResourceToProfileCommandInput - {@link AssociateResourceToProfileCommandInput}
 * @returns {@link AssociateResourceToProfileCommandOutput}
 * @see {@link AssociateResourceToProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceToProfileCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *   The current account doesn't have the IAM permissions required to perform the specified operation.
 * </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 * The request you submitted conflicts with an existing request.
 * </p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>
 * An internal server error occured. Retry your request.
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
export class AssociateResourceToProfileCommand extends $Command
  .classBuilder<
    AssociateResourceToProfileCommandInput,
    AssociateResourceToProfileCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Profiles", "AssociateResourceToProfile", {})
  .n("Route53ProfilesClient", "AssociateResourceToProfileCommand")
  .sc(AssociateResourceToProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResourceToProfileRequest;
      output: AssociateResourceToProfileResponse;
    };
    sdk: {
      input: AssociateResourceToProfileCommandInput;
      output: AssociateResourceToProfileCommandOutput;
    };
  };
}
