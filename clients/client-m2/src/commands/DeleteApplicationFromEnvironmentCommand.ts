// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { DeleteApplicationFromEnvironmentRequest, DeleteApplicationFromEnvironmentResponse } from "../models/models_0";
import { DeleteApplicationFromEnvironment } from "../schemas/schemas_13_DeleteApplicationFromEnvironment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationFromEnvironmentCommand}.
 */
export interface DeleteApplicationFromEnvironmentCommandInput extends DeleteApplicationFromEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationFromEnvironmentCommand}.
 */
export interface DeleteApplicationFromEnvironmentCommandOutput
  extends DeleteApplicationFromEnvironmentResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a specific application from the specific runtime environment where it was
 *          previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any
 *          application has ever been deployed to it. This API removes the association of the
 *          application with the runtime environment so you can delete the environment smoothly.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, DeleteApplicationFromEnvironmentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, DeleteApplicationFromEnvironmentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // DeleteApplicationFromEnvironmentRequest
 *   applicationId: "STRING_VALUE", // required
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationFromEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationFromEnvironmentCommandInput - {@link DeleteApplicationFromEnvironmentCommandInput}
 * @returns {@link DeleteApplicationFromEnvironmentCommandOutput}
 * @see {@link DeleteApplicationFromEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationFromEnvironmentCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class DeleteApplicationFromEnvironmentCommand extends $Command
  .classBuilder<
    DeleteApplicationFromEnvironmentCommandInput,
    DeleteApplicationFromEnvironmentCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "DeleteApplicationFromEnvironment", {})
  .n("M2Client", "DeleteApplicationFromEnvironmentCommand")
  .sc(DeleteApplicationFromEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationFromEnvironmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationFromEnvironmentCommandInput;
      output: DeleteApplicationFromEnvironmentCommandOutput;
    };
  };
}
