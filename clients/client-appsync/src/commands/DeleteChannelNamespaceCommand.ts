// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteChannelNamespaceRequest, DeleteChannelNamespaceResponse } from "../models/models_0";
import { DeleteChannelNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteChannelNamespaceCommand}.
 */
export interface DeleteChannelNamespaceCommandInput extends DeleteChannelNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelNamespaceCommand}.
 */
export interface DeleteChannelNamespaceCommandOutput extends DeleteChannelNamespaceResponse, __MetadataBearer {}

/**
 * Deletes a `ChannelNamespace`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteChannelNamespaceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteChannelNamespaceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // DeleteChannelNamespaceRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelNamespaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChannelNamespaceCommandInput - {@link DeleteChannelNamespaceCommandInput}
 * @returns {@link DeleteChannelNamespaceCommandOutput}
 * @see {@link DeleteChannelNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this operation on this resource.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class DeleteChannelNamespaceCommand extends command<DeleteChannelNamespaceCommandInput, DeleteChannelNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteChannelNamespace",
  DeleteChannelNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChannelNamespaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteChannelNamespaceCommandInput;
      output: DeleteChannelNamespaceCommandOutput;
    };
  };
}
