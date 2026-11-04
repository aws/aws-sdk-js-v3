// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIdNamespaceAssociationInput, CreateIdNamespaceAssociationOutput } from "../models/models_0";
import { CreateIdNamespaceAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIdNamespaceAssociationCommand}.
 */
export interface CreateIdNamespaceAssociationCommandInput extends CreateIdNamespaceAssociationInput {}
/**
 * @public
 *
 * The output of {@link CreateIdNamespaceAssociationCommand}.
 */
export interface CreateIdNamespaceAssociationCommandOutput extends CreateIdNamespaceAssociationOutput, __MetadataBearer {}

/**
 * Creates an ID namespace association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateIdNamespaceAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateIdNamespaceAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateIdNamespaceAssociationInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   inputReferenceConfig: { // IdNamespaceAssociationInputReferenceConfig
 *     inputReferenceArn: "STRING_VALUE", // required
 *     manageResourcePolicies: true || false, // required
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   idMappingConfig: { // IdMappingConfig
 *     allowUseAsDimensionColumn: true || false, // required
 *   },
 * };
 * const command = new CreateIdNamespaceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdNamespaceAssociationOutput
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
 * @param CreateIdNamespaceAssociationCommandInput - {@link CreateIdNamespaceAssociationCommandInput}
 * @returns {@link CreateIdNamespaceAssociationCommandOutput}
 * @see {@link CreateIdNamespaceAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateIdNamespaceAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request denied because service quota has been exceeded.
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
export class CreateIdNamespaceAssociationCommand extends command<CreateIdNamespaceAssociationCommandInput, CreateIdNamespaceAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateIdNamespaceAssociation",
  CreateIdNamespaceAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdNamespaceAssociationInput;
      output: CreateIdNamespaceAssociationOutput;
    };
    sdk: {
      input: CreateIdNamespaceAssociationCommandInput;
      output: CreateIdNamespaceAssociationCommandOutput;
    };
  };
}
