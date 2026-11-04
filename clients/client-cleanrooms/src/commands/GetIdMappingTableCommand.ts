// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIdMappingTableInput, GetIdMappingTableOutput } from "../models/models_0";
import { GetIdMappingTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIdMappingTableCommand}.
 */
export interface GetIdMappingTableCommandInput extends GetIdMappingTableInput {}
/**
 * @public
 *
 * The output of {@link GetIdMappingTableCommand}.
 */
export interface GetIdMappingTableCommandOutput extends GetIdMappingTableOutput, __MetadataBearer {}

/**
 * Retrieves an ID mapping table.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetIdMappingTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetIdMappingTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetIdMappingTableInput
 *   idMappingTableIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetIdMappingTableCommand(input);
 * const response = await client.send(command);
 * // { // GetIdMappingTableOutput
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
 * @param GetIdMappingTableCommandInput - {@link GetIdMappingTableCommandInput}
 * @returns {@link GetIdMappingTableCommandOutput}
 * @see {@link GetIdMappingTableCommandInput} for command's `input` shape.
 * @see {@link GetIdMappingTableCommandOutput} for command's `response` shape.
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
export class GetIdMappingTableCommand extends command<GetIdMappingTableCommandInput, GetIdMappingTableCommandOutput>(
  _ep0,
  _mw0,
  "GetIdMappingTable",
  GetIdMappingTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdMappingTableInput;
      output: GetIdMappingTableOutput;
    };
    sdk: {
      input: GetIdMappingTableCommandInput;
      output: GetIdMappingTableCommandOutput;
    };
  };
}
