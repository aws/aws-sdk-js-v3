// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportComponentRequest, ImportComponentResponse } from "../models/models_0";
import { ImportComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Imports a component and transforms its data into a component document. For
 * 			the <code>SHELL</code> format, Image Builder wraps your script in a component
 * 			document with a single step that runs the script.</p>
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
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>You have specified a combination of parameters that isn't valid. For
 * 			example, two mutually exclusive parameters, or a parameter without its
 * 			required companion parameter. Review the error message for details.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link InvalidVersionNumberException} (client fault)
 *  <p>Your version number is out of bounds or does not follow the required syntax.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Import a component from a shell script
 * ```javascript
 * // The following example imports a plain shell script as a Linux build component.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE88888",
 *   data: "sudo yum update -y
 * sudo yum -y install my-app
 * ",
 *   description: "Installs my application from an imported shell script",
 *   format: "SHELL",
 *   name: "my-example-imported-component",
 *   platform: "Linux",
 *   semanticVersion: "1.0.0",
 *   type: "BUILD"
 * };
 * const command = new ImportComponentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE88888",
 *   componentBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-imported-component/1.0.0/1",
 *   requestId: "e62cb87f-e291-4fb2-9305-54a7878c3b99"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ImportComponentCommand extends command<ImportComponentCommandInput, ImportComponentCommandOutput>(
  _ep0,
  _mw0,
  "ImportComponent",
  ImportComponent$
) {
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
