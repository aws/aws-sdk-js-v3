// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateCertificateRequest, DisassociateCertificateResponse } from "../models/models_0";
import { DisassociateCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateCertificateCommand}.
 */
export interface DisassociateCertificateCommandInput extends DisassociateCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateCertificateCommand}.
 */
export interface DisassociateCertificateCommandOutput extends DisassociateCertificateResponse, __MetadataBearer {}

/**
 * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DisassociateCertificateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DisassociateCertificateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = { // DisassociateCertificateRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateCertificateCommandInput - {@link DisassociateCertificateCommandInput}
 * @returns {@link DisassociateCertificateCommandOutput}
 * @see {@link DisassociateCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateCertificateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  You attempted to create more resources than the service allows based on service quotas.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 *
 * @public
 */
export class DisassociateCertificateCommand extends command<DisassociateCertificateCommandInput, DisassociateCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateCertificate",
  DisassociateCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateCertificateRequest;
      output: {};
    };
    sdk: {
      input: DisassociateCertificateCommandInput;
      output: DisassociateCertificateCommandOutput;
    };
  };
}
