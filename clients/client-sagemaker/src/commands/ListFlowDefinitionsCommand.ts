// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFlowDefinitionsRequest, ListFlowDefinitionsResponse } from "../models/models_3";
import { ListFlowDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFlowDefinitionsCommand}.
 */
export interface ListFlowDefinitionsCommandInput extends ListFlowDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowDefinitionsCommand}.
 */
export interface ListFlowDefinitionsCommandOutput extends ListFlowDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Returns information about the flow definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListFlowDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListFlowDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListFlowDefinitionsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlowDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowDefinitionsResponse
 * //   FlowDefinitionSummaries: [ // FlowDefinitionSummaries // required
 * //     { // FlowDefinitionSummary
 * //       FlowDefinitionName: "STRING_VALUE", // required
 * //       FlowDefinitionArn: "STRING_VALUE", // required
 * //       FlowDefinitionStatus: "Initializing" || "Active" || "Failed" || "Deleting", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowDefinitionsCommandInput - {@link ListFlowDefinitionsCommandInput}
 * @returns {@link ListFlowDefinitionsCommandOutput}
 * @see {@link ListFlowDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListFlowDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListFlowDefinitionsCommand extends command<ListFlowDefinitionsCommandInput, ListFlowDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListFlowDefinitions",
  ListFlowDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowDefinitionsRequest;
      output: ListFlowDefinitionsResponse;
    };
    sdk: {
      input: ListFlowDefinitionsCommandInput;
      output: ListFlowDefinitionsCommandOutput;
    };
  };
}
