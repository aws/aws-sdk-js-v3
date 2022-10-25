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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  AddProfileKeyRequest,
  AddProfileKeyRequestFilterSensitiveLog,
  AddProfileKeyResponse,
  AddProfileKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AddProfileKeyCommand,
  serializeAws_restJson1AddProfileKeyCommand,
} from "../protocols/Aws_restJson1";

export interface AddProfileKeyCommandInput extends AddProfileKeyRequest {}
export interface AddProfileKeyCommandOutput extends AddProfileKeyResponse, __MetadataBearer {}

/**
 * <p>Associates a new key value with a specific profile, such as a Contact Record
 *          ContactId.</p>
 *          <p>A profile object can have a single unique key and any number of additional keys that can
 *          be used to identify the profile that it belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, AddProfileKeyCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, AddProfileKeyCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new AddProfileKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddProfileKeyCommandInput} for command's `input` shape.
 * @see {@link AddProfileKeyCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class AddProfileKeyCommand extends $Command<
  AddProfileKeyCommandInput,
  AddProfileKeyCommandOutput,
  CustomerProfilesClientResolvedConfig
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

  constructor(readonly input: AddProfileKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddProfileKeyCommandInput, AddProfileKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AddProfileKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "AddProfileKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddProfileKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddProfileKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddProfileKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddProfileKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddProfileKeyCommandOutput> {
    return deserializeAws_restJson1AddProfileKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
