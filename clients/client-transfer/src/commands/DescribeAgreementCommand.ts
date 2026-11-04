// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAgreementRequest, DescribeAgreementResponse } from "../models/models_0";
import { DescribeAgreement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandInput extends DescribeAgreementRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandOutput extends DescribeAgreementResponse, __MetadataBearer {}

/**
 * Describes the agreement that's identified by the `AgreementId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeAgreementCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeAgreementCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DescribeAgreementRequest
 *   AgreementId: "STRING_VALUE", // required
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgreementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgreementResponse
 * //   Agreement: { // DescribedAgreement
 * //     Arn: "STRING_VALUE", // required
 * //     AgreementId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     ServerId: "STRING_VALUE",
 * //     LocalProfileId: "STRING_VALUE",
 * //     PartnerProfileId: "STRING_VALUE",
 * //     BaseDirectory: "STRING_VALUE",
 * //     AccessRole: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     PreserveFilename: "ENABLED" || "DISABLED",
 * //     EnforceMessageSigning: "ENABLED" || "DISABLED",
 * //     CustomDirectories: { // CustomDirectoriesType
 * //       FailedFilesDirectory: "STRING_VALUE", // required
 * //       MdnFilesDirectory: "STRING_VALUE", // required
 * //       PayloadFilesDirectory: "STRING_VALUE", // required
 * //       StatusFilesDirectory: "STRING_VALUE", // required
 * //       TemporaryFilesDirectory: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAgreementCommandInput - {@link DescribeAgreementCommandInput}
 * @returns {@link DescribeAgreementCommandOutput}
 * @see {@link DescribeAgreementCommandInput} for command's `input` shape.
 * @see {@link DescribeAgreementCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class DescribeAgreementCommand extends command<DescribeAgreementCommandInput, DescribeAgreementCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAgreement",
  DescribeAgreement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgreementRequest;
      output: DescribeAgreementResponse;
    };
    sdk: {
      input: DescribeAgreementCommandInput;
      output: DescribeAgreementCommandOutput;
    };
  };
}
