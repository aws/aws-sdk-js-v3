// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateOrganizationConfigurationRequest,
  UpdateOrganizationConfigurationResponse,
} from "../models/models_1";
import { UpdateOrganizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOrganizationConfigurationCommand}.
 */
export interface UpdateOrganizationConfigurationCommandInput extends UpdateOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationConfigurationCommand}.
 */
export interface UpdateOrganizationConfigurationCommandOutput extends UpdateOrganizationConfigurationResponse, __MetadataBearer {}

/**
 * Updates the configurations for your Amazon Inspector organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateOrganizationConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateOrganizationConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateOrganizationConfigurationRequest
 *   autoEnable: { // AutoEnable
 *     ec2: true || false, // required
 *     ecr: true || false, // required
 *     lambda: true || false,
 *     lambdaCode: true || false,
 *     codeRepository: true || false,
 *     ami: true || false,
 *   },
 * };
 * const command = new UpdateOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOrganizationConfigurationResponse
 * //   autoEnable: { // AutoEnable
 * //     ec2: true || false, // required
 * //     ecr: true || false, // required
 * //     lambda: true || false,
 * //     lambdaCode: true || false,
 * //     codeRepository: true || false,
 * //     ami: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateOrganizationConfigurationCommandInput - {@link UpdateOrganizationConfigurationCommandInput}
 * @returns {@link UpdateOrganizationConfigurationCommandOutput}
 * @see {@link UpdateOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class UpdateOrganizationConfigurationCommand extends command<UpdateOrganizationConfigurationCommandInput, UpdateOrganizationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOrganizationConfiguration",
  UpdateOrganizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOrganizationConfigurationRequest;
      output: UpdateOrganizationConfigurationResponse;
    };
    sdk: {
      input: UpdateOrganizationConfigurationCommandInput;
      output: UpdateOrganizationConfigurationCommandOutput;
    };
  };
}
