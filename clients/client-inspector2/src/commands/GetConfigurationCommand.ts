// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConfigurationRequest, GetConfigurationResponse } from "../models/models_0";
import { GetConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConfigurationCommand}.
 */
export interface GetConfigurationCommandInput extends GetConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationCommand}.
 */
export interface GetConfigurationCommandOutput extends GetConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves setting configurations for Amazon Inspector scans. If you specify an
 *          <code>accountId</code>, this operation returns the scan configuration for that member
 *          account. You must be the delegated administrator for the specified member account.
 *          If you do not specify an <code>accountId</code>, this operation returns your own
 *          scan configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // GetConfigurationRequest
 *   accountId: "STRING_VALUE",
 * };
 * const command = new GetConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationResponse
 * //   ecrConfiguration: { // EcrConfigurationState
 * //     rescanDurationState: { // EcrRescanDurationState
 * //       rescanDuration: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       pullDateRescanDuration: "STRING_VALUE",
 * //       pullDateRescanMode: "STRING_VALUE",
 * //     },
 * //   },
 * //   ec2Configuration: { // Ec2ConfigurationState
 * //     scanModeState: { // Ec2ScanModeState
 * //       scanMode: "STRING_VALUE",
 * //       scanModeStatus: "STRING_VALUE",
 * //     },
 * //     vmScannerState: { // VMScannerState
 * //       activated: true || false,
 * //       activatedAt: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfigurationCommandInput - {@link GetConfigurationCommandInput}
 * @returns {@link GetConfigurationCommandOutput}
 * @see {@link GetConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
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
 * @public
 */
export class GetConfigurationCommand extends command<GetConfigurationCommandInput, GetConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetConfiguration",
  GetConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationRequest;
      output: GetConfigurationResponse;
    };
    sdk: {
      input: GetConfigurationCommandInput;
      output: GetConfigurationCommandOutput;
    };
  };
}
