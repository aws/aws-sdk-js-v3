// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { DeleteKxVolumeRequest, DeleteKxVolumeResponse } from "../models/models_0";
import { DeleteKxVolume } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKxVolumeCommand}.
 */
export interface DeleteKxVolumeCommandInput extends DeleteKxVolumeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKxVolumeCommand}.
 */
export interface DeleteKxVolumeCommandOutput extends DeleteKxVolumeResponse, __MetadataBearer {}

/**
 * <p>
 *    Deletes a volume. You can only delete a volume if it's not attached to a cluster or a dataview. When a volume is deleted, any data on the volume is lost. This action is irreversible.
 *
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, DeleteKxVolumeCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, DeleteKxVolumeCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // DeleteKxVolumeRequest
 *   environmentId: "STRING_VALUE", // required
 *   volumeName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteKxVolumeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKxVolumeCommandInput - {@link DeleteKxVolumeCommandInput}
 * @returns {@link DeleteKxVolumeCommandOutput}
 * @see {@link DeleteKxVolumeCommandInput} for command's `input` shape.
 * @see {@link DeleteKxVolumeCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class DeleteKxVolumeCommand extends $Command
  .classBuilder<
    DeleteKxVolumeCommandInput,
    DeleteKxVolumeCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "DeleteKxVolume", {})
  .n("FinspaceClient", "DeleteKxVolumeCommand")
  .sc(DeleteKxVolume)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKxVolumeRequest;
      output: {};
    };
    sdk: {
      input: DeleteKxVolumeCommandInput;
      output: DeleteKxVolumeCommandOutput;
    };
  };
}
