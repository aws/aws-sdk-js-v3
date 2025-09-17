// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetComponentRequest, GetComponentResponse } from "../models/models_0";
import { de_GetComponentCommand, se_GetComponentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComponentCommand}.
 */
export interface GetComponentCommandInput extends GetComponentRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentCommand}.
 */
export interface GetComponentCommandOutput extends GetComponentResponse, __MetadataBearer {}

/**
 * <p>Gets a component object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetComponentRequest
 *   componentBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentResponse
 * //   requestId: "STRING_VALUE",
 * //   component: { // Component
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     changeDescription: "STRING_VALUE",
 * //     type: "BUILD" || "TEST",
 * //     platform: "Windows" || "Linux" || "macOS",
 * //     supportedOsVersions: [ // OsVersionList
 * //       "STRING_VALUE",
 * //     ],
 * //     state: { // ComponentState
 * //       status: "DEPRECATED" || "DISABLED" || "ACTIVE",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     parameters: [ // ComponentParameterDetailList
 * //       { // ComponentParameterDetail
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         defaultValue: [ // ComponentParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     owner: "STRING_VALUE",
 * //     data: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     encrypted: true || false,
 * //     dateCreated: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     publisher: "STRING_VALUE",
 * //     obfuscate: true || false,
 * //     productCodes: [ // ProductCodeList
 * //       { // ProductCodeListItem
 * //         productCodeId: "STRING_VALUE", // required
 * //         productCodeType: "marketplace", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComponentCommandInput - {@link GetComponentCommandInput}
 * @returns {@link GetComponentCommandOutput}
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
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
export class GetComponentCommand extends $Command
  .classBuilder<
    GetComponentCommandInput,
    GetComponentCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "GetComponent", {})
  .n("ImagebuilderClient", "GetComponentCommand")
  .f(void 0, void 0)
  .ser(se_GetComponentCommand)
  .de(de_GetComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComponentRequest;
      output: GetComponentResponse;
    };
    sdk: {
      input: GetComponentCommandInput;
      output: GetComponentCommandOutput;
    };
  };
}
