// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportConfigurationsResponse } from "../models/models_0";
import { ExportConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deprecated. Use `StartExportTask` instead.
 *
 * Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the *DescribeExportConfigurations* API. The system imposes a limit of two configuration exports in six hours.
 *
 * @deprecated deprecated.
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
 *
 * The user does not have permission to perform the action. Check the IAM policy associated with this user.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home Region is not set. Set the home Region to continue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid. Verify the parameters and try again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This operation is not permitted.
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 *
 * Base exception class for all service exceptions from ApplicationDiscoveryService service.
 *
 * @public
 */
export class ExportConfigurationsCommand extends command<ExportConfigurationsCommandInput, ExportConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ExportConfigurations",
  ExportConfigurations$
) {
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
