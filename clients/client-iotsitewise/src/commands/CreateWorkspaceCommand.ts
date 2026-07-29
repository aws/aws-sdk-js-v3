// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkspaceRequest, CreateWorkspaceResponse } from "../models/models_0";
import { CreateWorkspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceCommand}.
 */
export interface CreateWorkspaceCommandInput extends CreateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceCommand}.
 */
export interface CreateWorkspaceCommandOutput extends CreateWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Creates a workspace in IoT SiteWise. A workspace isolates its resources, such as datasets, time
 *       series, pipelines, and tasks, and their data from other workspaces, and has its own quotas
 *       and throttling limits. You must specify an encryption configuration when you create
 *       a workspace. The operation returns immediately with the workspace in the
 *       <code>CREATING</code> state. Provisioning completes asynchronously, after which the workspace
 *       state is <code>ACTIVE</code>, or <code>FAILED</code> if provisioning doesn't complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateWorkspaceCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateWorkspaceCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateWorkspaceRequest
 *   workspaceName: "STRING_VALUE", // required
 *   workspaceDescription: "STRING_VALUE",
 *   encryptionConfiguration: { // WorkspaceEncryptionConfiguration
 *     encryptionType: "SITEWISE_DEFAULT_ENCRYPTION" || "KMS_BASED_ENCRYPTION", // required
 *     kmsKeyId: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceResponse
 * //   workspaceName: "STRING_VALUE", // required
 * //   workspaceArn: "STRING_VALUE", // required
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
 * @param CreateWorkspaceCommandInput - {@link CreateWorkspaceCommandInput}
 * @returns {@link CreateWorkspaceCommandOutput}
 * @see {@link CreateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
export class CreateWorkspaceCommand extends command<CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkspace",
  CreateWorkspace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceRequest;
      output: CreateWorkspaceResponse;
    };
    sdk: {
      input: CreateWorkspaceCommandInput;
      output: CreateWorkspaceCommandOutput;
    };
  };
}
