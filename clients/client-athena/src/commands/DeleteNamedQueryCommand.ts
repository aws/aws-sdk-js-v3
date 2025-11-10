// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNamedQueryInput, DeleteNamedQueryOutput } from "../models/models_0";
import { DeleteNamedQuery } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNamedQueryCommand}.
 */
export interface DeleteNamedQueryCommandInput extends DeleteNamedQueryInput {}
/**
 * @public
 *
 * The output of {@link DeleteNamedQueryCommand}.
 */
export interface DeleteNamedQueryCommandOutput extends DeleteNamedQueryOutput, __MetadataBearer {}

/**
 * <p>Deletes the named query if you have access to the workgroup in which the query was
 *             saved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // DeleteNamedQueryInput
 *   NamedQueryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNamedQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNamedQueryCommandInput - {@link DeleteNamedQueryCommandInput}
 * @returns {@link DeleteNamedQueryCommandOutput}
 * @see {@link DeleteNamedQueryCommandInput} for command's `input` shape.
 * @see {@link DeleteNamedQueryCommandOutput} for command's `response` shape.
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
export class DeleteNamedQueryCommand extends $Command
  .classBuilder<
    DeleteNamedQueryCommandInput,
    DeleteNamedQueryCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "DeleteNamedQuery", {})
  .n("AthenaClient", "DeleteNamedQueryCommand")
  .sc(DeleteNamedQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNamedQueryInput;
      output: {};
    };
    sdk: {
      input: DeleteNamedQueryCommandInput;
      output: DeleteNamedQueryCommandOutput;
    };
  };
}
