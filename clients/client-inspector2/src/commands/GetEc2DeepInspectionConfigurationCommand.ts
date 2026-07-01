// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetEc2DeepInspectionConfigurationRequest,
  GetEc2DeepInspectionConfigurationResponse,
} from "../models/models_0";
import { GetEc2DeepInspectionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEc2DeepInspectionConfigurationCommand}.
 */
export interface GetEc2DeepInspectionConfigurationCommandInput extends GetEc2DeepInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEc2DeepInspectionConfigurationCommand}.
 */
export interface GetEc2DeepInspectionConfigurationCommandOutput extends GetEc2DeepInspectionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the activation status of Amazon Inspector deep inspection and custom paths associated
 *          with your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetEc2DeepInspectionConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetEc2DeepInspectionConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = {};
 * const command = new GetEc2DeepInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEc2DeepInspectionConfigurationResponse
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
 * @param GetEc2DeepInspectionConfigurationCommandInput - {@link GetEc2DeepInspectionConfigurationCommandInput}
 * @returns {@link GetEc2DeepInspectionConfigurationCommandOutput}
 * @see {@link GetEc2DeepInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEc2DeepInspectionConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class GetEc2DeepInspectionConfigurationCommand extends command<GetEc2DeepInspectionConfigurationCommandInput, GetEc2DeepInspectionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetEc2DeepInspectionConfiguration",
  GetEc2DeepInspectionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetEc2DeepInspectionConfigurationResponse;
    };
    sdk: {
      input: GetEc2DeepInspectionConfigurationCommandInput;
      output: GetEc2DeepInspectionConfigurationCommandOutput;
    };
  };
}
