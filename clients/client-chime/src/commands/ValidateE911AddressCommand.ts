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
} from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  ValidateE911AddressRequest,
  ValidateE911AddressRequestFilterSensitiveLog,
  ValidateE911AddressResponse,
  ValidateE911AddressResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ValidateE911AddressCommand, se_ValidateE911AddressCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ValidateE911AddressCommand}.
 */
export interface ValidateE911AddressCommandInput extends ValidateE911AddressRequest {}
/**
 * @public
 *
 * The output of {@link ValidateE911AddressCommand}.
 */
export interface ValidateE911AddressCommandOutput extends ValidateE911AddressResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Validates an address to be used for 911 calls made with Amazon
 *             Chime Voice Connectors. You can use validated addresses
 *             in a Presence Information Data Format Location Object file that you include in SIP requests.
 *             That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ValidateE911Address.html">ValidateE911Address</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ValidateE911AddressCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ValidateE911AddressCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ValidateE911AddressRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   StreetNumber: "STRING_VALUE", // required
 *   StreetInfo: "STRING_VALUE", // required
 *   City: "STRING_VALUE", // required
 *   State: "STRING_VALUE", // required
 *   Country: "STRING_VALUE", // required
 *   PostalCode: "STRING_VALUE", // required
 * };
 * const command = new ValidateE911AddressCommand(input);
 * const response = await client.send(command);
 * // { // ValidateE911AddressResponse
 * //   ValidationResult: Number("int"),
 * //   AddressExternalId: "STRING_VALUE",
 * //   Address: { // Address
 * //     streetName: "STRING_VALUE",
 * //     streetSuffix: "STRING_VALUE",
 * //     postDirectional: "STRING_VALUE",
 * //     preDirectional: "STRING_VALUE",
 * //     streetNumber: "STRING_VALUE",
 * //     city: "STRING_VALUE",
 * //     state: "STRING_VALUE",
 * //     postalCode: "STRING_VALUE",
 * //     postalCodePlus4: "STRING_VALUE",
 * //     country: "STRING_VALUE",
 * //   },
 * //   CandidateAddressList: [ // CandidateAddressList
 * //     { // CandidateAddress
 * //       streetInfo: "STRING_VALUE",
 * //       streetNumber: "STRING_VALUE",
 * //       city: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       postalCode: "STRING_VALUE",
 * //       postalCodePlus4: "STRING_VALUE",
 * //       country: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateE911AddressCommandInput - {@link ValidateE911AddressCommandInput}
 * @returns {@link ValidateE911AddressCommandOutput}
 * @see {@link ValidateE911AddressCommandInput} for command's `input` shape.
 * @see {@link ValidateE911AddressCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class ValidateE911AddressCommand extends $Command<
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: ValidateE911AddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateE911AddressCommandInput, ValidateE911AddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateE911AddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ValidateE911AddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateE911AddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ValidateE911AddressResponseFilterSensitiveLog,
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
  private serialize(input: ValidateE911AddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ValidateE911AddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidateE911AddressCommandOutput> {
    return de_ValidateE911AddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
