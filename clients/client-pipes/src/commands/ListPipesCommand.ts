// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipesRequest, ListPipesResponse } from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import { ListPipes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipesCommand}.
 */
export interface ListPipesCommandInput extends ListPipesRequest {}
/**
 * @public
 *
 * The output of {@link ListPipesCommand}.
 */
export interface ListPipesCommandOutput extends ListPipesResponse, __MetadataBearer {}

/**
 * <p>Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, ListPipesCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, ListPipesCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * // import type { PipesClientConfig } from "@aws-sdk/client-pipes";
 * const config = {}; // type is PipesClientConfig
 * const client = new PipesClient(config);
 * const input = { // ListPipesRequest
 *   NamePrefix: "STRING_VALUE",
 *   DesiredState: "STRING_VALUE",
 *   CurrentState: "STRING_VALUE",
 *   SourcePrefix: "STRING_VALUE",
 *   TargetPrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListPipesCommand(input);
 * const response = await client.send(command);
 * // { // ListPipesResponse
 * //   Pipes: [ // PipeList
 * //     { // Pipe
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       DesiredState: "STRING_VALUE",
 * //       CurrentState: "STRING_VALUE",
 * //       StateReason: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       Source: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       Enrichment: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipesCommandInput - {@link ListPipesCommandInput}
 * @returns {@link ListPipesCommandOutput}
 * @see {@link ListPipesCommandInput} for command's `input` shape.
 * @see {@link ListPipesCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An action was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that an error has occurred while performing a validate operation.</p>
 *
 * @throws {@link PipesServiceException}
 * <p>Base exception class for all service exceptions from Pipes service.</p>
 *
 *
 * @public
 */
export class ListPipesCommand extends $Command
  .classBuilder<
    ListPipesCommandInput,
    ListPipesCommandOutput,
    PipesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PipesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pipes", "ListPipes", {})
  .n("PipesClient", "ListPipesCommand")
  .sc(ListPipes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipesRequest;
      output: ListPipesResponse;
    };
    sdk: {
      input: ListPipesCommandInput;
      output: ListPipesCommandOutput;
    };
  };
}
