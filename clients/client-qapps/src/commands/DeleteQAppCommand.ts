// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteQAppInput } from "../models/models_0";
import type { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { DeleteQApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQAppCommand}.
 */
export interface DeleteQAppCommandInput extends DeleteQAppInput {}
/**
 * @public
 *
 * The output of {@link DeleteQAppCommand}.
 */
export interface DeleteQAppCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon Q App owned by the user. If the Q App was previously published to the library, it is also removed from the library.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, DeleteQAppCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, DeleteQAppCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // DeleteQAppInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQAppCommandInput - {@link DeleteQAppCommandInput}
 * @returns {@link DeleteQAppCommandOutput}
 * @see {@link DeleteQAppCommandInput} for command's `input` shape.
 * @see {@link DeleteQAppCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example Delete an Amazon Q App
 * ```javascript
 * //
 * const input = {
 *   appId: "393e77fb-0a30-4f47-ad30-75d71aeaed8a",
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new DeleteQAppCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteQAppCommand extends $Command
  .classBuilder<
    DeleteQAppCommandInput,
    DeleteQAppCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "DeleteQApp", {})
  .n("QAppsClient", "DeleteQAppCommand")
  .sc(DeleteQApp$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQAppInput;
      output: {};
    };
    sdk: {
      input: DeleteQAppCommandInput;
      output: DeleteQAppCommandOutput;
    };
  };
}
