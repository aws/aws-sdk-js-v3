// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWebAppCustomizationRequest, UpdateWebAppCustomizationResponse } from "../models/models_0";
import { UpdateWebAppCustomization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWebAppCustomizationCommand}.
 */
export interface UpdateWebAppCustomizationCommandInput extends UpdateWebAppCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebAppCustomizationCommand}.
 */
export interface UpdateWebAppCustomizationCommandOutput extends UpdateWebAppCustomizationResponse, __MetadataBearer {}

/**
 * Assigns new customization properties to a web app. You can modify the icon file, logo file, and title.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateWebAppCustomizationCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateWebAppCustomizationCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // UpdateWebAppCustomizationRequest
 *   WebAppId: "STRING_VALUE", // required
 *   Title: "STRING_VALUE",
 *   LogoFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   FaviconFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new UpdateWebAppCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebAppCustomizationResponse
 * //   WebAppId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateWebAppCustomizationCommandInput - {@link UpdateWebAppCustomizationCommandInput}
 * @returns {@link UpdateWebAppCustomizationCommandOutput}
 * @see {@link UpdateWebAppCustomizationCommandInput} for command's `input` shape.
 * @see {@link UpdateWebAppCustomizationCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the `UpdateServer` is called for a file transfer protocol-enabled server that has VPC as the endpoint type and the server's `VpcEndpointID` is not in the available state.
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
export class UpdateWebAppCustomizationCommand extends command<UpdateWebAppCustomizationCommandInput, UpdateWebAppCustomizationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWebAppCustomization",
  UpdateWebAppCustomization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebAppCustomizationRequest;
      output: UpdateWebAppCustomizationResponse;
    };
    sdk: {
      input: UpdateWebAppCustomizationCommandInput;
      output: UpdateWebAppCustomizationCommandOutput;
    };
  };
}
