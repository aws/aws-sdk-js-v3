// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceSnapshotJobRequest, GetResourceSnapshotJobResponse } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_GetResourceSnapshotJobCommand, se_GetResourceSnapshotJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceSnapshotJobCommand}.
 */
export interface GetResourceSnapshotJobCommandInput extends GetResourceSnapshotJobRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceSnapshotJobCommand}.
 */
export interface GetResourceSnapshotJobCommandOutput extends GetResourceSnapshotJobResponse, __MetadataBearer {}

/**
 * <p>Use this action to retrieves information about a specific resource snapshot job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, GetResourceSnapshotJobCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, GetResourceSnapshotJobCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // GetResourceSnapshotJobRequest
 *   Catalog: "STRING_VALUE", // required
 *   ResourceSnapshotJobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetResourceSnapshotJobCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceSnapshotJobResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   EngagementId: "STRING_VALUE",
 * //   ResourceType: "Opportunity",
 * //   ResourceId: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   ResourceSnapshotTemplateName: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Status: "Running" || "Stopped",
 * //   LastSuccessfulExecutionDate: new Date("TIMESTAMP"),
 * //   LastFailure: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceSnapshotJobCommandInput - {@link GetResourceSnapshotJobCommandInput}
 * @returns {@link GetResourceSnapshotJobCommandOutput}
 * @see {@link GetResourceSnapshotJobCommandInput} for command's `input` shape.
 * @see {@link GetResourceSnapshotJobCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class GetResourceSnapshotJobCommand extends $Command
  .classBuilder<
    GetResourceSnapshotJobCommandInput,
    GetResourceSnapshotJobCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPartnerCentralSelling", "GetResourceSnapshotJob", {})
  .n("PartnerCentralSellingClient", "GetResourceSnapshotJobCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceSnapshotJobCommand)
  .de(de_GetResourceSnapshotJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceSnapshotJobRequest;
      output: GetResourceSnapshotJobResponse;
    };
    sdk: {
      input: GetResourceSnapshotJobCommandInput;
      output: GetResourceSnapshotJobCommandOutput;
    };
  };
}
