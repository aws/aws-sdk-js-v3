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
  CreateReturnShippingLabelRequest,
  CreateReturnShippingLabelRequestFilterSensitiveLog,
  CreateReturnShippingLabelResult,
  CreateReturnShippingLabelResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateReturnShippingLabelCommand,
  serializeAws_json1_1CreateReturnShippingLabelCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface CreateReturnShippingLabelCommandInput extends CreateReturnShippingLabelRequest {}
export interface CreateReturnShippingLabelCommandOutput extends CreateReturnShippingLabelResult, __MetadataBearer {}

/**
 * <p>Creates a shipping label that will be used to return the Snow device to Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link CreateReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class CreateReturnShippingLabelCommand extends $Command<
  CreateReturnShippingLabelCommandInput,
  CreateReturnShippingLabelCommandOutput,
  SnowballClientResolvedConfig
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

  constructor(readonly input: CreateReturnShippingLabelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReturnShippingLabelCommandInput, CreateReturnShippingLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReturnShippingLabelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateReturnShippingLabelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReturnShippingLabelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateReturnShippingLabelResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReturnShippingLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateReturnShippingLabelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReturnShippingLabelCommandOutput> {
    return deserializeAws_json1_1CreateReturnShippingLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
