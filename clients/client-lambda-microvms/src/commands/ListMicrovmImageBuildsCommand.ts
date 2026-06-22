// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LambdaMicrovmsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaMicrovmsClient";
import type { ListMicrovmImageBuildsInput, ListMicrovmImageBuildsOutput } from "../models/models_0";
import { ListMicrovmImageBuilds$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMicrovmImageBuildsCommand}.
 */
export interface ListMicrovmImageBuildsCommandInput extends ListMicrovmImageBuildsInput {}
/**
 * @public
 *
 * The output of {@link ListMicrovmImageBuildsCommand}.
 */
export interface ListMicrovmImageBuildsCommandOutput extends ListMicrovmImageBuildsOutput, __MetadataBearer {}

/**
 * <p>Lists builds for a MicroVM image version with optional filtering by architecture and chipset. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, ListMicrovmImageBuildsCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, ListMicrovmImageBuildsCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // ListMicrovmImageBuildsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   imageIdentifier: "STRING_VALUE", // required
 *   imageVersion: "STRING_VALUE", // required
 *   architecture: "ARM_64",
 *   chipset: "GRAVITON",
 *   chipsetGeneration: "STRING_VALUE",
 * };
 * const command = new ListMicrovmImageBuildsCommand(input);
 * const response = await client.send(command);
 * // { // ListMicrovmImageBuildsOutput
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // MicrovmImageBuildSummaries // required
 * //     { // MicrovmImageBuildSummary
 * //       imageArn: "STRING_VALUE", // required
 * //       imageVersion: "STRING_VALUE", // required
 * //       buildId: "STRING_VALUE", // required
 * //       buildState: "PENDING" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED", // required
 * //       architecture: "ARM_64", // required
 * //       chipset: "GRAVITON", // required
 * //       chipsetGeneration: "STRING_VALUE", // required
 * //       stateReason: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMicrovmImageBuildsCommandInput - {@link ListMicrovmImageBuildsCommandInput}
 * @returns {@link ListMicrovmImageBuildsCommandOutput}
 * @see {@link ListMicrovmImageBuildsCommandInput} for command's `input` shape.
 * @see {@link ListMicrovmImageBuildsCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class ListMicrovmImageBuildsCommand extends $Command
  .classBuilder<
    ListMicrovmImageBuildsCommandInput,
    ListMicrovmImageBuildsCommandOutput,
    LambdaMicrovmsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaMicrovmsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaMicrovms", "ListMicrovmImageBuilds", {})
  .n("LambdaMicrovmsClient", "ListMicrovmImageBuildsCommand")
  .sc(ListMicrovmImageBuilds$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMicrovmImageBuildsInput;
      output: ListMicrovmImageBuildsOutput;
    };
    sdk: {
      input: ListMicrovmImageBuildsCommandInput;
      output: ListMicrovmImageBuildsCommandOutput;
    };
  };
}
