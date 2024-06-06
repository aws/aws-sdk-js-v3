// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAlertManagerDefinitionRequest, DescribeAlertManagerDefinitionResponse } from "../models/models_0";
import {
  de_DescribeAlertManagerDefinitionCommand,
  se_DescribeAlertManagerDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlertManagerDefinitionCommand}.
 */
export interface DescribeAlertManagerDefinitionCommandInput extends DescribeAlertManagerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAlertManagerDefinitionCommand}.
 */
export interface DescribeAlertManagerDefinitionCommandOutput
  extends DescribeAlertManagerDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the full information about the alert manager definition for a
 *             workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeAlertManagerDefinitionCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeAlertManagerDefinitionCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // DescribeAlertManagerDefinitionRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAlertManagerDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlertManagerDefinitionResponse
 * //   alertManagerDefinition: { // AlertManagerDefinitionDescription
 * //     status: { // AlertManagerDefinitionStatus
 * //       statusCode: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     data: new Uint8Array(), // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAlertManagerDefinitionCommandInput - {@link DescribeAlertManagerDefinitionCommandInput}
 * @returns {@link DescribeAlertManagerDefinitionCommandOutput}
 * @see {@link DescribeAlertManagerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeAlertManagerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *             service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 * @public
 */
export class DescribeAlertManagerDefinitionCommand extends $Command
  .classBuilder<
    DescribeAlertManagerDefinitionCommandInput,
    DescribeAlertManagerDefinitionCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "DescribeAlertManagerDefinition", {})
  .n("AmpClient", "DescribeAlertManagerDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAlertManagerDefinitionCommand)
  .de(de_DescribeAlertManagerDefinitionCommand)
  .build() {}
