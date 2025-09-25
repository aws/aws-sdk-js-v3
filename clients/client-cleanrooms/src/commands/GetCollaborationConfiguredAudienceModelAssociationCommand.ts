// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCollaborationConfiguredAudienceModelAssociationInput,
  GetCollaborationConfiguredAudienceModelAssociationOutput,
} from "../models/models_0";
import { GetCollaborationConfiguredAudienceModelAssociation } from "../schemas/schemas_6_Audience";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationConfiguredAudienceModelAssociationCommand}.
 */
export interface GetCollaborationConfiguredAudienceModelAssociationCommandInput
  extends GetCollaborationConfiguredAudienceModelAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationConfiguredAudienceModelAssociationCommand}.
 */
export interface GetCollaborationConfiguredAudienceModelAssociationCommandOutput
  extends GetCollaborationConfiguredAudienceModelAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves a configured audience model association within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationConfiguredAudienceModelAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationConfiguredAudienceModelAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationConfiguredAudienceModelAssociationInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   configuredAudienceModelAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationConfiguredAudienceModelAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationConfiguredAudienceModelAssociationOutput
 * //   collaborationConfiguredAudienceModelAssociation: { // CollaborationConfiguredAudienceModelAssociation
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     configuredAudienceModelArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationConfiguredAudienceModelAssociationCommandInput - {@link GetCollaborationConfiguredAudienceModelAssociationCommandInput}
 * @returns {@link GetCollaborationConfiguredAudienceModelAssociationCommandOutput}
 * @see {@link GetCollaborationConfiguredAudienceModelAssociationCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationConfiguredAudienceModelAssociationCommandOutput} for command's `response` shape.
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
export class GetCollaborationConfiguredAudienceModelAssociationCommand extends $Command
  .classBuilder<
    GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    GetCollaborationConfiguredAudienceModelAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetCollaborationConfiguredAudienceModelAssociation", {})
  .n("CleanRoomsClient", "GetCollaborationConfiguredAudienceModelAssociationCommand")
  .sc(GetCollaborationConfiguredAudienceModelAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationConfiguredAudienceModelAssociationInput;
      output: GetCollaborationConfiguredAudienceModelAssociationOutput;
    };
    sdk: {
      input: GetCollaborationConfiguredAudienceModelAssociationCommandInput;
      output: GetCollaborationConfiguredAudienceModelAssociationCommandOutput;
    };
  };
}
