// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorkflowStepsRequest, GetWorkflowStepsResponse } from "../models/models_0";
import { de_GetWorkflowStepsCommand, se_GetWorkflowStepsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowStepsCommand}.
 */
export interface GetWorkflowStepsCommandInput extends GetWorkflowStepsRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStepsCommand}.
 */
export interface GetWorkflowStepsCommandOutput extends GetWorkflowStepsResponse, __MetadataBearer {}

/**
 * <p>Get granular list of steps in workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetWorkflowStepsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetWorkflowStepsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetWorkflowStepsRequest
 *   DomainName: "STRING_VALUE", // required
 *   WorkflowId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetWorkflowStepsCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStepsResponse
 * //   WorkflowId: "STRING_VALUE",
 * //   WorkflowType: "APPFLOW_INTEGRATION",
 * //   Items: [ // WorkflowStepsList
 * //     { // WorkflowStepItem
 * //       AppflowIntegration: { // AppflowIntegrationWorkflowStep
 * //         FlowName: "STRING_VALUE", // required
 * //         Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "SPLIT" || "RETRY" || "CANCELLED", // required
 * //         ExecutionMessage: "STRING_VALUE", // required
 * //         RecordsProcessed: Number("long"), // required
 * //         BatchRecordsStartTime: "STRING_VALUE", // required
 * //         BatchRecordsEndTime: "STRING_VALUE", // required
 * //         CreatedAt: new Date("TIMESTAMP"), // required
 * //         LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkflowStepsCommandInput - {@link GetWorkflowStepsCommandInput}
 * @returns {@link GetWorkflowStepsCommandOutput}
 * @see {@link GetWorkflowStepsCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class GetWorkflowStepsCommand extends $Command
  .classBuilder<
    GetWorkflowStepsCommandInput,
    GetWorkflowStepsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "GetWorkflowSteps", {})
  .n("CustomerProfilesClient", "GetWorkflowStepsCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowStepsCommand)
  .de(de_GetWorkflowStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowStepsRequest;
      output: GetWorkflowStepsResponse;
    };
    sdk: {
      input: GetWorkflowStepsCommandInput;
      output: GetWorkflowStepsCommandOutput;
    };
  };
}
