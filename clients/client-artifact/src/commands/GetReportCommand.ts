// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetReportRequest, GetReportResponse } from "../models/models_0";
import { de_GetReportCommand, se_GetReportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReportCommand}.
 */
export interface GetReportCommandInput extends GetReportRequest {}
/**
 * @public
 *
 * The output of {@link GetReportCommand}.
 */
export interface GetReportCommandOutput extends GetReportResponse, __MetadataBearer {}

/**
 * <p>Get the content for a single report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, GetReportCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, GetReportCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * const client = new ArtifactClient(config);
 * const input = { // GetReportRequest
 *   reportId: "STRING_VALUE", // required
 *   reportVersion: Number("long"),
 *   termToken: "STRING_VALUE", // required
 * };
 * const command = new GetReportCommand(input);
 * const response = await client.send(command);
 * // { // GetReportResponse
 * //   documentPresignedUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReportCommandInput - {@link GetReportCommandInput}
 * @returns {@link GetReportCommandOutput}
 * @see {@link GetReportCommandInput} for command's `input` shape.
 * @see {@link GetReportCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Request to create/modify content would result in a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown server exception has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Request fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ArtifactServiceException}
 * <p>Base exception class for all service exceptions from Artifact service.</p>
 *
 * @public
 */
export class GetReportCommand extends $Command
  .classBuilder<
    GetReportCommandInput,
    GetReportCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Artifact", "GetReport", {})
  .n("ArtifactClient", "GetReportCommand")
  .f(void 0, void 0)
  .ser(se_GetReportCommand)
  .de(de_GetReportCommand)
  .build() {}
