// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCertificateOptionsRequest } from "../models/models_0";
import { UpdateCertificateOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCertificateOptionsCommand}.
 */
export interface UpdateCertificateOptionsCommandInput extends UpdateCertificateOptionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCertificateOptionsCommand}.
 */
export interface UpdateCertificateOptionsCommandOutput extends __MetadataBearer {}

/**
 * Updates certificate options. You can use this operation to change the domain validation method or specify whether to export your certificate. For more information, see [Migrate from email to DNS validation](https://docs.aws.amazon.com/acm/latest/userguide/email-to-dns-migration.html) and [Certificate Manager Exportable Managed Certificates](https://docs.aws.amazon.com/acm/latest/userguide/acm-exportable-certificates.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, UpdateCertificateOptionsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, UpdateCertificateOptionsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // UpdateCertificateOptionsRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Options: { // CertificateOptions
 *     CertificateTransparencyLoggingPreference: "ENABLED" || "DISABLED",
 *     Export: "ENABLED" || "DISABLED",
 *     ValidationMethod: "EMAIL" || "DNS" || "HTTP",
 *   },
 * };
 * const command = new UpdateCertificateOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCertificateOptionsCommandInput - {@link UpdateCertificateOptionsCommandInput}
 * @returns {@link UpdateCertificateOptionsCommandOutput}
 * @see {@link UpdateCertificateOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateOptionsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * Processing has reached an invalid state.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An ACM quota has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class UpdateCertificateOptionsCommand extends command<UpdateCertificateOptionsCommandInput, UpdateCertificateOptionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCertificateOptions",
  UpdateCertificateOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCertificateOptionsRequest;
      output: {};
    };
    sdk: {
      input: UpdateCertificateOptionsCommandInput;
      output: UpdateCertificateOptionsCommandOutput;
    };
  };
}
