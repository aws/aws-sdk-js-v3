// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import type { CreateDeploymentRequest, CreateDeploymentResponse } from "../models/models_0";
import { CreateDeployment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandInput extends CreateDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends CreateDeploymentResponse, __MetadataBearer {}

/**
 * <p>Creates and starts a deployment to deploy an application into a runtime
 *          environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, CreateDeploymentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, CreateDeploymentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // CreateDeploymentRequest
 *   environmentId: "STRING_VALUE", // required
 *   applicationId: "STRING_VALUE", // required
 *   applicationVersion: Number("int"), // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentResponse
 * //   deploymentId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDeploymentCommandInput - {@link CreateDeploymentCommandInput}
 * @returns {@link CreateDeploymentCommandOutput}
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.</p>
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
export class CreateDeploymentCommand extends $Command
  .classBuilder<
    CreateDeploymentCommandInput,
    CreateDeploymentCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "CreateDeployment", {})
  .n("M2Client", "CreateDeploymentCommand")
  .sc(CreateDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentRequest;
      output: CreateDeploymentResponse;
    };
    sdk: {
      input: CreateDeploymentCommandInput;
      output: CreateDeploymentCommandOutput;
    };
  };
}
