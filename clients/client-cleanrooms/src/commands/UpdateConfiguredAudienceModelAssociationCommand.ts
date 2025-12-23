// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateConfiguredAudienceModelAssociationInput,
  UpdateConfiguredAudienceModelAssociationOutput,
} from "../models/models_0";
import { UpdateConfiguredAudienceModelAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfiguredAudienceModelAssociationCommand}.
 */
export interface UpdateConfiguredAudienceModelAssociationCommandInput extends UpdateConfiguredAudienceModelAssociationInput {}
/**
 * @public
 *
 * The output of {@link UpdateConfiguredAudienceModelAssociationCommand}.
 */
export interface UpdateConfiguredAudienceModelAssociationCommandOutput extends UpdateConfiguredAudienceModelAssociationOutput, __MetadataBearer {}

/**
 * <p>Provides the details necessary to update a configured audience model association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateConfiguredAudienceModelAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateConfiguredAudienceModelAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateConfiguredAudienceModelAssociationInput
 *   configuredAudienceModelAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE",
 * };
 * const command = new UpdateConfiguredAudienceModelAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConfiguredAudienceModelAssociationOutput
 * //   configuredAudienceModelAssociation: { // ConfiguredAudienceModelAssociation
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     configuredAudienceModelArn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     manageResourcePolicies: true || false, // required
 * //     description: "STRING_VALUE",
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateConfiguredAudienceModelAssociationCommandInput - {@link UpdateConfiguredAudienceModelAssociationCommandInput}
 * @returns {@link UpdateConfiguredAudienceModelAssociationCommandOutput}
 * @see {@link UpdateConfiguredAudienceModelAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfiguredAudienceModelAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class UpdateConfiguredAudienceModelAssociationCommand extends $Command
  .classBuilder<
    UpdateConfiguredAudienceModelAssociationCommandInput,
    UpdateConfiguredAudienceModelAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "UpdateConfiguredAudienceModelAssociation", {})
  .n("CleanRoomsClient", "UpdateConfiguredAudienceModelAssociationCommand")
  .sc(UpdateConfiguredAudienceModelAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfiguredAudienceModelAssociationInput;
      output: UpdateConfiguredAudienceModelAssociationOutput;
    };
    sdk: {
      input: UpdateConfiguredAudienceModelAssociationCommandInput;
      output: UpdateConfiguredAudienceModelAssociationCommandOutput;
    };
  };
}
