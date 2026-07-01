// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIdMappingTableInput, CreateIdMappingTableOutput } from "../models/models_0";
import { CreateIdMappingTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIdMappingTableCommand}.
 */
export interface CreateIdMappingTableCommandInput extends CreateIdMappingTableInput {}
/**
 * @public
 *
 * The output of {@link CreateIdMappingTableCommand}.
 */
export interface CreateIdMappingTableCommandOutput extends CreateIdMappingTableOutput, __MetadataBearer {}

/**
 * <p>Creates an ID mapping table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateIdMappingTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateIdMappingTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateIdMappingTableInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   inputReferenceConfig: { // IdMappingTableInputReferenceConfig
 *     inputReferenceArn: "STRING_VALUE", // required
 *     manageResourcePolicies: true || false, // required
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 * };
 * const command = new CreateIdMappingTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdMappingTableOutput
 * //   idMappingTable: { // IdMappingTable
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     inputReferenceConfig: { // IdMappingTableInputReferenceConfig
 * //       inputReferenceArn: "STRING_VALUE", // required
 * //       manageResourcePolicies: true || false, // required
 * //     },
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     name: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     inputReferenceProperties: { // IdMappingTableInputReferenceProperties
 * //       idMappingTableInputSource: [ // IdMappingTableInputSourceList // required
 * //         { // IdMappingTableInputSource
 * //           idNamespaceAssociationId: "STRING_VALUE", // required
 * //           type: "SOURCE" || "TARGET", // required
 * //         },
 * //       ],
 * //     },
 * //     kmsKeyArn: "STRING_VALUE",
 * //     childResources: [ // ChildResourceList
 * //       { // ChildResource
 * //         resourceId: "STRING_VALUE",
 * //         resourceType: "INTERMEDIATE_TABLE", // required
 * //         resourceName: "STRING_VALUE", // required
 * //         ownerAccountId: "STRING_VALUE", // required
 * //         resourceStatus: "CREATED" || "POPULATE_STARTED" || "POPULATE_SUCCESS" || "POPULATE_FAILED" || "DISALLOWED_BY_DATA_PROVIDER" || "BASE_TABLE_REMOVED" || "RETENTION_PERIOD_EXPIRED",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIdMappingTableCommandInput - {@link CreateIdMappingTableCommandInput}
 * @returns {@link CreateIdMappingTableCommandOutput}
 * @see {@link CreateIdMappingTableCommandInput} for command's `input` shape.
 * @see {@link CreateIdMappingTableCommandOutput} for command's `response` shape.
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
export class CreateIdMappingTableCommand extends command<CreateIdMappingTableCommandInput, CreateIdMappingTableCommandOutput>(
  _ep0,
  _mw0,
  "CreateIdMappingTable",
  CreateIdMappingTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdMappingTableInput;
      output: CreateIdMappingTableOutput;
    };
    sdk: {
      input: CreateIdMappingTableCommandInput;
      output: CreateIdMappingTableCommandOutput;
    };
  };
}
