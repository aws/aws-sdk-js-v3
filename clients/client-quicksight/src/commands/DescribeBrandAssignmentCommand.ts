// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeBrandAssignmentRequest, DescribeBrandAssignmentResponse } from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeBrandAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBrandAssignmentCommand}.
 */
export interface DescribeBrandAssignmentCommandInput extends DescribeBrandAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrandAssignmentCommand}.
 */
export interface DescribeBrandAssignmentCommandOutput extends DescribeBrandAssignmentResponse, __MetadataBearer {}

/**
 * <p>Describes a brand assignment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeBrandAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeBrandAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeBrandAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBrandAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrandAssignmentResponse
 * //   RequestId: "STRING_VALUE",
 * //   BrandArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBrandAssignmentCommandInput - {@link DescribeBrandAssignmentCommandInput}
 * @returns {@link DescribeBrandAssignmentCommandOutput}
 * @see {@link DescribeBrandAssignmentCommandInput} for command's `input` shape.
 * @see {@link DescribeBrandAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service exception.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
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
export class DescribeBrandAssignmentCommand extends $Command
  .classBuilder<
    DescribeBrandAssignmentCommandInput,
    DescribeBrandAssignmentCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeBrandAssignment", {})
  .n("QuickSightClient", "DescribeBrandAssignmentCommand")
  .sc(DescribeBrandAssignment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBrandAssignmentRequest;
      output: DescribeBrandAssignmentResponse;
    };
    sdk: {
      input: DescribeBrandAssignmentCommandInput;
      output: DescribeBrandAssignmentCommandOutput;
    };
  };
}
