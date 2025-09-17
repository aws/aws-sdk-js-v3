// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGraphsInput, ListGraphsOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ListGraphsCommand, se_ListGraphsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGraphsCommand}.
 */
export interface ListGraphsCommandInput extends ListGraphsInput {}
/**
 * @public
 *
 * The output of {@link ListGraphsCommand}.
 */
export interface ListGraphsCommandOutput extends ListGraphsOutput, __MetadataBearer {}

/**
 * <p>Lists available Neptune Analytics graphs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListGraphsCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListGraphsCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListGraphsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListGraphsCommand(input);
 * const response = await client.send(command);
 * // { // ListGraphsOutput
 * //   graphs: [ // GraphSummaryList // required
 * //     { // GraphSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "RESETTING" || "UPDATING" || "SNAPSHOTTING" || "FAILED" || "IMPORTING" || "STARTING" || "STOPPING" || "STOPPED",
 * //       provisionedMemory: Number("int"),
 * //       publicConnectivity: true || false,
 * //       endpoint: "STRING_VALUE",
 * //       replicaCount: Number("int"),
 * //       kmsKeyIdentifier: "STRING_VALUE",
 * //       deletionProtection: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGraphsCommandInput - {@link ListGraphsCommandInput}
 * @returns {@link ListGraphsCommandOutput}
 * @see {@link ListGraphsCommandInput} for command's `input` shape.
 * @see {@link ListGraphsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
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
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 *
 * @public
 */
export class ListGraphsCommand extends $Command
  .classBuilder<
    ListGraphsCommandInput,
    ListGraphsCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "ListGraphs", {})
  .n("NeptuneGraphClient", "ListGraphsCommand")
  .f(void 0, void 0)
  .ser(se_ListGraphsCommand)
  .de(de_ListGraphsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGraphsInput;
      output: ListGraphsOutput;
    };
    sdk: {
      input: ListGraphsCommandInput;
      output: ListGraphsCommandOutput;
    };
  };
}
