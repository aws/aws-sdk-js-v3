// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCollaborationIdNamespaceAssociationInput,
  GetCollaborationIdNamespaceAssociationOutput,
} from "../models/models_0";
import {
  de_GetCollaborationIdNamespaceAssociationCommand,
  se_GetCollaborationIdNamespaceAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationIdNamespaceAssociationCommand}.
 */
export interface GetCollaborationIdNamespaceAssociationCommandInput
  extends GetCollaborationIdNamespaceAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationIdNamespaceAssociationCommand}.
 */
export interface GetCollaborationIdNamespaceAssociationCommandOutput
  extends GetCollaborationIdNamespaceAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves an ID namespace association from a specific collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationIdNamespaceAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationIdNamespaceAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationIdNamespaceAssociationInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   idNamespaceAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationIdNamespaceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationIdNamespaceAssociationOutput
 * //   collaborationIdNamespaceAssociation: { // CollaborationIdNamespaceAssociation
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     inputReferenceConfig: { // IdNamespaceAssociationInputReferenceConfig
 * //       inputReferenceArn: "STRING_VALUE", // required
 * //       manageResourcePolicies: true || false, // required
 * //     },
 * //     inputReferenceProperties: { // IdNamespaceAssociationInputReferenceProperties
 * //       idNamespaceType: "SOURCE" || "TARGET", // required
 * //       idMappingWorkflowsSupported: [ // IdMappingWorkflowsSupported // required
 * //         "DOCUMENT_VALUE",
 * //       ],
 * //     },
 * //     idMappingConfig: { // IdMappingConfig
 * //       allowUseAsDimensionColumn: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationIdNamespaceAssociationCommandInput - {@link GetCollaborationIdNamespaceAssociationCommandInput}
 * @returns {@link GetCollaborationIdNamespaceAssociationCommandOutput}
 * @see {@link GetCollaborationIdNamespaceAssociationCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationIdNamespaceAssociationCommandOutput} for command's `response` shape.
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
export class GetCollaborationIdNamespaceAssociationCommand extends $Command
  .classBuilder<
    GetCollaborationIdNamespaceAssociationCommandInput,
    GetCollaborationIdNamespaceAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetCollaborationIdNamespaceAssociation", {})
  .n("CleanRoomsClient", "GetCollaborationIdNamespaceAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetCollaborationIdNamespaceAssociationCommand)
  .de(de_GetCollaborationIdNamespaceAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationIdNamespaceAssociationInput;
      output: GetCollaborationIdNamespaceAssociationOutput;
    };
    sdk: {
      input: GetCollaborationIdNamespaceAssociationCommandInput;
      output: GetCollaborationIdNamespaceAssociationCommandOutput;
    };
  };
}
