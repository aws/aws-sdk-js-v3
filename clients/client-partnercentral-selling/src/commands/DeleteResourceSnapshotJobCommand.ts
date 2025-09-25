// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteResourceSnapshotJobRequest } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { DeleteResourceSnapshotJob } from "../schemas/schemas_4_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceSnapshotJobCommand}.
 */
export interface DeleteResourceSnapshotJobCommandInput extends DeleteResourceSnapshotJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceSnapshotJobCommand}.
 */
export interface DeleteResourceSnapshotJobCommandOutput extends __MetadataBearer {}

/**
 * <p> Use this action to deletes a previously created resource snapshot job. The job must be in a stopped state before it can be deleted. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, DeleteResourceSnapshotJobCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, DeleteResourceSnapshotJobCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // DeleteResourceSnapshotJobRequest
 *   Catalog: "STRING_VALUE", // required
 *   ResourceSnapshotJobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourceSnapshotJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceSnapshotJobCommandInput - {@link DeleteResourceSnapshotJobCommandInput}
 * @returns {@link DeleteResourceSnapshotJobCommandOutput}
 * @see {@link DeleteResourceSnapshotJobCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceSnapshotJobCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error occurs when the request can’t be processed due to a conflict with the target resource's current state, which could result from updating or deleting the resource.</p> <p>Suggested action: Fetch the latest state of the resource, verify the state, and retry the request.</p>
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
export class DeleteResourceSnapshotJobCommand extends $Command
  .classBuilder<
    DeleteResourceSnapshotJobCommandInput,
    DeleteResourceSnapshotJobCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "DeleteResourceSnapshotJob", {})
  .n("PartnerCentralSellingClient", "DeleteResourceSnapshotJobCommand")
  .sc(DeleteResourceSnapshotJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceSnapshotJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourceSnapshotJobCommandInput;
      output: DeleteResourceSnapshotJobCommandOutput;
    };
  };
}
