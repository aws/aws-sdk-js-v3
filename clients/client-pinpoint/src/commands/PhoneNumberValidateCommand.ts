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

import { PhoneNumberValidateRequest, PhoneNumberValidateResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_PhoneNumberValidateCommand, se_PhoneNumberValidateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PhoneNumberValidateCommand}.
 */
export interface PhoneNumberValidateCommandInput extends PhoneNumberValidateRequest {}
/**
 * @public
 *
 * The output of {@link PhoneNumberValidateCommand}.
 */
export interface PhoneNumberValidateCommandOutput extends PhoneNumberValidateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PhoneNumberValidateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PhoneNumberValidateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // PhoneNumberValidateRequest
 *   NumberValidateRequest: { // NumberValidateRequest
 *     IsoCountryCode: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *   },
 * };
 * const command = new PhoneNumberValidateCommand(input);
 * const response = await client.send(command);
 * // { // PhoneNumberValidateResponse
 * //   NumberValidateResponse: { // NumberValidateResponse
 * //     Carrier: "STRING_VALUE",
 * //     City: "STRING_VALUE",
 * //     CleansedPhoneNumberE164: "STRING_VALUE",
 * //     CleansedPhoneNumberNational: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     CountryCodeIso2: "STRING_VALUE",
 * //     CountryCodeNumeric: "STRING_VALUE",
 * //     County: "STRING_VALUE",
 * //     OriginalCountryCodeIso2: "STRING_VALUE",
 * //     OriginalPhoneNumber: "STRING_VALUE",
 * //     PhoneType: "STRING_VALUE",
 * //     PhoneTypeCode: Number("int"),
 * //     Timezone: "STRING_VALUE",
 * //     ZipCode: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PhoneNumberValidateCommandInput - {@link PhoneNumberValidateCommandInput}
 * @returns {@link PhoneNumberValidateCommandOutput}
 * @see {@link PhoneNumberValidateCommandInput} for command's `input` shape.
 * @see {@link PhoneNumberValidateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class PhoneNumberValidateCommand extends $Command<
  PhoneNumberValidateCommandInput,
  PhoneNumberValidateCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: PhoneNumberValidateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PhoneNumberValidateCommandInput, PhoneNumberValidateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PhoneNumberValidateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "PhoneNumberValidateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "PhoneNumberValidate",
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
  private serialize(input: PhoneNumberValidateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PhoneNumberValidateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PhoneNumberValidateCommandOutput> {
    return de_PhoneNumberValidateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
