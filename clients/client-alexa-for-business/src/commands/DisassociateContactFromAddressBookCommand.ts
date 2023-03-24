// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  DisassociateContactFromAddressBookRequest,
  DisassociateContactFromAddressBookResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateContactFromAddressBookCommand,
  serializeAws_json1_1DisassociateContactFromAddressBookCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DisassociateContactFromAddressBookCommand}.
 */
export interface DisassociateContactFromAddressBookCommandInput extends DisassociateContactFromAddressBookRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateContactFromAddressBookCommand}.
 */
export interface DisassociateContactFromAddressBookCommandOutput
  extends DisassociateContactFromAddressBookResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a contact from a given address book.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateContactFromAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateContactFromAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = {
 *   ContactArn: "STRING_VALUE", // required
 *   AddressBookArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateContactFromAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisassociateContactFromAddressBookCommandInput - {@link DisassociateContactFromAddressBookCommandInput}
 * @returns {@link DisassociateContactFromAddressBookCommandOutput}
 * @see {@link DisassociateContactFromAddressBookCommandInput} for command's `input` shape.
 * @see {@link DisassociateContactFromAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 *
 */
export class DisassociateContactFromAddressBookCommand extends $Command<
  DisassociateContactFromAddressBookCommandInput,
  DisassociateContactFromAddressBookCommandOutput,
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
  constructor(readonly input: DisassociateContactFromAddressBookCommandInput) {
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
  ): Handler<DisassociateContactFromAddressBookCommandInput, DisassociateContactFromAddressBookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateContactFromAddressBookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DisassociateContactFromAddressBookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: DisassociateContactFromAddressBookCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateContactFromAddressBookCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateContactFromAddressBookCommandOutput> {
    return deserializeAws_json1_1DisassociateContactFromAddressBookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
