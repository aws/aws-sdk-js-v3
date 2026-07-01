// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EstimateTemplateCostInput, EstimateTemplateCostOutput } from "../models/models_0";
import { EstimateTemplateCost$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EstimateTemplateCostCommand}.
 */
export interface EstimateTemplateCostCommandInput extends EstimateTemplateCostInput {}
/**
 * @public
 *
 * The output of {@link EstimateTemplateCostCommand}.
 */
export interface EstimateTemplateCostCommandOutput extends EstimateTemplateCostOutput, __MetadataBearer {}

/**
 * <p>Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple
 *       Monthly Calculator URL with a query string that describes the resources required to run the
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, EstimateTemplateCostCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, EstimateTemplateCostCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // EstimateTemplateCostInput
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 *   Parameters: [ // Parameters
 *     { // Parameter
 *       ParameterKey: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       UsePreviousValue: true || false,
 *       ResolvedValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new EstimateTemplateCostCommand(input);
 * const response = await client.send(command);
 * // { // EstimateTemplateCostOutput
 * //   Url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EstimateTemplateCostCommandInput - {@link EstimateTemplateCostCommandInput}
 * @returns {@link EstimateTemplateCostCommandOutput}
 * @see {@link EstimateTemplateCostCommandInput} for command's `input` shape.
 * @see {@link EstimateTemplateCostCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class EstimateTemplateCostCommand extends command<EstimateTemplateCostCommandInput, EstimateTemplateCostCommandOutput>(
  _ep0,
  _mw0,
  "EstimateTemplateCost",
  EstimateTemplateCost$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EstimateTemplateCostInput;
      output: EstimateTemplateCostOutput;
    };
    sdk: {
      input: EstimateTemplateCostCommandInput;
      output: EstimateTemplateCostCommandOutput;
    };
  };
}
