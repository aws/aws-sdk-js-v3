// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSchemaMappingInput, UpdateSchemaMappingOutput } from "../models/models_0";
import { UpdateSchemaMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSchemaMappingCommand}.
 */
export interface UpdateSchemaMappingCommandInput extends UpdateSchemaMappingInput {}
/**
 * @public
 *
 * The output of {@link UpdateSchemaMappingCommand}.
 */
export interface UpdateSchemaMappingCommandOutput extends UpdateSchemaMappingOutput, __MetadataBearer {}

/**
 * Updates a schema mapping.
 *
 * > **Note:** A schema is immutable if it is being used by a workflow. Therefore, you can't update a schema mapping if it's associated with a workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, UpdateSchemaMappingCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, UpdateSchemaMappingCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // UpdateSchemaMappingInput
 *   schemaName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   mappedInputFields: [ // SchemaInputAttributes // required
 *     { // SchemaInputAttribute
 *       fieldName: "STRING_VALUE", // required
 *       type: "NAME" || "NAME_FIRST" || "NAME_MIDDLE" || "NAME_LAST" || "ADDRESS" || "ADDRESS_STREET1" || "ADDRESS_STREET2" || "ADDRESS_STREET3" || "ADDRESS_CITY" || "ADDRESS_STATE" || "ADDRESS_COUNTRY" || "ADDRESS_POSTALCODE" || "PHONE" || "PHONE_NUMBER" || "PHONE_COUNTRYCODE" || "EMAIL_ADDRESS" || "UNIQUE_ID" || "DATE" || "STRING" || "PROVIDER_ID" || "IPV4" || "IPV6" || "MAID", // required
 *       groupName: "STRING_VALUE",
 *       matchKey: "STRING_VALUE",
 *       subType: "STRING_VALUE",
 *       hashed: true || false,
 *     },
 *   ],
 * };
 * const command = new UpdateSchemaMappingCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSchemaMappingOutput
 * //   schemaName: "STRING_VALUE", // required
 * //   schemaArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   mappedInputFields: [ // SchemaInputAttributes // required
 * //     { // SchemaInputAttribute
 * //       fieldName: "STRING_VALUE", // required
 * //       type: "NAME" || "NAME_FIRST" || "NAME_MIDDLE" || "NAME_LAST" || "ADDRESS" || "ADDRESS_STREET1" || "ADDRESS_STREET2" || "ADDRESS_STREET3" || "ADDRESS_CITY" || "ADDRESS_STATE" || "ADDRESS_COUNTRY" || "ADDRESS_POSTALCODE" || "PHONE" || "PHONE_NUMBER" || "PHONE_COUNTRYCODE" || "EMAIL_ADDRESS" || "UNIQUE_ID" || "DATE" || "STRING" || "PROVIDER_ID" || "IPV4" || "IPV6" || "MAID", // required
 * //       groupName: "STRING_VALUE",
 * //       matchKey: "STRING_VALUE",
 * //       subType: "STRING_VALUE",
 * //       hashed: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateSchemaMappingCommandInput - {@link UpdateSchemaMappingCommandInput}
 * @returns {@link UpdateSchemaMappingCommandOutput}
 * @see {@link UpdateSchemaMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateSchemaMappingCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class UpdateSchemaMappingCommand extends command<UpdateSchemaMappingCommandInput, UpdateSchemaMappingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSchemaMapping",
  UpdateSchemaMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSchemaMappingInput;
      output: UpdateSchemaMappingOutput;
    };
    sdk: {
      input: UpdateSchemaMappingCommandInput;
      output: UpdateSchemaMappingCommandOutput;
    };
  };
}
