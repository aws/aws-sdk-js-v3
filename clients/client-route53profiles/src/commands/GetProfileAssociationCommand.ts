// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetProfileAssociationRequest, GetProfileAssociationResponse } from "../models/models_0";
import { de_GetProfileAssociationCommand, se_GetProfileAssociationCommand } from "../protocols/Aws_restJson1";
import { Route53ProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ProfilesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileAssociationCommand}.
 */
export interface GetProfileAssociationCommandInput extends GetProfileAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileAssociationCommand}.
 */
export interface GetProfileAssociationCommandOutput extends GetProfileAssociationResponse, __MetadataBearer {}

/**
 * <p>
 *   Retrieves a Route 53 Profile association for a VPC. A VPC can have only one Profile association, but a Profile can be associated with up to 5000 VPCs.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, GetProfileAssociationCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, GetProfileAssociationCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * const client = new Route53ProfilesClient(config);
 * const input = { // GetProfileAssociationRequest
 *   ProfileAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetProfileAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileAssociationResponse
 * //   ProfileAssociation: { // ProfileAssociation
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     ProfileId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING" || "CREATING" || "DELETED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ModificationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProfileAssociationCommandInput - {@link GetProfileAssociationCommandInput}
 * @returns {@link GetProfileAssociationCommandOutput}
 * @see {@link GetProfileAssociationCommandInput} for command's `input` shape.
 * @see {@link GetProfileAssociationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetProfileAssociationCommand extends $Command
  .classBuilder<
    GetProfileAssociationCommandInput,
    GetProfileAssociationCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Profiles", "GetProfileAssociation", {})
  .n("Route53ProfilesClient", "GetProfileAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetProfileAssociationCommand)
  .de(de_GetProfileAssociationCommand)
  .build() {}
