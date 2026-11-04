// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeactivateMessageTemplateRequest, DeactivateMessageTemplateResponse } from "../models/models_1";
import { DeactivateMessageTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeactivateMessageTemplateCommand}.
 */
export interface DeactivateMessageTemplateCommandInput extends DeactivateMessageTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateMessageTemplateCommand}.
 */
export interface DeactivateMessageTemplateCommandOutput extends DeactivateMessageTemplateResponse, __MetadataBearer {}

/**
 * Deactivates a specific version of the Amazon Q in Connect message template . After the version is deactivated, you can no longer use the `$ACTIVE_VERSION` qualifier to reference the version in active status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeactivateMessageTemplateCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeactivateMessageTemplateCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeactivateMessageTemplateRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   versionNumber: Number("long"), // required
 * };
 * const command = new DeactivateMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateMessageTemplateResponse
 * //   messageTemplateArn: "STRING_VALUE", // required
 * //   messageTemplateId: "STRING_VALUE", // required
 * //   versionNumber: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param DeactivateMessageTemplateCommandInput - {@link DeactivateMessageTemplateCommandInput}
 * @returns {@link DeactivateMessageTemplateCommandOutput}
 * @see {@link DeactivateMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link DeactivateMessageTemplateCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class DeactivateMessageTemplateCommand extends command<DeactivateMessageTemplateCommandInput, DeactivateMessageTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeactivateMessageTemplate",
  DeactivateMessageTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateMessageTemplateRequest;
      output: DeactivateMessageTemplateResponse;
    };
    sdk: {
      input: DeactivateMessageTemplateCommandInput;
      output: DeactivateMessageTemplateCommandOutput;
    };
  };
}
