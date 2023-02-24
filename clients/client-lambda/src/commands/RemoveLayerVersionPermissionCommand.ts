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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  RemoveLayerVersionPermissionRequest,
  RemoveLayerVersionPermissionRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RemoveLayerVersionPermissionCommand,
  serializeAws_restJson1RemoveLayerVersionPermissionCommand,
} from "../protocols/Aws_restJson1";

export interface RemoveLayerVersionPermissionCommandInput extends RemoveLayerVersionPermissionRequest {}
export interface RemoveLayerVersionPermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>. For more information, see
 *         <a>AddLayerVersionPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, RemoveLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, RemoveLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new RemoveLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveLayerVersionPermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveLayerVersionPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class RemoveLayerVersionPermissionCommand extends $Command<
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: RemoveLayerVersionPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveLayerVersionPermissionCommandInput, RemoveLayerVersionPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveLayerVersionPermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "RemoveLayerVersionPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveLayerVersionPermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveLayerVersionPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveLayerVersionPermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveLayerVersionPermissionCommandOutput> {
    return deserializeAws_restJson1RemoveLayerVersionPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
