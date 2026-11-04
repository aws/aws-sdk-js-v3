// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourceSnapshotJobRequest, GetResourceSnapshotJobResponse } from "../models/models_0";
import { GetResourceSnapshotJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Use this action to retrieves information about a specific resource snapshot job.
 *
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
 *
 * This error occurs when you don't have permission to perform the requested action.
 *
 * You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.
 *
 * Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.
 *
 * Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.
 *
 * This error occurs when there are too many requests sent. Review the provided [Quotas](https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html) and retry after the provided delay.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service or business validation rules.
 *
 * Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.
 *
 * @throws {@link PartnerCentralSellingServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralSelling service.
 *
 * @public
 */
export class GetResourceSnapshotJobCommand extends command<GetResourceSnapshotJobCommandInput, GetResourceSnapshotJobCommandOutput>(
  _ep0,
  _mw0,
  "GetResourceSnapshotJob",
  GetResourceSnapshotJob$
) {
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
