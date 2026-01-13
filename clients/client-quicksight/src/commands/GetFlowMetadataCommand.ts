// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFlowMetadataInput, GetFlowMetadataOutput } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { GetFlowMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowMetadataCommand}.
 */
export interface GetFlowMetadataCommandInput extends GetFlowMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetFlowMetadataCommand}.
 */
export interface GetFlowMetadataCommandOutput extends GetFlowMetadataOutput, __MetadataBearer {}

/**
 * <p>Retrieves the metadata of a flow, not including its definition specifying the steps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetFlowMetadataCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetFlowMetadataCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // GetFlowMetadataInput
 *   AwsAccountId: "STRING_VALUE", // required
 *   FlowId: "STRING_VALUE", // required
 * };
 * const command = new GetFlowMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowMetadataOutput
 * //   Arn: "STRING_VALUE", // required
 * //   FlowId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   PublishState: "PUBLISHED" || "DRAFT" || "PENDING_APPROVAL",
 * //   UserCount: Number("int"),
 * //   RunCount: Number("int"),
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetFlowMetadataCommandInput - {@link GetFlowMetadataCommandInput}
 * @returns {@link GetFlowMetadataCommandOutput}
 * @see {@link GetFlowMetadataCommandInput} for command's `input` shape.
 * @see {@link GetFlowMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class GetFlowMetadataCommand extends $Command
  .classBuilder<
    GetFlowMetadataCommandInput,
    GetFlowMetadataCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "GetFlowMetadata", {})
  .n("QuickSightClient", "GetFlowMetadataCommand")
  .sc(GetFlowMetadata$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFlowMetadataInput;
      output: GetFlowMetadataOutput;
    };
    sdk: {
      input: GetFlowMetadataCommandInput;
      output: GetFlowMetadataCommandOutput;
    };
  };
}
