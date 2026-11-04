// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCAEnrollmentPolicyRequest, DescribeCAEnrollmentPolicyResult } from "../models/models_0";
import { DescribeCAEnrollmentPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCAEnrollmentPolicyCommand}.
 */
export interface DescribeCAEnrollmentPolicyCommandInput extends DescribeCAEnrollmentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCAEnrollmentPolicyCommand}.
 */
export interface DescribeCAEnrollmentPolicyCommandOutput extends DescribeCAEnrollmentPolicyResult, __MetadataBearer {}

/**
 * Retrieves detailed information about the certificate authority (CA) enrollment policy for the specified directory. This policy determines how client certificates are automatically enrolled and managed through Amazon Web Services Private Certificate Authority.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeCAEnrollmentPolicyCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeCAEnrollmentPolicyCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeCAEnrollmentPolicyRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCAEnrollmentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCAEnrollmentPolicyResult
 * //   DirectoryId: "STRING_VALUE",
 * //   PcaConnectorArn: "STRING_VALUE",
 * //   CaEnrollmentPolicyStatus: "InProgress" || "Success" || "Failed" || "Disabling" || "Disabled" || "Impaired",
 * //   LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   CaEnrollmentPolicyStatusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCAEnrollmentPolicyCommandInput - {@link DescribeCAEnrollmentPolicyCommandInput}
 * @returns {@link DescribeCAEnrollmentPolicyCommandOutput}
 * @see {@link DescribeCAEnrollmentPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeCAEnrollmentPolicyCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class DescribeCAEnrollmentPolicyCommand extends command<DescribeCAEnrollmentPolicyCommandInput, DescribeCAEnrollmentPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCAEnrollmentPolicy",
  DescribeCAEnrollmentPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCAEnrollmentPolicyRequest;
      output: DescribeCAEnrollmentPolicyResult;
    };
    sdk: {
      input: DescribeCAEnrollmentPolicyCommandInput;
      output: DescribeCAEnrollmentPolicyCommandOutput;
    };
  };
}
