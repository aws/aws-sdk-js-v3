// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTestTemplateRequest, GetTestTemplateResponse } from "../models/models_0";
import { GetTestTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTestTemplateCommand}.
 */
export interface GetTestTemplateCommandInput extends GetTestTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetTestTemplateCommand}.
 */
export interface GetTestTemplateCommandOutput extends GetTestTemplateResponse, __MetadataBearer {}

/**
 * <p>Retrieves a resilience test template by ARN, including the parameters it accepts and the fault actions it runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, GetTestTemplateCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, GetTestTemplateCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // GetTestTemplateRequest
 *   testTemplateArn: "STRING_VALUE", // required
 * };
 * const command = new GetTestTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetTestTemplateResponse
 * //   testTemplate: { // TestTemplate
 * //     testTemplateArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     parameters: [ // TestTemplateParameterList
 * //       { // TestTemplateParameter
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         type: "STRING" || "STRING_LIST" || "INTEGER", // required
 * //         required: true || false, // required
 * //         defaultValue: "STRING_VALUE",
 * //         maxValues: Number("int"),
 * //       },
 * //     ],
 * //     actions: [ // TestActionList
 * //       { // TestAction
 * //         actionId: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         resourceType: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestTemplateCommandInput - {@link GetTestTemplateCommandInput}
 * @returns {@link GetTestTemplateCommandOutput}
 * @see {@link GetTestTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTestTemplateCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class GetTestTemplateCommand extends command<GetTestTemplateCommandInput, GetTestTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetTestTemplate",
  GetTestTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestTemplateRequest;
      output: GetTestTemplateResponse;
    };
    sdk: {
      input: GetTestTemplateCommandInput;
      output: GetTestTemplateCommandOutput;
    };
  };
}
