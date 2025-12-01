// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDataLakeRequest, DeleteDataLakeResponse } from "../models/models_0";
import { DeleteDataLake } from "../schemas/schemas_0";
import type { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataLakeCommand}.
 */
export interface DeleteDataLakeCommandInput extends DeleteDataLakeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataLakeCommand}.
 */
export interface DeleteDataLakeCommandOutput extends DeleteDataLakeResponse, __MetadataBearer {}

/**
 * <p>When you disable Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions and it stops collecting data from your sources. Also, this API
 *          automatically takes steps to remove the account from Security Lake. However, Security Lake retains
 *          all of your existing settings and the resources that it created in your Amazon Web Services
 *          account in the current Amazon Web Services Region.</p>
 *          <p>The <code>DeleteDataLake</code> operation does not delete the data that is stored in
 *          your Amazon S3 bucket, which is owned by your Amazon Web Services account. For more
 *          information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteDataLakeCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteDataLakeCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = { // DeleteDataLakeRequest
 *   regions: [ // RegionList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteDataLakeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataLakeCommandInput - {@link DeleteDataLakeCommandInput}
 * @returns {@link DeleteDataLakeCommandOutput}
 * @see {@link DeleteDataLakeCommandInput} for command's `input` shape.
 * @see {@link DeleteDataLakeCommandOutput} for command's `response` shape.
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
export class DeleteDataLakeCommand extends $Command
  .classBuilder<
    DeleteDataLakeCommandInput,
    DeleteDataLakeCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "DeleteDataLake", {})
  .n("SecurityLakeClient", "DeleteDataLakeCommand")
  .sc(DeleteDataLake)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataLakeRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataLakeCommandInput;
      output: DeleteDataLakeCommandOutput;
    };
  };
}
