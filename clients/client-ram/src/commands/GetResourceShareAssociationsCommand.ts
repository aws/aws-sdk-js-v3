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
  GetResourceShareAssociationsRequest,
  GetResourceShareAssociationsRequestFilterSensitiveLog,
  GetResourceShareAssociationsResponse,
  GetResourceShareAssociationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetResourceShareAssociationsCommand,
  serializeAws_restJson1GetResourceShareAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface GetResourceShareAssociationsCommandInput extends GetResourceShareAssociationsRequest {}
export interface GetResourceShareAssociationsCommandOutput
  extends GetResourceShareAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the resource and principal associations for resource shares that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceShareAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceShareAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class GetResourceShareAssociationsCommand extends $Command<
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
  RAMClientResolvedConfig
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

  constructor(readonly input: GetResourceShareAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceShareAssociationsCommandInput, GetResourceShareAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceShareAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "GetResourceShareAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceShareAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourceShareAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceShareAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourceShareAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceShareAssociationsCommandOutput> {
    return deserializeAws_restJson1GetResourceShareAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
