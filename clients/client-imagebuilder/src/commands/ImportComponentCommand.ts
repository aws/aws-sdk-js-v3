// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ImportComponentRequest, ImportComponentResponse } from "../models/models_0";
import { ImportComponent } from "../schemas/schemas_16_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportComponentCommand}.
 */
export interface ImportComponentCommandInput extends ImportComponentRequest {}
/**
 * @public
 *
 * The output of {@link ImportComponentCommand}.
 */
export interface ImportComponentCommandOutput extends ImportComponentResponse, __MetadataBearer {}

/**
 * <p>Imports a component and transforms its data into a component document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ImportComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ImportComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ImportComponentRequest
 *   name: "STRING_VALUE", // required
 *   semanticVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   changeDescription: "STRING_VALUE",
 *   type: "BUILD" || "TEST", // required
 *   format: "SHELL", // required
 *   platform: "Windows" || "Linux" || "macOS", // required
 *   data: "STRING_VALUE",
 *   uri: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new ImportComponentCommand(input);
 * const response = await client.send(command);
 * // { // ImportComponentResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   componentBuildVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportComponentCommandInput - {@link ImportComponentCommandInput}
 * @returns {@link ImportComponentCommandOutput}
 * @see {@link ImportComponentCommandInput} for command's `input` shape.
 * @see {@link ImportComponentCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>You have specified two or more mutually exclusive parameters. Review the error message
 * 			for details.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link InvalidVersionNumberException} (client fault)
 *  <p>Your version number is out of bounds or does not follow the required syntax.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class ImportComponentCommand extends $Command
  .classBuilder<
    ImportComponentCommandInput,
    ImportComponentCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "ImportComponent", {})
  .n("ImagebuilderClient", "ImportComponentCommand")
  .sc(ImportComponent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportComponentRequest;
      output: ImportComponentResponse;
    };
    sdk: {
      input: ImportComponentCommandInput;
      output: ImportComponentCommandOutput;
    };
  };
}
