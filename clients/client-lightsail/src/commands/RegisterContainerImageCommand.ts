// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterContainerImageRequest, RegisterContainerImageResult } from "../models/models_1";
import { RegisterContainerImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterContainerImageCommand}.
 */
export interface RegisterContainerImageCommandInput extends RegisterContainerImageRequest {}
/**
 * @public
 *
 * The output of {@link RegisterContainerImageCommand}.
 */
export interface RegisterContainerImageCommandOutput extends RegisterContainerImageResult, __MetadataBearer {}

/**
 * Registers a container image to your Amazon Lightsail container service.
 *
 * > **Note:** This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see [Pushing and managing container images on your Amazon Lightsail container services](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-pushing-container-images) in the *Amazon Lightsail Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RegisterContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RegisterContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // RegisterContainerImageRequest
 *   serviceName: "STRING_VALUE", // required
 *   label: "STRING_VALUE", // required
 *   digest: "STRING_VALUE", // required
 * };
 * const command = new RegisterContainerImageCommand(input);
 * const response = await client.send(command);
 * // { // RegisterContainerImageResult
 * //   containerImage: { // ContainerImage
 * //     image: "STRING_VALUE",
 * //     digest: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterContainerImageCommandInput - {@link RegisterContainerImageCommandInput}
 * @returns {@link RegisterContainerImageCommandOutput}
 * @see {@link RegisterContainerImageCommandInput} for command's `input` shape.
 * @see {@link RegisterContainerImageCommandOutput} for command's `response` shape.
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
export class RegisterContainerImageCommand extends command<RegisterContainerImageCommandInput, RegisterContainerImageCommandOutput>(
  _ep0,
  _mw0,
  "RegisterContainerImage",
  RegisterContainerImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterContainerImageRequest;
      output: RegisterContainerImageResult;
    };
    sdk: {
      input: RegisterContainerImageCommandInput;
      output: RegisterContainerImageCommandOutput;
    };
  };
}
