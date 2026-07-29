// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkspaceRequest, UpdateWorkspaceResponse } from "../models/models_1";
import { UpdateWorkspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceCommand}.
 */
export interface UpdateWorkspaceCommandInput extends UpdateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceCommand}.
 */
export interface UpdateWorkspaceCommandOutput extends UpdateWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Updates a workspace. You can update only workspaces in the <code>ACTIVE</code> or
 *       <code>FAILED</code> state. Fields that you omit from the request are left unchanged. To
 *       recover a workspace in the <code>FAILED</code> state, call this operation and supply its
 *       encryption configuration again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateWorkspaceCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateWorkspaceCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateWorkspaceRequest
 *   workspaceName: "STRING_VALUE", // required
 *   workspaceDescription: "STRING_VALUE",
 *   encryptionConfiguration: { // WorkspaceEncryptionConfiguration
 *     encryptionType: "SITEWISE_DEFAULT_ENCRYPTION" || "KMS_BASED_ENCRYPTION", // required
 *     kmsKeyId: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkspaceResponse
 * //   workspaceStatus: { // WorkspaceStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //     error: { // WorkspaceErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkspaceCommandInput - {@link UpdateWorkspaceCommandInput}
 * @returns {@link UpdateWorkspaceCommandOutput}
 * @see {@link UpdateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class UpdateWorkspaceCommand extends command<UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkspace",
  UpdateWorkspace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceRequest;
      output: UpdateWorkspaceResponse;
    };
    sdk: {
      input: UpdateWorkspaceCommandInput;
      output: UpdateWorkspaceCommandOutput;
    };
  };
}
