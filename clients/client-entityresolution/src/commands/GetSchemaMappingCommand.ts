// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EntityResolutionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EntityResolutionClient";
import type { GetSchemaMappingInput, GetSchemaMappingOutput } from "../models/models_0";
import { GetSchemaMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the SchemaMapping of a given name.</p>
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found. </p>
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
export class GetSchemaMappingCommand extends $Command
  .classBuilder<
    GetSchemaMappingCommandInput,
    GetSchemaMappingCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "GetSchemaMapping", {})
  .n("EntityResolutionClient", "GetSchemaMappingCommand")
  .sc(GetSchemaMapping$)
  .build() {
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
