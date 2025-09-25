// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateIdNamespaceAssociationInput, UpdateIdNamespaceAssociationOutput } from "../models/models_0";
import { UpdateIdNamespaceAssociation } from "../schemas/schemas_13_IdNamespace";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdNamespaceAssociationCommand}.
 */
export interface UpdateIdNamespaceAssociationCommandInput extends UpdateIdNamespaceAssociationInput {}
/**
 * @public
 *
 * The output of {@link UpdateIdNamespaceAssociationCommand}.
 */
export interface UpdateIdNamespaceAssociationCommandOutput
  extends UpdateIdNamespaceAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Provides the details that are necessary to update an ID namespace association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateIdNamespaceAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateIdNamespaceAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateIdNamespaceAssociationInput
 *   idNamespaceAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   idMappingConfig: { // IdMappingConfig
 *     allowUseAsDimensionColumn: true || false, // required
 *   },
 * };
 * const command = new UpdateIdNamespaceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdNamespaceAssociationOutput
 * //   idNamespaceAssociation: { // IdNamespaceAssociation
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
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
 * @param UpdateIdNamespaceAssociationCommandInput - {@link UpdateIdNamespaceAssociationCommandInput}
 * @returns {@link UpdateIdNamespaceAssociationCommandOutput}
 * @see {@link UpdateIdNamespaceAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateIdNamespaceAssociationCommandOutput} for command's `response` shape.
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
export class UpdateIdNamespaceAssociationCommand extends $Command
  .classBuilder<
    UpdateIdNamespaceAssociationCommandInput,
    UpdateIdNamespaceAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "UpdateIdNamespaceAssociation", {})
  .n("CleanRoomsClient", "UpdateIdNamespaceAssociationCommand")
  .sc(UpdateIdNamespaceAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdNamespaceAssociationInput;
      output: UpdateIdNamespaceAssociationOutput;
    };
    sdk: {
      input: UpdateIdNamespaceAssociationCommandInput;
      output: UpdateIdNamespaceAssociationCommandOutput;
    };
  };
}
