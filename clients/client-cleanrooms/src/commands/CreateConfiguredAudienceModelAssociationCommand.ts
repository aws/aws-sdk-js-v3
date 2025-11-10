// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateConfiguredAudienceModelAssociationInput,
  CreateConfiguredAudienceModelAssociationOutput,
} from "../models/models_0";
import { CreateConfiguredAudienceModelAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredAudienceModelAssociationCommand}.
 */
export interface CreateConfiguredAudienceModelAssociationCommandInput
  extends CreateConfiguredAudienceModelAssociationInput {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredAudienceModelAssociationCommand}.
 */
export interface CreateConfiguredAudienceModelAssociationCommandOutput
  extends CreateConfiguredAudienceModelAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Provides the details necessary to create a configured audience model association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredAudienceModelAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredAudienceModelAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateConfiguredAudienceModelAssociationInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 *   configuredAudienceModelAssociationName: "STRING_VALUE", // required
 *   manageResourcePolicies: true || false, // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateConfiguredAudienceModelAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredAudienceModelAssociationOutput
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
 * @param CreateConfiguredAudienceModelAssociationCommandInput - {@link CreateConfiguredAudienceModelAssociationCommandInput}
 * @returns {@link CreateConfiguredAudienceModelAssociationCommandOutput}
 * @see {@link CreateConfiguredAudienceModelAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredAudienceModelAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
export class CreateConfiguredAudienceModelAssociationCommand extends $Command
  .classBuilder<
    CreateConfiguredAudienceModelAssociationCommandInput,
    CreateConfiguredAudienceModelAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreateConfiguredAudienceModelAssociation", {})
  .n("CleanRoomsClient", "CreateConfiguredAudienceModelAssociationCommand")
  .sc(CreateConfiguredAudienceModelAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredAudienceModelAssociationInput;
      output: CreateConfiguredAudienceModelAssociationOutput;
    };
    sdk: {
      input: CreateConfiguredAudienceModelAssociationCommandInput;
      output: CreateConfiguredAudienceModelAssociationCommandOutput;
    };
  };
}
