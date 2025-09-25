// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerImagesRequest, GetContainerImagesResult } from "../models/models_0";
import { GetContainerImages } from "../schemas/schemas_11_Container";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContainerImagesCommand}.
 */
export interface GetContainerImagesCommandInput extends GetContainerImagesRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerImagesCommand}.
 */
export interface GetContainerImagesCommandOutput extends GetContainerImagesResult, __MetadataBearer {}

/**
 * <p>Returns the container images that are registered to your Amazon Lightsail container
 *       service.</p>
 *          <note>
 *             <p>If you created a deployment on your Lightsail container service that uses container
 *         images from a public registry like Docker Hub, those images are not returned as part of this
 *         action. Those images are not registered to your Lightsail container service.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerImagesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerImagesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetContainerImagesRequest
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new GetContainerImagesCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerImagesResult
 * //   containerImages: [ // ContainerImageList
 * //     { // ContainerImage
 * //       image: "STRING_VALUE",
 * //       digest: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContainerImagesCommandInput - {@link GetContainerImagesCommandInput}
 * @returns {@link GetContainerImagesCommandOutput}
 * @see {@link GetContainerImagesCommandInput} for command's `input` shape.
 * @see {@link GetContainerImagesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetContainerImagesCommand extends $Command
  .classBuilder<
    GetContainerImagesCommandInput,
    GetContainerImagesCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetContainerImages", {})
  .n("LightsailClient", "GetContainerImagesCommand")
  .sc(GetContainerImages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerImagesRequest;
      output: GetContainerImagesResult;
    };
    sdk: {
      input: GetContainerImagesCommandInput;
      output: GetContainerImagesCommandOutput;
    };
  };
}
