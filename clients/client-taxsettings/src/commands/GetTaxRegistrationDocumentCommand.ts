// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTaxRegistrationDocumentRequest, GetTaxRegistrationDocumentResponse } from "../models/models_0";
import { GetTaxRegistrationDocument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTaxRegistrationDocumentCommand}.
 */
export interface GetTaxRegistrationDocumentCommandInput extends GetTaxRegistrationDocumentRequest {}
/**
 * @public
 *
 * The output of {@link GetTaxRegistrationDocumentCommand}.
 */
export interface GetTaxRegistrationDocumentCommandOutput extends GetTaxRegistrationDocumentResponse, __MetadataBearer {}

/**
 * <p>Downloads your tax documents to the Amazon S3 bucket that you specify in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, GetTaxRegistrationDocumentCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, GetTaxRegistrationDocumentCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // GetTaxRegistrationDocumentRequest
 *   destinationS3Location: { // DestinationS3Location
 *     bucket: "STRING_VALUE", // required
 *     prefix: "STRING_VALUE",
 *   },
 *   taxDocumentMetadata: { // TaxDocumentMetadata
 *     taxDocumentAccessToken: "STRING_VALUE", // required
 *     taxDocumentName: "STRING_VALUE", // required
 *   },
 * };
 * const command = new GetTaxRegistrationDocumentCommand(input);
 * const response = await client.send(command);
 * // { // GetTaxRegistrationDocumentResponse
 * //   destinationFilePath: "STRING_VALUE",
 * //   presignedS3Url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTaxRegistrationDocumentCommandInput - {@link GetTaxRegistrationDocumentCommandInput}
 * @returns {@link GetTaxRegistrationDocumentCommandOutput}
 * @see {@link GetTaxRegistrationDocumentCommandInput} for command's `input` shape.
 * @see {@link GetTaxRegistrationDocumentCommandOutput} for command's `response` shape.
 * @see {@link TaxSettingsClientResolvedConfig | config} for TaxSettingsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception thrown when an unexpected error occurs when processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception when the input doesn't pass validation for at least one of the input parameters. </p>
 *
 * @throws {@link TaxSettingsServiceException}
 * <p>Base exception class for all service exceptions from TaxSettings service.</p>
 *
 *
 * @public
 */
export class GetTaxRegistrationDocumentCommand extends command<GetTaxRegistrationDocumentCommandInput, GetTaxRegistrationDocumentCommandOutput>(
  _ep0,
  _mw0,
  "GetTaxRegistrationDocument",
  GetTaxRegistrationDocument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTaxRegistrationDocumentRequest;
      output: GetTaxRegistrationDocumentResponse;
    };
    sdk: {
      input: GetTaxRegistrationDocumentCommandInput;
      output: GetTaxRegistrationDocumentCommandOutput;
    };
  };
}
