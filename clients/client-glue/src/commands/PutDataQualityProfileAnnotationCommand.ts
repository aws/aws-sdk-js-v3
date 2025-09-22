// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutDataQualityProfileAnnotationRequest, PutDataQualityProfileAnnotationResponse } from "../models/models_3";
import { PutDataQualityProfileAnnotation } from "../schemas/schemas_59_DataQuality";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDataQualityProfileAnnotationCommand}.
 */
export interface PutDataQualityProfileAnnotationCommandInput extends PutDataQualityProfileAnnotationRequest {}
/**
 * @public
 *
 * The output of {@link PutDataQualityProfileAnnotationCommand}.
 */
export interface PutDataQualityProfileAnnotationCommandOutput
  extends PutDataQualityProfileAnnotationResponse,
    __MetadataBearer {}

/**
 * <p>Annotate all datapoints for a Profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutDataQualityProfileAnnotationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutDataQualityProfileAnnotationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PutDataQualityProfileAnnotationRequest
 *   ProfileId: "STRING_VALUE", // required
 *   InclusionAnnotation: "INCLUDE" || "EXCLUDE", // required
 * };
 * const command = new PutDataQualityProfileAnnotationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDataQualityProfileAnnotationCommandInput - {@link PutDataQualityProfileAnnotationCommandInput}
 * @returns {@link PutDataQualityProfileAnnotationCommandOutput}
 * @see {@link PutDataQualityProfileAnnotationCommandInput} for command's `input` shape.
 * @see {@link PutDataQualityProfileAnnotationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class PutDataQualityProfileAnnotationCommand extends $Command
  .classBuilder<
    PutDataQualityProfileAnnotationCommandInput,
    PutDataQualityProfileAnnotationCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "PutDataQualityProfileAnnotation", {})
  .n("GlueClient", "PutDataQualityProfileAnnotationCommand")
  .sc(PutDataQualityProfileAnnotation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDataQualityProfileAnnotationRequest;
      output: {};
    };
    sdk: {
      input: PutDataQualityProfileAnnotationCommandInput;
      output: PutDataQualityProfileAnnotationCommandOutput;
    };
  };
}
