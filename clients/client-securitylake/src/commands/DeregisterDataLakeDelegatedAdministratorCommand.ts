// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeregisterDataLakeDelegatedAdministratorRequest,
  DeregisterDataLakeDelegatedAdministratorResponse,
} from "../models/models_0";
import { DeregisterDataLakeDelegatedAdministrator } from "../schemas/schemas_0";
import type { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterDataLakeDelegatedAdministratorCommand}.
 */
export interface DeregisterDataLakeDelegatedAdministratorCommandInput
  extends DeregisterDataLakeDelegatedAdministratorRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterDataLakeDelegatedAdministratorCommand}.
 */
export interface DeregisterDataLakeDelegatedAdministratorCommandOutput
  extends DeregisterDataLakeDelegatedAdministratorResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the Amazon Security Lake delegated administrator account for the organization. This API
 *          can only be called by the organization management account. The organization management
 *          account cannot be the delegated administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeregisterDataLakeDelegatedAdministratorCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeregisterDataLakeDelegatedAdministratorCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = {};
 * const command = new DeregisterDataLakeDelegatedAdministratorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterDataLakeDelegatedAdministratorCommandInput - {@link DeregisterDataLakeDelegatedAdministratorCommandInput}
 * @returns {@link DeregisterDataLakeDelegatedAdministratorCommandOutput}
 * @see {@link DeregisterDataLakeDelegatedAdministratorCommandInput} for command's `input` shape.
 * @see {@link DeregisterDataLakeDelegatedAdministratorCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 *
 * @public
 */
export class DeregisterDataLakeDelegatedAdministratorCommand extends $Command
  .classBuilder<
    DeregisterDataLakeDelegatedAdministratorCommandInput,
    DeregisterDataLakeDelegatedAdministratorCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "DeregisterDataLakeDelegatedAdministrator", {})
  .n("SecurityLakeClient", "DeregisterDataLakeDelegatedAdministratorCommand")
  .sc(DeregisterDataLakeDelegatedAdministrator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeregisterDataLakeDelegatedAdministratorCommandInput;
      output: DeregisterDataLakeDelegatedAdministratorCommandOutput;
    };
  };
}
