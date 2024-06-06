// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLensReviewReportInput, GetLensReviewReportOutput } from "../models/models_0";
import { de_GetLensReviewReportCommand, se_GetLensReviewReportCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLensReviewReportCommand}.
 */
export interface GetLensReviewReportCommandInput extends GetLensReviewReportInput {}
/**
 * @public
 *
 * The output of {@link GetLensReviewReportCommand}.
 */
export interface GetLensReviewReportCommandOutput extends GetLensReviewReportOutput, __MetadataBearer {}

/**
 * <p>Get lens review report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensReviewReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensReviewReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // GetLensReviewReportInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   MilestoneNumber: Number("int"),
 * };
 * const command = new GetLensReviewReportCommand(input);
 * const response = await client.send(command);
 * // { // GetLensReviewReportOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * //   LensReviewReport: { // LensReviewReport
 * //     LensAlias: "STRING_VALUE",
 * //     LensArn: "STRING_VALUE",
 * //     Base64String: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLensReviewReportCommandInput - {@link GetLensReviewReportCommandInput}
 * @returns {@link GetLensReviewReportCommandOutput}
 * @see {@link GetLensReviewReportCommandInput} for command's `input` shape.
 * @see {@link GetLensReviewReportCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 * @public
 */
export class GetLensReviewReportCommand extends $Command
  .classBuilder<
    GetLensReviewReportCommandInput,
    GetLensReviewReportCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "GetLensReviewReport", {})
  .n("WellArchitectedClient", "GetLensReviewReportCommand")
  .f(void 0, void 0)
  .ser(se_GetLensReviewReportCommand)
  .de(de_GetLensReviewReportCommand)
  .build() {}
