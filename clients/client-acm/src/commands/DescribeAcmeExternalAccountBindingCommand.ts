// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  DescribeAcmeExternalAccountBindingRequest,
  DescribeAcmeExternalAccountBindingResponse,
} from "../models/models_0";
import { DescribeAcmeExternalAccountBinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAcmeExternalAccountBindingCommand}.
 */
export interface DescribeAcmeExternalAccountBindingCommandInput extends DescribeAcmeExternalAccountBindingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcmeExternalAccountBindingCommand}.
 */
export interface DescribeAcmeExternalAccountBindingCommandOutput extends DescribeAcmeExternalAccountBindingResponse, __MetadataBearer {}

/**
 * <p>Returns detailed metadata about the specified external account binding, including the associated IAM role, expiration time, and usage history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DescribeAcmeExternalAccountBindingCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DescribeAcmeExternalAccountBindingCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DescribeAcmeExternalAccountBindingRequest
 *   AcmeExternalAccountBindingArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAcmeExternalAccountBindingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAcmeExternalAccountBindingResponse
 * //   ExternalAccountBinding: { // AcmeExternalAccountBinding
 * //     AcmeExternalAccountBindingArn: "STRING_VALUE",
 * //     AcmeEndpointArn: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     ExpiresAt: new Date("TIMESTAMP"),
 * //     RevokedAt: new Date("TIMESTAMP"),
 * //     LastUsedAt: new Date("TIMESTAMP"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAcmeExternalAccountBindingCommandInput - {@link DescribeAcmeExternalAccountBindingCommandInput}
 * @returns {@link DescribeAcmeExternalAccountBindingCommandOutput}
 * @see {@link DescribeAcmeExternalAccountBindingCommandInput} for command's `input` shape.
 * @see {@link DescribeAcmeExternalAccountBindingCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class DescribeAcmeExternalAccountBindingCommand extends command<DescribeAcmeExternalAccountBindingCommandInput, DescribeAcmeExternalAccountBindingCommandOutput>(
  _ep1,
  _mw0,
  "DescribeAcmeExternalAccountBinding",
  DescribeAcmeExternalAccountBinding$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAcmeExternalAccountBindingRequest;
      output: DescribeAcmeExternalAccountBindingResponse;
    };
    sdk: {
      input: DescribeAcmeExternalAccountBindingCommandInput;
      output: DescribeAcmeExternalAccountBindingCommandOutput;
    };
  };
}
