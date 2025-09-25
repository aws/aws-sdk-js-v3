// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { CreateSchemaMappingInput, CreateSchemaMappingOutput } from "../models/models_0";
import { CreateSchemaMapping } from "../schemas/schemas_9_Workflow";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSchemaMappingCommand}.
 */
export interface CreateSchemaMappingCommandInput extends CreateSchemaMappingInput {}
/**
 * @public
 *
 * The output of {@link CreateSchemaMappingCommand}.
 */
export interface CreateSchemaMappingCommandOutput extends CreateSchemaMappingOutput, __MetadataBearer {}

/**
 * <p>Creates a schema mapping, which defines the schema of the input customer records table. The <code>SchemaMapping</code> also provides Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, CreateSchemaMappingCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, CreateSchemaMappingCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // CreateSchemaMappingInput
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSchemaMappingCommand(input);
 * const response = await client.send(command);
 * // { // CreateSchemaMappingOutput
 * //   schemaName: "STRING_VALUE", // required
 * //   schemaArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
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
 * @param CreateSchemaMappingCommandInput - {@link CreateSchemaMappingCommandInput}
 * @returns {@link CreateSchemaMappingCommandOutput}
 * @see {@link CreateSchemaMappingCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaMappingCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
 *
 * @throws {@link ExceedsLimitException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Entity Resolution account limits. The error message describes the limit exceeded. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class CreateSchemaMappingCommand extends $Command
  .classBuilder<
    CreateSchemaMappingCommandInput,
    CreateSchemaMappingCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "CreateSchemaMapping", {})
  .n("EntityResolutionClient", "CreateSchemaMappingCommand")
  .sc(CreateSchemaMapping)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSchemaMappingInput;
      output: CreateSchemaMappingOutput;
    };
    sdk: {
      input: CreateSchemaMappingCommandInput;
      output: CreateSchemaMappingCommandOutput;
    };
  };
}
