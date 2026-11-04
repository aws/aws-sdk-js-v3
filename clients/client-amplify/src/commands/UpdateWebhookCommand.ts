// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWebhookRequest, UpdateWebhookResult } from "../models/models_0";
import { UpdateWebhook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWebhookCommand}.
 */
export interface UpdateWebhookCommandInput extends UpdateWebhookRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebhookCommand}.
 */
export interface UpdateWebhookCommandOutput extends UpdateWebhookResult, __MetadataBearer {}

/**
 * Updates a webhook.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // UpdateWebhookRequest
 *   webhookId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateWebhookCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebhookResult
 * //   webhook: { // Webhook
 * //     webhookArn: "STRING_VALUE", // required
 * //     webhookId: "STRING_VALUE", // required
 * //     webhookUrl: "STRING_VALUE", // required
 * //     appId: "STRING_VALUE",
 * //     branchName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWebhookCommandInput - {@link UpdateWebhookCommandInput}
 * @returns {@link UpdateWebhookCommandOutput}
 * @see {@link UpdateWebhookCommandInput} for command's `input` shape.
 * @see {@link UpdateWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A request contains unexpected data.
 *
 * @throws {@link DependentServiceFailureException} (server fault)
 *
 * An operation failed because a dependent service threw an exception.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The service failed to perform an operation due to an internal issue.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An entity was not found during an operation.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * An operation failed due to a lack of access.
 *
 * @throws {@link AmplifyServiceException}
 *
 * Base exception class for all service exceptions from Amplify service.
 *
 * @public
 */
export class UpdateWebhookCommand extends command<UpdateWebhookCommandInput, UpdateWebhookCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWebhook",
  UpdateWebhook$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebhookRequest;
      output: UpdateWebhookResult;
    };
    sdk: {
      input: UpdateWebhookCommandInput;
      output: UpdateWebhookCommandOutput;
    };
  };
}
