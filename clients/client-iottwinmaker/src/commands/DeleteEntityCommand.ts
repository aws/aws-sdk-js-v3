// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEntityRequest, DeleteEntityResponse } from "../models/models_0";
import { DeleteEntity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEntityCommand}.
 */
export interface DeleteEntityCommandInput extends DeleteEntityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEntityCommand}.
 */
export interface DeleteEntityCommandOutput extends DeleteEntityResponse, __MetadataBearer {}

/**
 * Deletes an entity.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, DeleteEntityCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, DeleteEntityCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // DeleteEntityRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   isRecursive: true || false,
 * };
 * const command = new DeleteEntityCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEntityResponse
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteEntityCommandInput - {@link DeleteEntityCommandInput}
 * @returns {@link DeleteEntityCommandOutput}
 * @see {@link DeleteEntityCommandInput} for command's `input` shape.
 * @see {@link DeleteEntityCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Failed
 *
 * @throws {@link IoTTwinMakerServiceException}
 *
 * Base exception class for all service exceptions from IoTTwinMaker service.
 *
 * @public
 */
export class DeleteEntityCommand extends command<DeleteEntityCommandInput, DeleteEntityCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEntity",
  DeleteEntity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEntityRequest;
      output: DeleteEntityResponse;
    };
    sdk: {
      input: DeleteEntityCommandInput;
      output: DeleteEntityCommandOutput;
    };
  };
}
