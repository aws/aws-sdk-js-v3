// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { CreateSpaceRequest, CreateSpaceResponse } from "../models/models_0";
import { CreateSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSpaceCommand}.
 */
export interface CreateSpaceCommandInput extends CreateSpaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateSpaceCommand}.
 */
export interface CreateSpaceCommandOutput extends CreateSpaceResponse, __MetadataBearer {}

/**
 * <p>Creates a space. A space is an AWS resource that stores the events you send and the memories extracted from them, and defines the memory strategies that extract those memories.</p> <p>The operation returns before provisioning finishes, with <code>status</code> <code>CREATING</code>. Call <code>GetSpace</code> until the status is <code>ACTIVE</code>, and then use the space. If provisioning fails, the status becomes <code>FAILED</code> and <code>statusReason</code> says why.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, CreateSpaceCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, CreateSpaceCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // CreateSpaceRequest
 *   name: "STRING_VALUE", // required
 *   memoryStrategies: [ // MemoryStrategyList
 *     { // MemoryStrategy
 *       type: "SEMANTIC" || "SUMMARY" || "CUSTOM", // required
 *       name: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       configuration: { // MemoryStrategyConfiguration
 *         extractionPrompt: "STRING_VALUE",
 *         extractEveryNMessages: Number("int"),
 *         extractEveryNTokens: Number("int"),
 *         idleTimeoutSeconds: Number("int"),
 *         extractionSeedTopK: Number("int"),
 *         extractionSeedRecentN: Number("int"),
 *         consolidationEnabled: true || false,
 *       },
 *     },
 *   ],
 *   eventExpiryDays: Number("int"),
 *   memoryExpiryDays: Number("int"),
 *   extractionModelId: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSpaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateSpaceResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateSpaceCommandInput - {@link CreateSpaceCommandInput}
 * @returns {@link CreateSpaceCommandOutput}
 * @see {@link CreateSpaceCommandInput} for command's `input` shape.
 * @see {@link CreateSpaceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchMemoryClientResolvedConfig | config} for OpenSearchMemoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation. To use this operation, you must have AWS Identity and Access Management (IAM) permissions for the operation, and on the resource it acts on. If the space uses a customer managed AWS Key Management Service (AWS KMS) key, you must also have permission to use the key.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the space is being created, updated, or deleted, a space with the same name already exists, or you reused a client token with different parameters. Wait for the space to finish being created, updated, or deleted, or use a different name or client token, and then retry.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service couldn't process the request because of an internal error. Retry the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a quota, such as the number of spaces in your account or the number of strategies in a space.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The service throttled the request. Retry the request with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. The <code>reason</code>, <code>message</code>, and <code>fieldList</code> members describe the problem. Fix the request, and then try again.</p>
 *
 * @throws {@link OpenSearchMemoryServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchMemory service.</p>
 *
 *
 * @public
 */
export class CreateSpaceCommand extends command<CreateSpaceCommandInput, CreateSpaceCommandOutput>(
  _ep1,
  _mw0,
  "CreateSpace",
  CreateSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSpaceRequest;
      output: CreateSpaceResponse;
    };
    sdk: {
      input: CreateSpaceCommandInput;
      output: CreateSpaceCommandOutput;
    };
  };
}
