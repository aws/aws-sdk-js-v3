// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSchemaVersionsDiffInput, GetSchemaVersionsDiffResponse } from "../models/models_2";
import { de_GetSchemaVersionsDiffCommand, se_GetSchemaVersionsDiffCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaVersionsDiffCommand}.
 */
export interface GetSchemaVersionsDiffCommandInput extends GetSchemaVersionsDiffInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaVersionsDiffCommand}.
 */
export interface GetSchemaVersionsDiffCommandOutput extends GetSchemaVersionsDiffResponse, __MetadataBearer {}

/**
 * <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p>
 *          <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaVersionsDiffCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaVersionsDiffCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetSchemaVersionsDiffInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   FirstSchemaVersionNumber: { // SchemaVersionNumber
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 *   SecondSchemaVersionNumber: {
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 *   SchemaDiffType: "SYNTAX_DIFF", // required
 * };
 * const command = new GetSchemaVersionsDiffCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaVersionsDiffResponse
 * //   Diff: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaVersionsDiffCommandInput - {@link GetSchemaVersionsDiffCommandInput}
 * @returns {@link GetSchemaVersionsDiffCommandOutput}
 * @see {@link GetSchemaVersionsDiffCommandInput} for command's `input` shape.
 * @see {@link GetSchemaVersionsDiffCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetSchemaVersionsDiffCommand extends $Command
  .classBuilder<
    GetSchemaVersionsDiffCommandInput,
    GetSchemaVersionsDiffCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetSchemaVersionsDiff", {})
  .n("GlueClient", "GetSchemaVersionsDiffCommand")
  .f(void 0, void 0)
  .ser(se_GetSchemaVersionsDiffCommand)
  .de(de_GetSchemaVersionsDiffCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaVersionsDiffInput;
      output: GetSchemaVersionsDiffResponse;
    };
    sdk: {
      input: GetSchemaVersionsDiffCommandInput;
      output: GetSchemaVersionsDiffCommandOutput;
    };
  };
}
