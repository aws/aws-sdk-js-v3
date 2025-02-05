// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetBlueprintsRequest, BatchGetBlueprintsResponse } from "../models/models_0";
import { de_BatchGetBlueprintsCommand, se_BatchGetBlueprintsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetBlueprintsCommand}.
 */
export interface BatchGetBlueprintsCommandInput extends BatchGetBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetBlueprintsCommand}.
 */
export interface BatchGetBlueprintsCommandOutput extends BatchGetBlueprintsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a list of blueprints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetBlueprintsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetBlueprintsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // BatchGetBlueprintsRequest
 *   Names: [ // BatchGetBlueprintNames // required
 *     "STRING_VALUE",
 *   ],
 *   IncludeBlueprint: true || false,
 *   IncludeParameterSpec: true || false,
 * };
 * const command = new BatchGetBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetBlueprintsResponse
 * //   Blueprints: [ // Blueprints
 * //     { // Blueprint
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       ParameterSpec: "STRING_VALUE",
 * //       BlueprintLocation: "STRING_VALUE",
 * //       BlueprintServiceLocation: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED",
 * //       ErrorMessage: "STRING_VALUE",
 * //       LastActiveDefinition: { // LastActiveDefinition
 * //         Description: "STRING_VALUE",
 * //         LastModifiedOn: new Date("TIMESTAMP"),
 * //         ParameterSpec: "STRING_VALUE",
 * //         BlueprintLocation: "STRING_VALUE",
 * //         BlueprintServiceLocation: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   MissingBlueprints: [ // BlueprintNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetBlueprintsCommandInput - {@link BatchGetBlueprintsCommandInput}
 * @returns {@link BatchGetBlueprintsCommandOutput}
 * @see {@link BatchGetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link BatchGetBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class BatchGetBlueprintsCommand extends $Command
  .classBuilder<
    BatchGetBlueprintsCommandInput,
    BatchGetBlueprintsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "BatchGetBlueprints", {})
  .n("GlueClient", "BatchGetBlueprintsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetBlueprintsCommand)
  .de(de_BatchGetBlueprintsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetBlueprintsRequest;
      output: BatchGetBlueprintsResponse;
    };
    sdk: {
      input: BatchGetBlueprintsCommandInput;
      output: BatchGetBlueprintsCommandOutput;
    };
  };
}
