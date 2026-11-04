// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMitigationActionRequest, DeleteMitigationActionResponse } from "../models/models_0";
import { DeleteMitigationAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMitigationActionCommand}.
 */
export interface DeleteMitigationActionCommandInput extends DeleteMitigationActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMitigationActionCommand}.
 */
export interface DeleteMitigationActionCommandOutput extends DeleteMitigationActionResponse, __MetadataBearer {}

/**
 * Deletes a defined mitigation action from your Amazon Web Services accounts.
 *
 * Requires permission to access the [DeleteMitigationAction](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteMitigationActionRequest
 *   actionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMitigationActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMitigationActionCommandInput - {@link DeleteMitigationActionCommandInput}
 * @returns {@link DeleteMitigationActionCommandOutput}
 * @see {@link DeleteMitigationActionCommandInput} for command's `input` shape.
 * @see {@link DeleteMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DeleteMitigationActionCommand extends command<DeleteMitigationActionCommandInput, DeleteMitigationActionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMitigationAction",
  DeleteMitigationAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMitigationActionRequest;
      output: {};
    };
    sdk: {
      input: DeleteMitigationActionCommandInput;
      output: DeleteMitigationActionCommandOutput;
    };
  };
}
