// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContainerImageRequest, DeleteContainerImageResult } from "../models/models_0";
import { DeleteContainerImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContainerImageCommand}.
 */
export interface DeleteContainerImageCommandInput extends DeleteContainerImageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContainerImageCommand}.
 */
export interface DeleteContainerImageCommandOutput extends DeleteContainerImageResult, __MetadataBearer {}

/**
 * Deletes a container image that is registered to your Amazon Lightsail container service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // DeleteContainerImageRequest
 *   serviceName: "STRING_VALUE", // required
 *   image: "STRING_VALUE", // required
 * };
 * const command = new DeleteContainerImageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContainerImageCommandInput - {@link DeleteContainerImageCommandInput}
 * @returns {@link DeleteContainerImageCommandOutput}
 * @see {@link DeleteContainerImageCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerImageCommandOutput} for command's `response` shape.
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
export class DeleteContainerImageCommand extends command<DeleteContainerImageCommandInput, DeleteContainerImageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContainerImage",
  DeleteContainerImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContainerImageRequest;
      output: {};
    };
    sdk: {
      input: DeleteContainerImageCommandInput;
      output: DeleteContainerImageCommandOutput;
    };
  };
}
