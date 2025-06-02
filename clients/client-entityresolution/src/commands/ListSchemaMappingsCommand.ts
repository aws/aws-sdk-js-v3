// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { ListSchemaMappingsInput, ListSchemaMappingsOutput } from "../models/models_0";
import { de_ListSchemaMappingsCommand, se_ListSchemaMappingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSchemaMappingsCommand}.
 */
export interface ListSchemaMappingsCommandInput extends ListSchemaMappingsInput {}
/**
 * @public
 *
 * The output of {@link ListSchemaMappingsCommand}.
 */
export interface ListSchemaMappingsCommandOutput extends ListSchemaMappingsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all the <code>SchemaMappings</code> that have been created for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListSchemaMappingsCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListSchemaMappingsCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // ListSchemaMappingsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSchemaMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemaMappingsOutput
 * //   schemaList: [ // SchemaMappingList
 * //     { // SchemaMappingSummary
 * //       schemaName: "STRING_VALUE", // required
 * //       schemaArn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       hasWorkflows: true || false, // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchemaMappingsCommandInput - {@link ListSchemaMappingsCommandInput}
 * @returns {@link ListSchemaMappingsCommandOutput}
 * @see {@link ListSchemaMappingsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaMappingsCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
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
export class ListSchemaMappingsCommand extends $Command
  .classBuilder<
    ListSchemaMappingsCommandInput,
    ListSchemaMappingsCommandOutput,
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
  .s("AWSVeniceService", "ListSchemaMappings", {})
  .n("EntityResolutionClient", "ListSchemaMappingsCommand")
  .f(void 0, void 0)
  .ser(se_ListSchemaMappingsCommand)
  .de(de_ListSchemaMappingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchemaMappingsInput;
      output: ListSchemaMappingsOutput;
    };
    sdk: {
      input: ListSchemaMappingsCommandInput;
      output: ListSchemaMappingsCommandOutput;
    };
  };
}
