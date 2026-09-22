// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSpaceInput, UpdateSpaceOutput } from "../models/models_0";
import { UpdateSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandInput extends UpdateSpaceInput {}
/**
 * @public
 *
 * The output of {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandOutput extends UpdateSpaceOutput, __MetadataBearer {}

/**
 * Updates a space.
 *
 * Only the provided fields are changed; omitted fields are left unchanged.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, UpdateSpaceCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, UpdateSpaceCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // UpdateSpaceInput
 *   spaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     encryptionStrategy: "AWS_OWNED" || "CUSTOMER_MANAGED", // required
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSpaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSpaceOutput
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
 * @param UpdateSpaceCommandInput - {@link UpdateSpaceCommandInput}
 * @returns {@link UpdateSpaceCommandOutput}
 * @see {@link UpdateSpaceCommandInput} for command's `input` shape.
 * @see {@link UpdateSpaceCommandOutput} for command's `response` shape.
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
 * @example Rename a space
 * ```javascript
 * // The following example updates only the name of a space; omitted fields are left unchanged. The response returns the full space with a later updatedAt timestamp. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   name: "prod-observability-team",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new UpdateSpaceCommand(input);
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
 *     name: "prod-observability-team",
 *     ownerAccountId: "123456789012",
 *     region: "us-east-1",
 *     spaceArn: "arn:aws:cloudwatch:us-east-1:123456789012:space/a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     status: "ACTIVE",
 *     updatedAt: "2026-09-17T09:11:52Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSpaceCommand extends command<UpdateSpaceCommandInput, UpdateSpaceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSpace",
  UpdateSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSpaceInput;
      output: UpdateSpaceOutput;
    };
    sdk: {
      input: UpdateSpaceCommandInput;
      output: UpdateSpaceCommandOutput;
    };
  };
}
