// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConfiguredTableAssociationInput, UpdateConfiguredTableAssociationOutput } from "../models/models_0";
import { UpdateConfiguredTableAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfiguredTableAssociationCommand}.
 */
export interface UpdateConfiguredTableAssociationCommandInput extends UpdateConfiguredTableAssociationInput {}
/**
 * @public
 *
 * The output of {@link UpdateConfiguredTableAssociationCommand}.
 */
export interface UpdateConfiguredTableAssociationCommandOutput
  extends UpdateConfiguredTableAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Updates a configured table association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateConfiguredTableAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateConfiguredTableAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateConfiguredTableAssociationInput
 *   configuredTableAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateConfiguredTableAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConfiguredTableAssociationOutput
 * //   configuredTableAssociation: { // ConfiguredTableAssociation
 * //     arn: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     configuredTableId: "STRING_VALUE", // required
 * //     configuredTableArn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     analysisRuleTypes: [ // ConfiguredTableAssociationAnalysisRuleTypeList
 * //       "AGGREGATION" || "LIST" || "CUSTOM",
 * //     ],
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateConfiguredTableAssociationCommandInput - {@link UpdateConfiguredTableAssociationCommandInput}
 * @returns {@link UpdateConfiguredTableAssociationCommandOutput}
 * @see {@link UpdateConfiguredTableAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfiguredTableAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class UpdateConfiguredTableAssociationCommand extends $Command
  .classBuilder<
    UpdateConfiguredTableAssociationCommandInput,
    UpdateConfiguredTableAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "UpdateConfiguredTableAssociation", {})
  .n("CleanRoomsClient", "UpdateConfiguredTableAssociationCommand")
  .sc(UpdateConfiguredTableAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfiguredTableAssociationInput;
      output: UpdateConfiguredTableAssociationOutput;
    };
    sdk: {
      input: UpdateConfiguredTableAssociationCommandInput;
      output: UpdateConfiguredTableAssociationCommandOutput;
    };
  };
}
