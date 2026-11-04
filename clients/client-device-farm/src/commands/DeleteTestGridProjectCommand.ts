// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTestGridProjectRequest, DeleteTestGridProjectResult } from "../models/models_0";
import { DeleteTestGridProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTestGridProjectCommand}.
 */
export interface DeleteTestGridProjectCommandInput extends DeleteTestGridProjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTestGridProjectCommand}.
 */
export interface DeleteTestGridProjectCommandOutput extends DeleteTestGridProjectResult, __MetadataBearer {}

/**
 * Deletes a Selenium testing project and all content generated under it. You cannot delete a project if it has active sessions.
 *
 * > **Important:** You cannot undo this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteTestGridProjectRequest
 *   projectArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTestGridProjectCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTestGridProjectCommandInput - {@link DeleteTestGridProjectCommandInput}
 * @returns {@link DeleteTestGridProjectCommandOutput}
 * @see {@link DeleteTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *
 * An invalid argument was specified.
 *
 * @throws {@link CannotDeleteException} (client fault)
 *
 * The requested object could not be deleted.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal exception was raised in the service. Contact [aws-devicefarm-support@amazon.com](mailto:aws-devicefarm-support@amazon.com) if you see this error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified entity was not found.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
 *
 * @public
 */
export class DeleteTestGridProjectCommand extends command<DeleteTestGridProjectCommandInput, DeleteTestGridProjectCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTestGridProject",
  DeleteTestGridProject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTestGridProjectRequest;
      output: {};
    };
    sdk: {
      input: DeleteTestGridProjectCommandInput;
      output: DeleteTestGridProjectCommandOutput;
    };
  };
}
