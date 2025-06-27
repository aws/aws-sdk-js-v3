// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { UpdateSchemaMappingInput, UpdateSchemaMappingOutput } from "../models/models_0";
import { de_UpdateSchemaMappingCommand, se_UpdateSchemaMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates a schema mapping.</p> <note> <p>A schema is immutable if it is being used by a workflow. Therefore, you can't update a schema mapping if it's associated with a workflow. </p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, UpdateSchemaMappingCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, UpdateSchemaMappingCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
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
export class UpdateSchemaMappingCommand extends $Command
  .classBuilder<
    UpdateSchemaMappingCommandInput,
    UpdateSchemaMappingCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "UpdateSchemaMapping", {})
  .n("EntityResolutionClient", "UpdateSchemaMappingCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSchemaMappingCommand)
  .de(de_UpdateSchemaMappingCommand)
  .build() {
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
