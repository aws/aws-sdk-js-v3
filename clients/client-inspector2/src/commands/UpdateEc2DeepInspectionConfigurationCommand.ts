// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateEc2DeepInspectionConfigurationRequest,
  UpdateEc2DeepInspectionConfigurationResponse,
} from "../models/models_1";
import { UpdateEc2DeepInspectionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEc2DeepInspectionConfigurationCommand}.
 */
export interface UpdateEc2DeepInspectionConfigurationCommandInput extends UpdateEc2DeepInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEc2DeepInspectionConfigurationCommand}.
 */
export interface UpdateEc2DeepInspectionConfigurationCommandOutput extends UpdateEc2DeepInspectionConfigurationResponse, __MetadataBearer {}

/**
 * Activates, deactivates Amazon Inspector deep inspection, or updates custom paths for your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateEc2DeepInspectionConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateEc2DeepInspectionConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateEc2DeepInspectionConfigurationRequest
 *   activateDeepInspection: true || false,
 *   packagePaths: [ // PathList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateEc2DeepInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEc2DeepInspectionConfigurationResponse
 * //   packagePaths: [ // PathList
 * //     "STRING_VALUE",
 * //   ],
 * //   orgPackagePaths: [
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEc2DeepInspectionConfigurationCommandInput - {@link UpdateEc2DeepInspectionConfigurationCommandInput}
 * @returns {@link UpdateEc2DeepInspectionConfigurationCommandOutput}
 * @see {@link UpdateEc2DeepInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateEc2DeepInspectionConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateEc2DeepInspectionConfigurationCommand extends command<UpdateEc2DeepInspectionConfigurationCommandInput, UpdateEc2DeepInspectionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEc2DeepInspectionConfiguration",
  UpdateEc2DeepInspectionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEc2DeepInspectionConfigurationRequest;
      output: UpdateEc2DeepInspectionConfigurationResponse;
    };
    sdk: {
      input: UpdateEc2DeepInspectionConfigurationCommandInput;
      output: UpdateEc2DeepInspectionConfigurationCommandOutput;
    };
  };
}
