// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateConnectorScanConfigurationRequest,
  UpdateConnectorScanConfigurationResponse,
} from "../models/models_1";
import { UpdateConnectorScanConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConnectorScanConfigurationCommand}.
 */
export interface UpdateConnectorScanConfigurationCommandInput extends UpdateConnectorScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorScanConfigurationCommand}.
 */
export interface UpdateConnectorScanConfigurationCommandOutput extends UpdateConnectorScanConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates scan configuration settings for resources associated with an Amazon Web Services Config connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateConnectorScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateConnectorScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateConnectorScanConfigurationRequest
 *   awsConfigConnectorArn: "STRING_VALUE", // required
 *   scanConfiguration: { // ConnectorScanConfiguration
 *     containerImageScanning: { // ConnectorContainerImageScanConfiguration
 *       pushDuration: "STRING_VALUE",
 *       pullDuration: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateConnectorScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConnectorScanConfigurationCommandInput - {@link UpdateConnectorScanConfigurationCommandInput}
 * @returns {@link UpdateConnectorScanConfigurationCommandOutput}
 * @see {@link UpdateConnectorScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorScanConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred. This exception occurs when the same resource is being modified by
 *          concurrent requests.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @example Set 30-day push and 14-day pull rescan durations for an Azure container registry connector
 * ```javascript
 * //
 * const input = {
 *   awsConfigConnectorArn: "arn:aws:config:us-east-1:123456789012:connector/azure/a7bc5463-04ce-4b52-901e-f26f7292a4a7/2fbed4bd-5b95-4947-a751-8defc76ecdae",
 *   scanConfiguration: {
 *     containerImageScanning: {
 *       pullDuration: "DAYS_14",
 *       pushDuration: "DAYS_30"
 *     }
 *   }
 * };
 * const command = new UpdateConnectorScanConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConnectorScanConfigurationCommand extends command<UpdateConnectorScanConfigurationCommandInput, UpdateConnectorScanConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConnectorScanConfiguration",
  UpdateConnectorScanConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorScanConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateConnectorScanConfigurationCommandInput;
      output: UpdateConnectorScanConfigurationCommandOutput;
    };
  };
}
