// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  GetParametersForImportInput,
  GetParametersForImportOutput,
  GetParametersForImportOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_GetParametersForImportCommand, se_GetParametersForImportCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetParametersForImportCommand}.
 */
export interface GetParametersForImportCommandInput extends GetParametersForImportInput {}
/**
 * @public
 *
 * The output of {@link GetParametersForImportCommand}.
 */
export interface GetParametersForImportCommandOutput extends GetParametersForImportOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the import token and the wrapping key certificate to initiate a TR-34 key import into Amazon Web Services Payment Cryptography.</p>
 *          <p>The wrapping key certificate wraps the key under import within the TR-34 key payload. The import token and wrapping key certificate must be in place and operational before calling <a>ImportKey</a>. The import token expires in 7 days. The same import token can be used to import multiple keys into your service account.</p>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetParametersForExport</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ImportKey</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetParametersForImportCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetParametersForImportCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetParametersForImportInput
 *   KeyMaterialType: "STRING_VALUE", // required
 *   WrappingKeyAlgorithm: "STRING_VALUE", // required
 * };
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersForImportOutput
 * //   WrappingKeyCertificate: "STRING_VALUE", // required
 * //   WrappingKeyCertificateChain: "STRING_VALUE", // required
 * //   WrappingKeyAlgorithm: "STRING_VALUE", // required
 * //   ImportToken: "STRING_VALUE", // required
 * //   ParametersValidUntilTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetParametersForImportCommandInput - {@link GetParametersForImportCommandInput}
 * @returns {@link GetParametersForImportCommandOutput}
 * @see {@link GetParametersForImportCommandInput} for command's `input` shape.
 * @see {@link GetParametersForImportCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can cause an inconsistent state for the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 */
export class GetParametersForImportCommand extends $Command<
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
  PaymentCryptographyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetParametersForImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PaymentCryptographyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParametersForImportCommandInput, GetParametersForImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetParametersForImportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyClient";
    const commandName = "GetParametersForImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetParametersForImportOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "PaymentCryptographyControlPlane",
        operation: "GetParametersForImport",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetParametersForImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetParametersForImportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParametersForImportCommandOutput> {
    return de_GetParametersForImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
