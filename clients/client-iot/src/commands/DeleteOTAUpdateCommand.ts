// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOTAUpdateRequest, DeleteOTAUpdateResponse } from "../models/models_0";
import { DeleteOTAUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOTAUpdateCommand}.
 */
export interface DeleteOTAUpdateCommandInput extends DeleteOTAUpdateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOTAUpdateCommand}.
 */
export interface DeleteOTAUpdateCommandOutput extends DeleteOTAUpdateResponse, __MetadataBearer {}

/**
 * Delete an OTA update.
 *
 * Requires permission to access the [DeleteOTAUpdate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteOTAUpdateRequest
 *   otaUpdateId: "STRING_VALUE", // required
 *   deleteStream: true || false,
 *   forceDeleteAWSJob: true || false,
 * };
 * const command = new DeleteOTAUpdateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOTAUpdateCommandInput - {@link DeleteOTAUpdateCommandInput}
 * @returns {@link DeleteOTAUpdateCommandOutput}
 * @see {@link DeleteOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link DeleteOTAUpdateCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link VersionConflictException} (client fault)
 *
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DeleteOTAUpdateCommand extends command<DeleteOTAUpdateCommandInput, DeleteOTAUpdateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOTAUpdate",
  DeleteOTAUpdate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOTAUpdateRequest;
      output: {};
    };
    sdk: {
      input: DeleteOTAUpdateCommandInput;
      output: DeleteOTAUpdateCommandOutput;
    };
  };
}
