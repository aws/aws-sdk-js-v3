// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateResourceFromProfileRequest, DisassociateResourceFromProfileResponse } from "../models/models_0";
import { Route53ProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ProfilesClient";
import { DisassociateResourceFromProfile } from "../schemas/schemas_3_Profile";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateResourceFromProfileCommand}.
 */
export interface DisassociateResourceFromProfileCommandInput extends DisassociateResourceFromProfileRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResourceFromProfileCommand}.
 */
export interface DisassociateResourceFromProfileCommandOutput
  extends DisassociateResourceFromProfileResponse,
    __MetadataBearer {}

/**
 * <p>
 *   Dissoaciated a specified resource, from the Route 53 Profile.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, DisassociateResourceFromProfileCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, DisassociateResourceFromProfileCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // DisassociateResourceFromProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateResourceFromProfileCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateResourceFromProfileResponse
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
 * @param DisassociateResourceFromProfileCommandInput - {@link DisassociateResourceFromProfileCommandInput}
 * @returns {@link DisassociateResourceFromProfileCommandOutput}
 * @see {@link DisassociateResourceFromProfileCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceFromProfileCommandOutput} for command's `response` shape.
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
export class DisassociateResourceFromProfileCommand extends $Command
  .classBuilder<
    DisassociateResourceFromProfileCommandInput,
    DisassociateResourceFromProfileCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Profiles", "DisassociateResourceFromProfile", {})
  .n("Route53ProfilesClient", "DisassociateResourceFromProfileCommand")
  .sc(DisassociateResourceFromProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateResourceFromProfileRequest;
      output: DisassociateResourceFromProfileResponse;
    };
    sdk: {
      input: DisassociateResourceFromProfileCommandInput;
      output: DisassociateResourceFromProfileCommandOutput;
    };
  };
}
