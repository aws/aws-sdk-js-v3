// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSpaceInput, CreateSpaceOutput } from "../models/models_0";
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
export interface CreateSpaceCommandInput extends CreateSpaceInput {}
/**
 * @public
 *
 * The output of {@link CreateSpaceCommand}.
 */
export interface CreateSpaceCommandOutput extends CreateSpaceOutput, __MetadataBearer {}

/**
 * Creates a space in a domain.
 *
 * Use GetSpace to retrieve the space, ListSpaces to enumerate spaces,
 * UpdateSpace to modify it, and DeleteSpace to remove it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, CreateSpaceCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, CreateSpaceCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // CreateSpaceInput
 *   name: "STRING_VALUE", // required
 *   domainId: "STRING_VALUE", // required
 *   dataAccessRoleArn: "STRING_VALUE", // required
 *   agentCoreEvaluationRoleArn: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     encryptionStrategy: "AWS_OWNED" || "CUSTOMER_MANAGED", // required
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSpaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateSpaceOutput
 * //   space: { // Space
 * //     spaceId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     spaceArn: "STRING_VALUE", // required
 * //     domainArn: "STRING_VALUE",
 * //     region: "STRING_VALUE", // required
 * //     ownerAccountId: "STRING_VALUE", // required
 * //     dataAccessRoleArn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     agentCoreEvaluationRoleArn: "STRING_VALUE",
 * //     status: "ACTIVE" || "SUSPENDED" || "MOVING", // required
 * //     statusReason: "STRING_VALUE",
 * //     encryptionConfiguration: { // EncryptionConfiguration
 * //       encryptionStrategy: "AWS_OWNED" || "CUSTOMER_MANAGED", // required
 * //       kmsKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSpaceCommandInput - {@link CreateSpaceCommandInput}
 * @returns {@link CreateSpaceCommandOutput}
 * @see {@link CreateSpaceCommandInput} for command's `input` shape.
 * @see {@link CreateSpaceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  A service quota was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Create a space
 * ```javascript
 * // The following example creates a space in a domain and encrypts its data at rest with a customer managed KMS key. The name must be 3-64 characters of lowercase letters, numbers, and hyphens. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   agentCoreEvaluationRoleArn: "arn:aws:iam::123456789012:role/CloudWatchAgentCoreEvaluationRole",
 *   clientToken: "3f2a9c1e-7b04-4d8a-9e15-6c2b8d0f4a73",
 *   dataAccessRoleArn: "arn:aws:iam::123456789012:role/CloudWatchSpaceDataAccessRole",
 *   domainId: "d-1a2b3c4d5e",
 *   encryptionConfiguration: {
 *     encryptionStrategy: "CUSTOMER_MANAGED",
 *     kmsKeyArn: "arn:aws:kms:us-east-1:123456789012:key/1a2b3c4d-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 *   },
 *   name: "prod-observability",
 *   tags: {
 *     Team: "observability"
 *   }
 * };
 * const command = new CreateSpaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   space: {
 *     agentCoreEvaluationRoleArn: "arn:aws:iam::123456789012:role/CloudWatchAgentCoreEvaluationRole",
 *     createdAt: "2026-09-16T14:22:31Z",
 *     dataAccessRoleArn: "arn:aws:iam::123456789012:role/CloudWatchSpaceDataAccessRole",
 *     domainArn: "arn:aws:cloudwatch:us-east-1:123456789012:domain/d-1a2b3c4d5e",
 *     encryptionConfiguration: {
 *       encryptionStrategy: "CUSTOMER_MANAGED",
 *       kmsKeyArn: "arn:aws:kms:us-east-1:123456789012:key/1a2b3c4d-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 *     },
 *     name: "prod-observability",
 *     ownerAccountId: "123456789012",
 *     region: "us-east-1",
 *     spaceArn: "arn:aws:cloudwatch:us-east-1:123456789012:space/a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     status: "ACTIVE",
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSpaceCommand extends command<CreateSpaceCommandInput, CreateSpaceCommandOutput>(
  _ep0,
  _mw0,
  "CreateSpace",
  CreateSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSpaceInput;
      output: CreateSpaceOutput;
    };
    sdk: {
      input: CreateSpaceCommandInput;
      output: CreateSpaceCommandOutput;
    };
  };
}
