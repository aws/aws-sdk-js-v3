// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFlywheelRequest, DeleteFlywheelResponse } from "../models/models_0";
import { DeleteFlywheel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFlywheelCommand}.
 */
export interface DeleteFlywheelCommandInput extends DeleteFlywheelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFlywheelCommand}.
 */
export interface DeleteFlywheelCommandOutput extends DeleteFlywheelResponse, __MetadataBearer {}

/**
 * Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.
 *
 * For more information about flywheels, see [Flywheel overview](https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html) in the *Amazon Comprehend Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DeleteFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DeleteFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DeleteFlywheelRequest
 *   FlywheelArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteFlywheelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFlywheelCommandInput - {@link DeleteFlywheelCommandInput}
 * @returns {@link DeleteFlywheelCommandOutput}
 * @see {@link DeleteFlywheelCommandInput} for command's `input` shape.
 * @see {@link DeleteFlywheelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource name is already in use. Use a different name and try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. Check the ARN and try your request again.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The specified resource is not available. Check the resource and try your request again.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class DeleteFlywheelCommand extends command<DeleteFlywheelCommandInput, DeleteFlywheelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFlywheel",
  DeleteFlywheel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFlywheelRequest;
      output: {};
    };
    sdk: {
      input: DeleteFlywheelCommandInput;
      output: DeleteFlywheelCommandOutput;
    };
  };
}
