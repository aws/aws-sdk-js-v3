// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EvaluateMappingTemplateRequest, EvaluateMappingTemplateResponse } from "../models/models_0";
import { EvaluateMappingTemplate } from "../schemas/schemas_6_Evaluate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EvaluateMappingTemplateCommand}.
 */
export interface EvaluateMappingTemplateCommandInput extends EvaluateMappingTemplateRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateMappingTemplateCommand}.
 */
export interface EvaluateMappingTemplateCommandOutput extends EvaluateMappingTemplateResponse, __MetadataBearer {}

/**
 * <p>Evaluates a given template and returns the response. The mapping template can be a
 *          request or response template.</p>
 *          <p>Request templates take the incoming request after a GraphQL operation is parsed and
 *          convert it into a request configuration for the selected data source operation. Response
 *          templates interpret responses from the data source and map it to the shape of the GraphQL
 *          field output type.</p>
 *          <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, EvaluateMappingTemplateCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, EvaluateMappingTemplateCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // EvaluateMappingTemplateRequest
 *   template: "STRING_VALUE", // required
 *   context: "STRING_VALUE", // required
 * };
 * const command = new EvaluateMappingTemplateCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateMappingTemplateResponse
 * //   evaluationResult: "STRING_VALUE",
 * //   error: { // ErrorDetail
 * //     message: "STRING_VALUE",
 * //   },
 * //   logs: [ // Logs
 * //     "STRING_VALUE",
 * //   ],
 * //   stash: "STRING_VALUE",
 * //   outErrors: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EvaluateMappingTemplateCommandInput - {@link EvaluateMappingTemplateCommandInput}
 * @returns {@link EvaluateMappingTemplateCommandOutput}
 * @see {@link EvaluateMappingTemplateCommandInput} for command's `input` shape.
 * @see {@link EvaluateMappingTemplateCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class EvaluateMappingTemplateCommand extends $Command
  .classBuilder<
    EvaluateMappingTemplateCommandInput,
    EvaluateMappingTemplateCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "EvaluateMappingTemplate", {})
  .n("AppSyncClient", "EvaluateMappingTemplateCommand")
  .sc(EvaluateMappingTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvaluateMappingTemplateRequest;
      output: EvaluateMappingTemplateResponse;
    };
    sdk: {
      input: EvaluateMappingTemplateCommandInput;
      output: EvaluateMappingTemplateCommandOutput;
    };
  };
}
