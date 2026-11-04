// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ActivateMessageTemplateRequest, ActivateMessageTemplateResponse } from "../models/models_0";
import { ActivateMessageTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ActivateMessageTemplateCommand}.
 */
export interface ActivateMessageTemplateCommandInput extends ActivateMessageTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ActivateMessageTemplateCommand}.
 */
export interface ActivateMessageTemplateCommandOutput extends ActivateMessageTemplateResponse, __MetadataBearer {}

/**
 * Activates a specific version of the Amazon Q in Connect message template. After the version is activated, the previous active version will be deactivated automatically. You can use the `$ACTIVE_VERSION` qualifier later to reference the version that is in active status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ActivateMessageTemplateCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ActivateMessageTemplateCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ActivateMessageTemplateRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   versionNumber: Number("long"), // required
 * };
 * const command = new ActivateMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ActivateMessageTemplateResponse
 * //   messageTemplateArn: "STRING_VALUE", // required
 * //   messageTemplateId: "STRING_VALUE", // required
 * //   versionNumber: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param ActivateMessageTemplateCommandInput - {@link ActivateMessageTemplateCommandInput}
 * @returns {@link ActivateMessageTemplateCommandOutput}
 * @see {@link ActivateMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link ActivateMessageTemplateCommandOutput} for command's `response` shape.
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
export class ActivateMessageTemplateCommand extends command<ActivateMessageTemplateCommandInput, ActivateMessageTemplateCommandOutput>(
  _ep0,
  _mw0,
  "ActivateMessageTemplate",
  ActivateMessageTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateMessageTemplateRequest;
      output: ActivateMessageTemplateResponse;
    };
    sdk: {
      input: ActivateMessageTemplateCommandInput;
      output: ActivateMessageTemplateCommandOutput;
    };
  };
}
