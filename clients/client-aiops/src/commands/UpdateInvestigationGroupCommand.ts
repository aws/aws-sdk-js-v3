// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateInvestigationGroupOutput, UpdateInvestigationGroupRequest } from "../models/models_0";
import { UpdateInvestigationGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateInvestigationGroupCommand}.
 */
export interface UpdateInvestigationGroupCommandInput extends UpdateInvestigationGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInvestigationGroupCommand}.
 */
export interface UpdateInvestigationGroupCommandOutput extends UpdateInvestigationGroupOutput, __MetadataBearer {}

/**
 * Updates the configuration of the specified investigation group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, UpdateInvestigationGroupCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, UpdateInvestigationGroupCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // UpdateInvestigationGroupRequest
 *   identifier: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY",
 *     kmsKeyId: "STRING_VALUE",
 *   },
 *   tagKeyBoundaries: [ // TagKeyBoundaries
 *     "STRING_VALUE",
 *   ],
 *   chatbotNotificationChannel: { // ChatbotNotificationChannel
 *     "<keys>": [ // ChatConfigurationArns
 *       "STRING_VALUE",
 *     ],
 *   },
 *   isCloudTrailEventHistoryEnabled: true || false,
 *   crossAccountConfigurations: [ // CrossAccountConfigurations
 *     { // CrossAccountConfiguration
 *       sourceRoleArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateInvestigationGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInvestigationGroupCommandInput - {@link UpdateInvestigationGroupCommandInput}
 * @returns {@link UpdateInvestigationGroupCommandOutput}
 * @see {@link UpdateInvestigationGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateInvestigationGroupCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation couldn't be completed because of a conflict in resource states.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. You can try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits. You can try again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This operation or its parameters aren't formatted correctly.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Access id denied for this operation, or this operation is not valid for the specified resource.
 *
 * @throws {@link AIOpsServiceException}
 *
 * Base exception class for all service exceptions from AIOps service.
 *
 * @public
 */
export class UpdateInvestigationGroupCommand extends command<UpdateInvestigationGroupCommandInput, UpdateInvestigationGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateInvestigationGroup",
  UpdateInvestigationGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInvestigationGroupRequest;
      output: {};
    };
    sdk: {
      input: UpdateInvestigationGroupCommandInput;
      output: UpdateInvestigationGroupCommandOutput;
    };
  };
}
