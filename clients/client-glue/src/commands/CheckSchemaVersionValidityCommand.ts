// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CheckSchemaVersionValidityInput, CheckSchemaVersionValidityResponse } from "../models/models_1";
import { CheckSchemaVersionValidity } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CheckSchemaVersionValidityCommand}.
 */
export interface CheckSchemaVersionValidityCommandInput extends CheckSchemaVersionValidityInput {}
/**
 * @public
 *
 * The output of {@link CheckSchemaVersionValidityCommand}.
 */
export interface CheckSchemaVersionValidityCommandOutput extends CheckSchemaVersionValidityResponse, __MetadataBearer {}

/**
 * <p>Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CheckSchemaVersionValidityCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CheckSchemaVersionValidityCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CheckSchemaVersionValidityInput
 *   DataFormat: "AVRO" || "JSON" || "PROTOBUF", // required
 *   SchemaDefinition: "STRING_VALUE", // required
 * };
 * const command = new CheckSchemaVersionValidityCommand(input);
 * const response = await client.send(command);
 * // { // CheckSchemaVersionValidityResponse
 * //   Valid: true || false,
 * //   Error: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CheckSchemaVersionValidityCommandInput - {@link CheckSchemaVersionValidityCommandInput}
 * @returns {@link CheckSchemaVersionValidityCommandOutput}
 * @see {@link CheckSchemaVersionValidityCommandInput} for command's `input` shape.
 * @see {@link CheckSchemaVersionValidityCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
export class CheckSchemaVersionValidityCommand extends $Command
  .classBuilder<
    CheckSchemaVersionValidityCommandInput,
    CheckSchemaVersionValidityCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CheckSchemaVersionValidity", {})
  .n("GlueClient", "CheckSchemaVersionValidityCommand")
  .sc(CheckSchemaVersionValidity)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckSchemaVersionValidityInput;
      output: CheckSchemaVersionValidityResponse;
    };
    sdk: {
      input: CheckSchemaVersionValidityCommandInput;
      output: CheckSchemaVersionValidityCommandOutput;
    };
  };
}
