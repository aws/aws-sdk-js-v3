// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContainerImagesRequest, GetContainerImagesResult } from "../models/models_0";
import { GetContainerImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the container images that are registered to your Amazon Lightsail container service.
 *
 * > **Note:** If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.
 *
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
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetContainerImagesCommand extends command<GetContainerImagesCommandInput, GetContainerImagesCommandOutput>(
  _ep0,
  _mw0,
  "GetContainerImages",
  GetContainerImages$
) {
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
