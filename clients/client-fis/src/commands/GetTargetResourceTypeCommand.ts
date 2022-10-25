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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import {
  GetTargetResourceTypeRequest,
  GetTargetResourceTypeRequestFilterSensitiveLog,
  GetTargetResourceTypeResponse,
  GetTargetResourceTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetTargetResourceTypeCommand,
  serializeAws_restJson1GetTargetResourceTypeCommand,
} from "../protocols/Aws_restJson1";

export interface GetTargetResourceTypeCommandInput extends GetTargetResourceTypeRequest {}
export interface GetTargetResourceTypeCommandOutput extends GetTargetResourceTypeResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetTargetResourceTypeCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetTargetResourceTypeCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetTargetResourceTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTargetResourceTypeCommandInput} for command's `input` shape.
 * @see {@link GetTargetResourceTypeCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 */
export class GetTargetResourceTypeCommand extends $Command<
  GetTargetResourceTypeCommandInput,
  GetTargetResourceTypeCommandOutput,
  FisClientResolvedConfig
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

  constructor(readonly input: GetTargetResourceTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTargetResourceTypeCommandInput, GetTargetResourceTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTargetResourceTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "GetTargetResourceTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTargetResourceTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTargetResourceTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTargetResourceTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTargetResourceTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTargetResourceTypeCommandOutput> {
    return deserializeAws_restJson1GetTargetResourceTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
