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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetContactRequest, GetContactResponse, GetContactResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetContactCommand, se_GetContactCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetContactCommand}.
 */
export interface GetContactCommandInput extends GetContactRequest {}
/**
 * @public
 *
 * The output of {@link GetContactCommand}.
 */
export interface GetContactCommandOutput extends GetContactResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets the contact details by the contact ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetContactCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetContactCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetContactRequest
 *   ContactArn: "STRING_VALUE", // required
 * };
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * // { // GetContactResponse
 * //   Contact: { // Contact
 * //     ContactArn: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     FirstName: "STRING_VALUE",
 * //     LastName: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     PhoneNumbers: [ // PhoneNumberList
 * //       { // PhoneNumber
 * //         Number: "STRING_VALUE", // required
 * //         Type: "MOBILE" || "WORK" || "HOME", // required
 * //       },
 * //     ],
 * //     SipAddresses: [ // SipAddressList
 * //       { // SipAddress
 * //         Uri: "STRING_VALUE", // required
 * //         Type: "WORK", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContactCommandInput - {@link GetContactCommandInput}
 * @returns {@link GetContactCommandOutput}
 * @see {@link GetContactCommandInput} for command's `input` shape.
 * @see {@link GetContactCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetContactCommand extends $Command<
  GetContactCommandInput,
  GetContactCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: GetContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContactCommandInput, GetContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetContactCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "GetContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetContactResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "GetContact",
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
  private serialize(input: GetContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContactCommandOutput> {
    return de_GetContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
