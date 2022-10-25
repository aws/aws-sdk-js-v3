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
  DeleteProfileObjectTypeRequest,
  DeleteProfileObjectTypeRequestFilterSensitiveLog,
  DeleteProfileObjectTypeResponse,
  DeleteProfileObjectTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteProfileObjectTypeCommand,
  serializeAws_restJson1DeleteProfileObjectTypeCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteProfileObjectTypeCommandInput extends DeleteProfileObjectTypeRequest {}
export interface DeleteProfileObjectTypeCommandOutput extends DeleteProfileObjectTypeResponse, __MetadataBearer {}

/**
 * <p>Removes a ProfileObjectType from a specific domain as well as removes all the
 *          ProfileObjects of that type. It also disables integrations from this specific
 *          ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that
 *          were populated from this ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class DeleteProfileObjectTypeCommand extends $Command<
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
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

  constructor(readonly input: DeleteProfileObjectTypeCommandInput) {
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
  ): Handler<DeleteProfileObjectTypeCommandInput, DeleteProfileObjectTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteProfileObjectTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "DeleteProfileObjectTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProfileObjectTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteProfileObjectTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProfileObjectTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProfileObjectTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteProfileObjectTypeCommandOutput> {
    return deserializeAws_restJson1DeleteProfileObjectTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
