// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSchemaInput, GetSchemaResponse } from "../models/models_2";
import { GetSchema } from "../schemas/schemas_51_Schema";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaCommand}.
 */
export interface GetSchemaCommandInput extends GetSchemaInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaCommand}.
 */
export interface GetSchemaCommandOutput extends GetSchemaResponse, __MetadataBearer {}

/**
 * <p>Describes the specified schema in detail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetSchemaInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 * };
 * const command = new GetSchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaResponse
 * //   RegistryName: "STRING_VALUE",
 * //   RegistryArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   SchemaArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DataFormat: "AVRO" || "JSON" || "PROTOBUF",
 * //   Compatibility: "NONE" || "DISABLED" || "BACKWARD" || "BACKWARD_ALL" || "FORWARD" || "FORWARD_ALL" || "FULL" || "FULL_ALL",
 * //   SchemaCheckpoint: Number("long"),
 * //   LatestSchemaVersion: Number("long"),
 * //   NextSchemaVersion: Number("long"),
 * //   SchemaStatus: "AVAILABLE" || "PENDING" || "DELETING",
 * //   CreatedTime: "STRING_VALUE",
 * //   UpdatedTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaCommandInput - {@link GetSchemaCommandInput}
 * @returns {@link GetSchemaCommandOutput}
 * @see {@link GetSchemaCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetSchemaCommand extends $Command
  .classBuilder<
    GetSchemaCommandInput,
    GetSchemaCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetSchema", {})
  .n("GlueClient", "GetSchemaCommand")
  .sc(GetSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaInput;
      output: GetSchemaResponse;
    };
    sdk: {
      input: GetSchemaCommandInput;
      output: GetSchemaCommandOutput;
    };
  };
}
