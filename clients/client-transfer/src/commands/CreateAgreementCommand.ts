// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgreementRequest, CreateAgreementResponse } from "../models/models_0";
import { CreateAgreement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgreementCommand}.
 */
export interface CreateAgreementCommandInput extends CreateAgreementRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgreementCommand}.
 */
export interface CreateAgreementCommandOutput extends CreateAgreementResponse, __MetadataBearer {}

/**
 * Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.
 *
 * The partner is identified with the `PartnerProfileId`, and the AS2 process is identified with the `LocalProfileId`.
 *
 * > **Note:** Specify *either* `BaseDirectory` or `CustomDirectories`, but not both. Specifying both causes the command to fail.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateAgreementCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateAgreementCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // CreateAgreementRequest
 *   Description: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 *   LocalProfileId: "STRING_VALUE", // required
 *   PartnerProfileId: "STRING_VALUE", // required
 *   BaseDirectory: "STRING_VALUE",
 *   AccessRole: "STRING_VALUE", // required
 *   Status: "ACTIVE" || "INACTIVE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   PreserveFilename: "ENABLED" || "DISABLED",
 *   EnforceMessageSigning: "ENABLED" || "DISABLED",
 *   CustomDirectories: { // CustomDirectoriesType
 *     FailedFilesDirectory: "STRING_VALUE", // required
 *     MdnFilesDirectory: "STRING_VALUE", // required
 *     PayloadFilesDirectory: "STRING_VALUE", // required
 *     StatusFilesDirectory: "STRING_VALUE", // required
 *     TemporaryFilesDirectory: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateAgreementCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgreementResponse
 * //   AgreementId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAgreementCommandInput - {@link CreateAgreementCommandInput}
 * @returns {@link CreateAgreementCommandOutput}
 * @see {@link CreateAgreementCommandInput} for command's `input` shape.
 * @see {@link CreateAgreementCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The requested resource does not exist, or exists in a region other than the one specified for the command.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class CreateAgreementCommand extends command<CreateAgreementCommandInput, CreateAgreementCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgreement",
  CreateAgreement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgreementRequest;
      output: CreateAgreementResponse;
    };
    sdk: {
      input: CreateAgreementCommandInput;
      output: CreateAgreementCommandOutput;
    };
  };
}
