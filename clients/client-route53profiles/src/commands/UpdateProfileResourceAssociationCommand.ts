// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateProfileResourceAssociationRequest,
  UpdateProfileResourceAssociationResponse,
} from "../models/models_0";
import type {
  Route53ProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ProfilesClient";
import { UpdateProfileResourceAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileResourceAssociationCommand}.
 */
export interface UpdateProfileResourceAssociationCommandInput extends UpdateProfileResourceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileResourceAssociationCommand}.
 */
export interface UpdateProfileResourceAssociationCommandOutput
  extends UpdateProfileResourceAssociationResponse,
    __MetadataBearer {}

/**
 * <p>
 * Updates the specified Route 53 Profile resourse association.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, UpdateProfileResourceAssociationCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, UpdateProfileResourceAssociationCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // UpdateProfileResourceAssociationRequest
 *   ProfileResourceAssociationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   ResourceProperties: "STRING_VALUE",
 * };
 * const command = new UpdateProfileResourceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileResourceAssociationResponse
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
 * @param UpdateProfileResourceAssociationCommandInput - {@link UpdateProfileResourceAssociationCommandInput}
 * @returns {@link UpdateProfileResourceAssociationCommandOutput}
 * @see {@link UpdateProfileResourceAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileResourceAssociationCommandOutput} for command's `response` shape.
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
export class UpdateProfileResourceAssociationCommand extends $Command
  .classBuilder<
    UpdateProfileResourceAssociationCommandInput,
    UpdateProfileResourceAssociationCommandOutput,
    Route53ProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Profiles", "UpdateProfileResourceAssociation", {})
  .n("Route53ProfilesClient", "UpdateProfileResourceAssociationCommand")
  .sc(UpdateProfileResourceAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProfileResourceAssociationRequest;
      output: UpdateProfileResourceAssociationResponse;
    };
    sdk: {
      input: UpdateProfileResourceAssociationCommandInput;
      output: UpdateProfileResourceAssociationCommandOutput;
    };
  };
}
