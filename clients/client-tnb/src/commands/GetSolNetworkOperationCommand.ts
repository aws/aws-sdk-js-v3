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

import {
  GetSolNetworkOperationInput,
  GetSolNetworkOperationInputFilterSensitiveLog,
  GetSolNetworkOperationOutput,
  GetSolNetworkOperationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSolNetworkOperationCommand,
  serializeAws_restJson1GetSolNetworkOperationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface GetSolNetworkOperationCommandInput extends GetSolNetworkOperationInput {}
export interface GetSolNetworkOperationCommandOutput extends GetSolNetworkOperationOutput, __MetadataBearer {}

/**
 * <p>Gets the details of a network operation, including the tasks involved in the network operation and the status of the tasks.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkOperationCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkOperationCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new GetSolNetworkOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSolNetworkOperationCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkOperationCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class GetSolNetworkOperationCommand extends $Command<
  GetSolNetworkOperationCommandInput,
  GetSolNetworkOperationCommandOutput,
  TnbClientResolvedConfig
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

  constructor(readonly input: GetSolNetworkOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSolNetworkOperationCommandInput, GetSolNetworkOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolNetworkOperationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "GetSolNetworkOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSolNetworkOperationInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSolNetworkOperationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSolNetworkOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSolNetworkOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSolNetworkOperationCommandOutput> {
    return deserializeAws_restJson1GetSolNetworkOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
