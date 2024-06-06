// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportSourceNetworkCfnTemplateRequest, ExportSourceNetworkCfnTemplateResponse } from "../models/models_0";
import {
  de_ExportSourceNetworkCfnTemplateCommand,
  se_ExportSourceNetworkCfnTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportSourceNetworkCfnTemplateCommand}.
 */
export interface ExportSourceNetworkCfnTemplateCommandInput extends ExportSourceNetworkCfnTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ExportSourceNetworkCfnTemplateCommand}.
 */
export interface ExportSourceNetworkCfnTemplateCommandOutput
  extends ExportSourceNetworkCfnTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Export the Source Network CloudFormation template to an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ExportSourceNetworkCfnTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ExportSourceNetworkCfnTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // ExportSourceNetworkCfnTemplateRequest
 *   sourceNetworkID: "STRING_VALUE", // required
 * };
 * const command = new ExportSourceNetworkCfnTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ExportSourceNetworkCfnTemplateResponse
 * //   s3DestinationUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportSourceNetworkCfnTemplateCommandInput - {@link ExportSourceNetworkCfnTemplateCommandInput}
 * @returns {@link ExportSourceNetworkCfnTemplateCommandOutput}
 * @see {@link ExportSourceNetworkCfnTemplateCommandInput} for command's `input` shape.
 * @see {@link ExportSourceNetworkCfnTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 * @public
 */
export class ExportSourceNetworkCfnTemplateCommand extends $Command
  .classBuilder<
    ExportSourceNetworkCfnTemplateCommandInput,
    ExportSourceNetworkCfnTemplateCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "ExportSourceNetworkCfnTemplate", {})
  .n("DrsClient", "ExportSourceNetworkCfnTemplateCommand")
  .f(void 0, void 0)
  .ser(se_ExportSourceNetworkCfnTemplateCommand)
  .de(de_ExportSourceNetworkCfnTemplateCommand)
  .build() {}
