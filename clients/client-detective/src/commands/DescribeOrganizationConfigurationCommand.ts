// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
} from "../models/models_0";
import { DescribeOrganizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConfigurationCommand}.
 */
export interface DescribeOrganizationConfigurationCommandInput extends DescribeOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConfigurationCommand}.
 */
export interface DescribeOrganizationConfigurationCommandOutput extends DescribeOrganizationConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the configuration for the organization behavior graph.
 *          Currently indicates whether to automatically enable new organization accounts as member
 *          accounts.</p>
 *          <p>Can only be called by the Detective administrator account for the organization. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DescribeOrganizationConfigurationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DescribeOrganizationConfigurationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // DescribeOrganizationConfigurationRequest
 *   GraphArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConfigurationResponse
 * //   AutoEnable: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationConfigurationCommandInput - {@link DescribeOrganizationConfigurationCommandInput}
 * @returns {@link DescribeOrganizationConfigurationCommandOutput}
 * @see {@link DescribeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class DescribeOrganizationConfigurationCommand extends command<DescribeOrganizationConfigurationCommandInput, DescribeOrganizationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeOrganizationConfiguration",
  DescribeOrganizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationConfigurationRequest;
      output: DescribeOrganizationConfigurationResponse;
    };
    sdk: {
      input: DescribeOrganizationConfigurationCommandInput;
      output: DescribeOrganizationConfigurationCommandOutput;
    };
  };
}
