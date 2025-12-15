// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetQueryInput, GetQueryOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { GetQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryCommand}.
 */
export interface GetQueryCommandInput extends GetQueryInput {}
/**
 * @public
 *
 * The output of {@link GetQueryCommand}.
 */
export interface GetQueryCommandOutput extends GetQueryOutput, __MetadataBearer {}

/**
 * <p>Retrieves the status of a specified query.</p> <note> <p> When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have the <code>neptune-graph:GetQueryStatus</code> IAM action attached. </p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetQueryCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetQueryCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetQueryInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryOutput
 * //   id: "STRING_VALUE",
 * //   queryString: "STRING_VALUE",
 * //   waited: Number("int"),
 * //   elapsed: Number("int"),
 * //   state: "RUNNING" || "WAITING" || "CANCELLING",
 * // };
 *
 * ```
 *
 * @param GetQueryCommandInput - {@link GetQueryCommandInput}
 * @returns {@link GetQueryCommandOutput}
 * @see {@link GetQueryCommandInput} for command's `input` shape.
 * @see {@link GetQueryCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 *
 * @public
 */
export class GetQueryCommand extends $Command
  .classBuilder<
    GetQueryCommandInput,
    GetQueryCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `DataPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneGraph", "GetQuery", {})
  .n("NeptuneGraphClient", "GetQueryCommand")
  .sc(GetQuery$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryInput;
      output: GetQueryOutput;
    };
    sdk: {
      input: GetQueryCommandInput;
      output: GetQueryCommandOutput;
    };
  };
}
