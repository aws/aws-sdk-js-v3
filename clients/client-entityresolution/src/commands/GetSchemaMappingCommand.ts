// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSchemaMappingInput, GetSchemaMappingOutput } from "../models/models_0";
import { GetSchemaMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSchemaMappingCommand}.
 */
export interface GetSchemaMappingCommandInput extends GetSchemaMappingInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaMappingCommand}.
 */
export interface GetSchemaMappingCommandOutput extends GetSchemaMappingOutput, __MetadataBearer {}

/**
 * Returns the SchemaMapping of a given name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetSchemaMappingCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetSchemaMappingCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GetSchemaMappingInput
 *   schemaName: "STRING_VALUE", // required
 * };
 * const command = new GetSchemaMappingCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaMappingOutput
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
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   hasWorkflows: true || false, // required
 * // };
 *
 * ```
 *
 * @param GetSchemaMappingCommandInput - {@link GetSchemaMappingCommandInput}
 * @returns {@link GetSchemaMappingCommandOutput}
 * @see {@link GetSchemaMappingCommandInput} for command's `input` shape.
 * @see {@link GetSchemaMappingCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class GetSchemaMappingCommand extends command<GetSchemaMappingCommandInput, GetSchemaMappingCommandOutput>(
  _ep0,
  _mw0,
  "GetSchemaMapping",
  GetSchemaMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaMappingInput;
      output: GetSchemaMappingOutput;
    };
    sdk: {
      input: GetSchemaMappingCommandInput;
      output: GetSchemaMappingCommandOutput;
    };
  };
}
