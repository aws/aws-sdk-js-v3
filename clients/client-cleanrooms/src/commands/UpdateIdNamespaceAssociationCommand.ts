// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIdNamespaceAssociationInput, UpdateIdNamespaceAssociationOutput } from "../models/models_0";
import { UpdateIdNamespaceAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateIdNamespaceAssociationCommandOutput extends UpdateIdNamespaceAssociationOutput, __MetadataBearer {}

/**
 * Provides the details that are necessary to update an ID namespace association.
 *
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
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class UpdateIdNamespaceAssociationCommand extends command<UpdateIdNamespaceAssociationCommandInput, UpdateIdNamespaceAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIdNamespaceAssociation",
  UpdateIdNamespaceAssociation$
) {
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
