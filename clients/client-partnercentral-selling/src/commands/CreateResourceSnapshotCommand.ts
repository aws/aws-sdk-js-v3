// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResourceSnapshotRequest, CreateResourceSnapshotResponse } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_CreateResourceSnapshotCommand, se_CreateResourceSnapshotCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceSnapshotCommand}.
 */
export interface CreateResourceSnapshotCommandInput extends CreateResourceSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceSnapshotCommand}.
 */
export interface CreateResourceSnapshotCommandOutput extends CreateResourceSnapshotResponse, __MetadataBearer {}

/**
 * <p> This action allows you to create an immutable snapshot of a specific resource, such
 *             as an opportunity, within the context of an engagement. The snapshot captures a subset
 *             of the resource's data based on the schema defined by the provided template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, CreateResourceSnapshotCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, CreateResourceSnapshotCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // CreateResourceSnapshotRequest
 *   Catalog: "STRING_VALUE", // required
 *   EngagementIdentifier: "STRING_VALUE", // required
 *   ResourceType: "Opportunity", // required
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceSnapshotTemplateIdentifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateResourceSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceSnapshotResponse
 * //   Arn: "STRING_VALUE",
 * //   Revision: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateResourceSnapshotCommandInput - {@link CreateResourceSnapshotCommandInput}
 * @returns {@link CreateResourceSnapshotCommandOutput}
 * @see {@link CreateResourceSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateResourceSnapshotCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested
 *             action.</p>
 *          <p>You don’t have access to this action or resource. Review IAM policies or contact your
 *             AWS administrator for assistance.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error occurs when the request can’t be processed due to a conflict with the
 *             target resource's current state, which could result from updating or deleting the
 *             resource.</p>
 *          <p>Suggested action: Fetch the latest state of the resource, verify the state, and retry
 *             the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not
 *             exist, or isn't visible with the current credentials.</p>
 *          <p>Suggested action: Verify that the resource ID is correct and the resource is in the
 *             expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This error occurs when the request would cause a service quota to be exceeded. Service
 *             quotas represent the maximum allowed use of a specific resource, and this error
 *             indicates that the request would surpass that limit.</p>
 *          <p>Suggested action: Review the <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> for the
 *             resource, and either reduce usage or request a quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas
 *             and adapt your usage to avoid throttling.</p>
 *          <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business
 *             validation rules.</p>
 *          <p>Suggested action: Review the error message, including the failed fields and reasons,
 *             to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 * @public
 */
export class CreateResourceSnapshotCommand extends $Command
  .classBuilder<
    CreateResourceSnapshotCommandInput,
    CreateResourceSnapshotCommandOutput,
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
  .s("AWSPartnerCentralSelling", "CreateResourceSnapshot", {})
  .n("PartnerCentralSellingClient", "CreateResourceSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourceSnapshotCommand)
  .de(de_CreateResourceSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceSnapshotRequest;
      output: CreateResourceSnapshotResponse;
    };
    sdk: {
      input: CreateResourceSnapshotCommandInput;
      output: CreateResourceSnapshotCommandOutput;
    };
  };
}
