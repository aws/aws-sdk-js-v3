// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConfiguredTableAssociationInput, CreateConfiguredTableAssociationOutput } from "../models/models_0";
import { CreateConfiguredTableAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConfiguredTableAssociationCommand}.
 */
export interface CreateConfiguredTableAssociationCommandInput extends CreateConfiguredTableAssociationInput {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredTableAssociationCommand}.
 */
export interface CreateConfiguredTableAssociationCommandOutput extends CreateConfiguredTableAssociationOutput, __MetadataBearer {}

/**
 * Creates a configured table association. A configured table association links a configured table with a collaboration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredTableAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredTableAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateConfiguredTableAssociationInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   membershipIdentifier: "STRING_VALUE", // required
 *   configuredTableIdentifier: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfiguredTableAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredTableAssociationOutput
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
 * @param CreateConfiguredTableAssociationCommandInput - {@link CreateConfiguredTableAssociationCommandInput}
 * @returns {@link CreateConfiguredTableAssociationCommandOutput}
 * @see {@link CreateConfiguredTableAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredTableAssociationCommandOutput} for command's `response` shape.
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
export class CreateConfiguredTableAssociationCommand extends command<CreateConfiguredTableAssociationCommandInput, CreateConfiguredTableAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateConfiguredTableAssociation",
  CreateConfiguredTableAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredTableAssociationInput;
      output: CreateConfiguredTableAssociationOutput;
    };
    sdk: {
      input: CreateConfiguredTableAssociationCommandInput;
      output: CreateConfiguredTableAssociationCommandOutput;
    };
  };
}
