// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateNamedQueryInput, CreateNamedQueryOutput } from "../models/models_0";
import { CreateNamedQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNamedQueryCommand}.
 */
export interface CreateNamedQueryCommandInput extends CreateNamedQueryInput {}
/**
 * @public
 *
 * The output of {@link CreateNamedQueryCommand}.
 */
export interface CreateNamedQueryCommandOutput extends CreateNamedQueryOutput, __MetadataBearer {}

/**
 * <p>Creates a named query in the specified workgroup. Requires that you have access to the
 *             workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // CreateNamedQueryInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Database: "STRING_VALUE", // required
 *   QueryString: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new CreateNamedQueryCommand(input);
 * const response = await client.send(command);
 * // { // CreateNamedQueryOutput
 * //   NamedQueryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNamedQueryCommandInput - {@link CreateNamedQueryCommandInput}
 * @returns {@link CreateNamedQueryCommandOutput}
 * @see {@link CreateNamedQueryCommandInput} for command's `input` shape.
 * @see {@link CreateNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class CreateNamedQueryCommand extends $Command
  .classBuilder<
    CreateNamedQueryCommandInput,
    CreateNamedQueryCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "CreateNamedQuery", {})
  .n("AthenaClient", "CreateNamedQueryCommand")
  .sc(CreateNamedQuery$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNamedQueryInput;
      output: CreateNamedQueryOutput;
    };
    sdk: {
      input: CreateNamedQueryCommandInput;
      output: CreateNamedQueryCommandOutput;
    };
  };
}
