// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateSourceFromS3TableIntegrationRequest,
  DisassociateSourceFromS3TableIntegrationResponse,
} from "../models/models_0";
import { DisassociateSourceFromS3TableIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSourceFromS3TableIntegrationCommand}.
 */
export interface DisassociateSourceFromS3TableIntegrationCommandInput
  extends DisassociateSourceFromS3TableIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSourceFromS3TableIntegrationCommand}.
 */
export interface DisassociateSourceFromS3TableIntegrationCommandOutput
  extends DisassociateSourceFromS3TableIntegrationResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a data source from an S3 Table Integration, removing query access and
 *       deleting all associated data from the integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DisassociateSourceFromS3TableIntegrationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DisassociateSourceFromS3TableIntegrationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DisassociateSourceFromS3TableIntegrationRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DisassociateSourceFromS3TableIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateSourceFromS3TableIntegrationResponse
 * //   identifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateSourceFromS3TableIntegrationCommandInput - {@link DisassociateSourceFromS3TableIntegrationCommandInput}
 * @returns {@link DisassociateSourceFromS3TableIntegrationCommandOutput}
 * @see {@link DisassociateSourceFromS3TableIntegrationCommandInput} for command's `input` shape.
 * @see {@link DisassociateSourceFromS3TableIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This exception is returned
 *       when the service encounters an unexpected condition that prevents it from fulfilling the
 *       request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DisassociateSourceFromS3TableIntegrationCommand extends $Command
  .classBuilder<
    DisassociateSourceFromS3TableIntegrationCommandInput,
    DisassociateSourceFromS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DisassociateSourceFromS3TableIntegration", {})
  .n("CloudWatchLogsClient", "DisassociateSourceFromS3TableIntegrationCommand")
  .sc(DisassociateSourceFromS3TableIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSourceFromS3TableIntegrationRequest;
      output: DisassociateSourceFromS3TableIntegrationResponse;
    };
    sdk: {
      input: DisassociateSourceFromS3TableIntegrationCommandInput;
      output: DisassociateSourceFromS3TableIntegrationCommandOutput;
    };
  };
}
