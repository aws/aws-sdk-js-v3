// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSchemaVersionInput, GetSchemaVersionResponse } from "../models/models_2";
import { de_GetSchemaVersionCommand, se_GetSchemaVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaVersionCommand}.
 */
export interface GetSchemaVersionCommandInput extends GetSchemaVersionInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaVersionCommand}.
 */
export interface GetSchemaVersionCommandOutput extends GetSchemaVersionResponse, __MetadataBearer {}

/**
 * <p>Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetSchemaVersionInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   SchemaVersionId: "STRING_VALUE",
 *   SchemaVersionNumber: { // SchemaVersionNumber
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 * };
 * const command = new GetSchemaVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaVersionResponse
 * //   SchemaVersionId: "STRING_VALUE",
 * //   SchemaDefinition: "STRING_VALUE",
 * //   DataFormat: "AVRO" || "JSON" || "PROTOBUF",
 * //   SchemaArn: "STRING_VALUE",
 * //   VersionNumber: Number("long"),
 * //   Status: "AVAILABLE" || "PENDING" || "FAILURE" || "DELETING",
 * //   CreatedTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaVersionCommandInput - {@link GetSchemaVersionCommandInput}
 * @returns {@link GetSchemaVersionCommandOutput}
 * @see {@link GetSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link GetSchemaVersionCommandOutput} for command's `response` shape.
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
export class GetSchemaVersionCommand extends $Command
  .classBuilder<
    GetSchemaVersionCommandInput,
    GetSchemaVersionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetSchemaVersion", {})
  .n("GlueClient", "GetSchemaVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetSchemaVersionCommand)
  .de(de_GetSchemaVersionCommand)
  .build() {}
