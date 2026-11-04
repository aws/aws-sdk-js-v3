// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWebAppCustomizationRequest, DescribeWebAppCustomizationResponse } from "../models/models_0";
import { DescribeWebAppCustomization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeWebAppCustomizationCommand}.
 */
export interface DescribeWebAppCustomizationCommandInput extends DescribeWebAppCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWebAppCustomizationCommand}.
 */
export interface DescribeWebAppCustomizationCommandOutput extends DescribeWebAppCustomizationResponse, __MetadataBearer {}

/**
 * Describes the web app customization object that's identified by `WebAppId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeWebAppCustomizationCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeWebAppCustomizationCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DescribeWebAppCustomizationRequest
 *   WebAppId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWebAppCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWebAppCustomizationResponse
 * //   WebAppCustomization: { // DescribedWebAppCustomization
 * //     Arn: "STRING_VALUE", // required
 * //     WebAppId: "STRING_VALUE", // required
 * //     Title: "STRING_VALUE",
 * //     LogoFile: new Uint8Array(),
 * //     FaviconFile: new Uint8Array(),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWebAppCustomizationCommandInput - {@link DescribeWebAppCustomizationCommandInput}
 * @returns {@link DescribeWebAppCustomizationCommandOutput}
 * @see {@link DescribeWebAppCustomizationCommandInput} for command's `input` shape.
 * @see {@link DescribeWebAppCustomizationCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class DescribeWebAppCustomizationCommand extends command<DescribeWebAppCustomizationCommandInput, DescribeWebAppCustomizationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWebAppCustomization",
  DescribeWebAppCustomization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWebAppCustomizationRequest;
      output: DescribeWebAppCustomizationResponse;
    };
    sdk: {
      input: DescribeWebAppCustomizationCommandInput;
      output: DescribeWebAppCustomizationCommandOutput;
    };
  };
}
