// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSupportCaseRequest, CreateSupportCaseResponse } from "../models/models_0";
import { CreateSupportCase } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSupportCaseCommand}.
 */
export interface CreateSupportCaseCommandInput extends CreateSupportCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateSupportCaseCommand}.
 */
export interface CreateSupportCaseCommandOutput extends CreateSupportCaseResponse, __MetadataBearer {}

/**
 * <p>Creates a Support case for an existing quota increase request. This call only creates
 *             a Support case if the request has a <code>Pending</code> status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, CreateSupportCaseCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, CreateSupportCaseCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // CreateSupportCaseRequest
 *   RequestId: "STRING_VALUE", // required
 * };
 * const command = new CreateSupportCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSupportCaseCommandInput - {@link CreateSupportCaseCommandInput}
 * @returns {@link CreateSupportCaseCommandOutput}
 * @see {@link CreateSupportCaseCommandInput} for command's `input` shape.
 * @see {@link CreateSupportCaseCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link DependencyAccessDeniedException} (client fault)
 *  <p>You can't perform this action because a dependency does not have access.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The resource is in an invalid state.</p>
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 *
 * @throws {@link ServiceQuotasServiceException}
 * <p>Base exception class for all service exceptions from ServiceQuotas service.</p>
 *
 *
 * @public
 */
export class CreateSupportCaseCommand extends $Command
  .classBuilder<
    CreateSupportCaseCommandInput,
    CreateSupportCaseCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "CreateSupportCase", {})
  .n("ServiceQuotasClient", "CreateSupportCaseCommand")
  .sc(CreateSupportCase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSupportCaseRequest;
      output: {};
    };
    sdk: {
      input: CreateSupportCaseCommandInput;
      output: CreateSupportCaseCommandOutput;
    };
  };
}
