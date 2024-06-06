// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProvisionedModelThroughputsRequest, ListProvisionedModelThroughputsResponse } from "../models/models_0";
import {
  de_ListProvisionedModelThroughputsCommand,
  se_ListProvisionedModelThroughputsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProvisionedModelThroughputsCommand}.
 */
export interface ListProvisionedModelThroughputsCommandInput extends ListProvisionedModelThroughputsRequest {}
/**
 * @public
 *
 * The output of {@link ListProvisionedModelThroughputsCommand}.
 */
export interface ListProvisionedModelThroughputsCommandOutput
  extends ListProvisionedModelThroughputsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the Provisioned Throughputs in the account. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListProvisionedModelThroughputsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListProvisionedModelThroughputsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // ListProvisionedModelThroughputsRequest
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "Creating" || "InService" || "Updating" || "Failed",
 *   modelArnEquals: "STRING_VALUE",
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListProvisionedModelThroughputsCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisionedModelThroughputsResponse
 * //   nextToken: "STRING_VALUE",
 * //   provisionedModelSummaries: [ // ProvisionedModelSummaries
 * //     { // ProvisionedModelSummary
 * //       provisionedModelName: "STRING_VALUE", // required
 * //       provisionedModelArn: "STRING_VALUE", // required
 * //       modelArn: "STRING_VALUE", // required
 * //       desiredModelArn: "STRING_VALUE", // required
 * //       foundationModelArn: "STRING_VALUE", // required
 * //       modelUnits: Number("int"), // required
 * //       desiredModelUnits: Number("int"), // required
 * //       status: "Creating" || "InService" || "Updating" || "Failed", // required
 * //       commitmentDuration: "OneMonth" || "SixMonths",
 * //       commitmentExpirationTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProvisionedModelThroughputsCommandInput - {@link ListProvisionedModelThroughputsCommandInput}
 * @returns {@link ListProvisionedModelThroughputsCommandOutput}
 * @see {@link ListProvisionedModelThroughputsCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedModelThroughputsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class ListProvisionedModelThroughputsCommand extends $Command
  .classBuilder<
    ListProvisionedModelThroughputsCommandInput,
    ListProvisionedModelThroughputsCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "ListProvisionedModelThroughputs", {})
  .n("BedrockClient", "ListProvisionedModelThroughputsCommand")
  .f(void 0, void 0)
  .ser(se_ListProvisionedModelThroughputsCommand)
  .de(de_ListProvisionedModelThroughputsCommand)
  .build() {}
