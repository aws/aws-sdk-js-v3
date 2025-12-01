// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import type { DeleteEnvironmentRequest, DeleteEnvironmentResponse } from "../models/models_0";
import { DeleteEnvironment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandInput extends DeleteEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandOutput extends DeleteEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Deletes a specific runtime environment. The environment cannot contain deployed
 *          applications. If it does, you must delete those applications before you delete the
 *          environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, DeleteEnvironmentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, DeleteEnvironmentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // DeleteEnvironmentRequest
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentCommandInput - {@link DeleteEnvironmentCommandInput}
 * @returns {@link DeleteEnvironmentCommandOutput}
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class DeleteEnvironmentCommand extends $Command
  .classBuilder<
    DeleteEnvironmentCommandInput,
    DeleteEnvironmentCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "DeleteEnvironment", {})
  .n("M2Client", "DeleteEnvironmentCommand")
  .sc(DeleteEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentCommandInput;
      output: DeleteEnvironmentCommandOutput;
    };
  };
}
