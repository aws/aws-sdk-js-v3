// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportConfigurationsResponse } from "../models/models_0";
import { ExportConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportConfigurationsCommand}.
 */
export interface ExportConfigurationsCommandInput {}
/**
 * @public
 *
 * The output of {@link ExportConfigurationsCommand}.
 */
export interface ExportConfigurationsCommandOutput extends ExportConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Deprecated. Use <code>StartExportTask</code> instead.</p>
 *          <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that
 *       enables you to view and evaluate the data. Data includes tags and tag associations, processes,
 *       connections, servers, and system performance. This API returns an export ID that you can query
 *       using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of
 *       two configuration exports in six hours.</p>
 *
 * @deprecated deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ExportConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ExportConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = {};
 * const command = new ExportConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportConfigurationsResponse
 * //   exportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportConfigurationsCommandInput - {@link ExportConfigurationsCommandInput}
 * @returns {@link ExportConfigurationsCommandOutput}
 * @see {@link ExportConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ExportConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not permitted.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 *
 * @public
 */
export class ExportConfigurationsCommand extends $Command
  .classBuilder<
    ExportConfigurationsCommandInput,
    ExportConfigurationsCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPoseidonService_V2015_11_01", "ExportConfigurations", {})
  .n("ApplicationDiscoveryServiceClient", "ExportConfigurationsCommand")
  .sc(ExportConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ExportConfigurationsResponse;
    };
    sdk: {
      input: ExportConfigurationsCommandInput;
      output: ExportConfigurationsCommandOutput;
    };
  };
}
