// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateSourceToS3TableIntegrationRequest,
  AssociateSourceToS3TableIntegrationResponse,
} from "../models/models_0";
import { AssociateSourceToS3TableIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSourceToS3TableIntegrationCommand}.
 */
export interface AssociateSourceToS3TableIntegrationCommandInput extends AssociateSourceToS3TableIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSourceToS3TableIntegrationCommand}.
 */
export interface AssociateSourceToS3TableIntegrationCommandOutput
  extends AssociateSourceToS3TableIntegrationResponse,
    __MetadataBearer {}

/**
 * <p>Associates a data source with an S3 Table Integration for query access in the 'logs'
 *       namespace. This enables querying log data using analytics engines that support Iceberg such as
 *       Amazon Athena, Amazon Redshift, and Apache Spark.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, AssociateSourceToS3TableIntegrationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, AssociateSourceToS3TableIntegrationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // AssociateSourceToS3TableIntegrationRequest
 *   integrationArn: "STRING_VALUE", // required
 *   dataSource: { // DataSource
 *     name: "STRING_VALUE", // required
 *     type: "STRING_VALUE",
 *   },
 * };
 * const command = new AssociateSourceToS3TableIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSourceToS3TableIntegrationResponse
 * //   identifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateSourceToS3TableIntegrationCommandInput - {@link AssociateSourceToS3TableIntegrationCommandInput}
 * @returns {@link AssociateSourceToS3TableIntegrationCommandOutput}
 * @see {@link AssociateSourceToS3TableIntegrationCommandInput} for command's `input` shape.
 * @see {@link AssociateSourceToS3TableIntegrationCommandOutput} for command's `response` shape.
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
export class AssociateSourceToS3TableIntegrationCommand extends $Command
  .classBuilder<
    AssociateSourceToS3TableIntegrationCommandInput,
    AssociateSourceToS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "AssociateSourceToS3TableIntegration", {})
  .n("CloudWatchLogsClient", "AssociateSourceToS3TableIntegrationCommand")
  .sc(AssociateSourceToS3TableIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSourceToS3TableIntegrationRequest;
      output: AssociateSourceToS3TableIntegrationResponse;
    };
    sdk: {
      input: AssociateSourceToS3TableIntegrationCommandInput;
      output: AssociateSourceToS3TableIntegrationCommandOutput;
    };
  };
}
