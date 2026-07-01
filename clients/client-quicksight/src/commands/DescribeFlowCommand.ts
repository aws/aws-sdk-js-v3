// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFlowRequest, DescribeFlowResponse } from "../models/models_4";
import { DescribeFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFlowCommand}.
 */
export interface DescribeFlowCommandInput extends DescribeFlowRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowCommand}.
 */
export interface DescribeFlowCommandOutput extends DescribeFlowResponse, __MetadataBearer {}

/**
 * <p>Returns the full details of a flow for the latest version of the requested publish state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeFlowCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeFlowCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeFlowRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   FlowId: "STRING_VALUE", // required
 *   PublishState: "PUBLISHED" || "DRAFT" || "PENDING_APPROVAL", // required
 * };
 * const command = new DescribeFlowCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowResponse
 * //   Flow: { // FlowDetail
 * //     Arn: "STRING_VALUE", // required
 * //     FlowId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     PublishState: "PUBLISHED" || "DRAFT" || "PENDING_APPROVAL", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     CreatedBy: "STRING_VALUE",
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedBy: "STRING_VALUE",
 * //     FlowDefinition: "DOCUMENT_VALUE", // required
 * //     StepAliases: [ // StepAliasList
 * //       { // StepAliasMapping
 * //         StepId: "STRING_VALUE", // required
 * //         StepAlias: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeFlowCommandInput - {@link DescribeFlowCommandInput}
 * @returns {@link DescribeFlowCommandOutput}
 * @see {@link DescribeFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeFlowCommand extends command<DescribeFlowCommandInput, DescribeFlowCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFlow",
  DescribeFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFlowRequest;
      output: DescribeFlowResponse;
    };
    sdk: {
      input: DescribeFlowCommandInput;
      output: DescribeFlowCommandOutput;
    };
  };
}
