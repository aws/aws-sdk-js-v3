// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetBlueprintRunsRequest, GetBlueprintRunsResponse } from "../models/models_1";
import { de_GetBlueprintRunsCommand, se_GetBlueprintRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintRunsCommand}.
 */
export interface GetBlueprintRunsCommandInput extends GetBlueprintRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintRunsCommand}.
 */
export interface GetBlueprintRunsCommandOutput extends GetBlueprintRunsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of blueprint runs for a specified blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetBlueprintRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetBlueprintRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetBlueprintRunsRequest
 *   BlueprintName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetBlueprintRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintRunsResponse
 * //   BlueprintRuns: [ // BlueprintRuns
 * //     { // BlueprintRun
 * //       BlueprintName: "STRING_VALUE",
 * //       RunId: "STRING_VALUE",
 * //       WorkflowName: "STRING_VALUE",
 * //       State: "RUNNING" || "SUCCEEDED" || "FAILED" || "ROLLING_BACK",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       ErrorMessage: "STRING_VALUE",
 * //       RollbackErrorMessage: "STRING_VALUE",
 * //       Parameters: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBlueprintRunsCommandInput - {@link GetBlueprintRunsCommandInput}
 * @returns {@link GetBlueprintRunsCommandOutput}
 * @see {@link GetBlueprintRunsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetBlueprintRunsCommand extends $Command
  .classBuilder<
    GetBlueprintRunsCommandInput,
    GetBlueprintRunsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetBlueprintRuns", {})
  .n("GlueClient", "GetBlueprintRunsCommand")
  .f(void 0, void 0)
  .ser(se_GetBlueprintRunsCommand)
  .de(de_GetBlueprintRunsCommand)
  .build() {}
