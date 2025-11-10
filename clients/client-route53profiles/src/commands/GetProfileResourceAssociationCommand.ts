// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetProfileResourceAssociationRequest, GetProfileResourceAssociationResponse } from "../models/models_0";
import { Route53ProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ProfilesClient";
import { GetProfileResourceAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileResourceAssociationCommand}.
 */
export interface GetProfileResourceAssociationCommandInput extends GetProfileResourceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileResourceAssociationCommand}.
 */
export interface GetProfileResourceAssociationCommandOutput
  extends GetProfileResourceAssociationResponse,
    __MetadataBearer {}

/**
 * <p>
 *   Returns information about a specified Route 53 Profile resource association.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, GetProfileResourceAssociationCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, GetProfileResourceAssociationCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // GetProfileResourceAssociationRequest
 *   ProfileResourceAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetProfileResourceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileResourceAssociationResponse
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
 * @param GetProfileResourceAssociationCommandInput - {@link GetProfileResourceAssociationCommandInput}
 * @returns {@link GetProfileResourceAssociationCommandOutput}
 * @see {@link GetProfileResourceAssociationCommandInput} for command's `input` shape.
 * @see {@link GetProfileResourceAssociationCommandOutput} for command's `response` shape.
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
export class GetProfileResourceAssociationCommand extends $Command
  .classBuilder<
    GetProfileResourceAssociationCommandInput,
    GetProfileResourceAssociationCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Profiles", "GetProfileResourceAssociation", {})
  .n("Route53ProfilesClient", "GetProfileResourceAssociationCommand")
  .sc(GetProfileResourceAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProfileResourceAssociationRequest;
      output: GetProfileResourceAssociationResponse;
    };
    sdk: {
      input: GetProfileResourceAssociationCommandInput;
      output: GetProfileResourceAssociationCommandOutput;
    };
  };
}
