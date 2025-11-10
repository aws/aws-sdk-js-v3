// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetBlueprintRunRequest, GetBlueprintRunResponse } from "../models/models_1";
import { GetBlueprintRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintRunCommand}.
 */
export interface GetBlueprintRunCommandInput extends GetBlueprintRunRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintRunCommand}.
 */
export interface GetBlueprintRunCommandOutput extends GetBlueprintRunResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a blueprint run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetBlueprintRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetBlueprintRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetBlueprintRunRequest
 *   BlueprintName: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetBlueprintRunCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintRunResponse
 * //   BlueprintRun: { // BlueprintRun
 * //     BlueprintName: "STRING_VALUE",
 * //     RunId: "STRING_VALUE",
 * //     WorkflowName: "STRING_VALUE",
 * //     State: "RUNNING" || "SUCCEEDED" || "FAILED" || "ROLLING_BACK",
 * //     StartedOn: new Date("TIMESTAMP"),
 * //     CompletedOn: new Date("TIMESTAMP"),
 * //     ErrorMessage: "STRING_VALUE",
 * //     RollbackErrorMessage: "STRING_VALUE",
 * //     Parameters: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlueprintRunCommandInput - {@link GetBlueprintRunCommandInput}
 * @returns {@link GetBlueprintRunCommandOutput}
 * @see {@link GetBlueprintRunCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetBlueprintRunCommand extends $Command
  .classBuilder<
    GetBlueprintRunCommandInput,
    GetBlueprintRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetBlueprintRun", {})
  .n("GlueClient", "GetBlueprintRunCommand")
  .sc(GetBlueprintRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlueprintRunRequest;
      output: GetBlueprintRunResponse;
    };
    sdk: {
      input: GetBlueprintRunCommandInput;
      output: GetBlueprintRunCommandOutput;
    };
  };
}
