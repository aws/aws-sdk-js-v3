// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIdNamespaceAssociationInput, GetIdNamespaceAssociationOutput } from "../models/models_0";
import { GetIdNamespaceAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdNamespaceAssociationCommand}.
 */
export interface GetIdNamespaceAssociationCommandInput extends GetIdNamespaceAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetIdNamespaceAssociationCommand}.
 */
export interface GetIdNamespaceAssociationCommandOutput extends GetIdNamespaceAssociationOutput, __MetadataBearer {}

/**
 * <p>Retrieves an ID namespace association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetIdNamespaceAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetIdNamespaceAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetIdNamespaceAssociationInput
 *   idNamespaceAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetIdNamespaceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetIdNamespaceAssociationOutput
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
 * @param GetIdNamespaceAssociationCommandInput - {@link GetIdNamespaceAssociationCommandInput}
 * @returns {@link GetIdNamespaceAssociationCommandOutput}
 * @see {@link GetIdNamespaceAssociationCommandInput} for command's `input` shape.
 * @see {@link GetIdNamespaceAssociationCommandOutput} for command's `response` shape.
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
export class GetIdNamespaceAssociationCommand extends $Command
  .classBuilder<
    GetIdNamespaceAssociationCommandInput,
    GetIdNamespaceAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetIdNamespaceAssociation", {})
  .n("CleanRoomsClient", "GetIdNamespaceAssociationCommand")
  .sc(GetIdNamespaceAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdNamespaceAssociationInput;
      output: GetIdNamespaceAssociationOutput;
    };
    sdk: {
      input: GetIdNamespaceAssociationCommandInput;
      output: GetIdNamespaceAssociationCommandOutput;
    };
  };
}
