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
  AddLayerVersionPermissionRequest,
  AddLayerVersionPermissionRequestFilterSensitiveLog,
  AddLayerVersionPermissionResponse,
  AddLayerVersionPermissionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AddLayerVersionPermissionCommand,
  serializeAws_restJson1AddLayerVersionPermissionCommand,
} from "../protocols/Aws_restJson1";

export interface AddLayerVersionPermissionCommandInput extends AddLayerVersionPermissionRequest {}
export interface AddLayerVersionPermissionCommandOutput extends AddLayerVersionPermissionResponse, __MetadataBearer {}

/**
 * <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>. Use this action to grant layer
 *       usage permission to other accounts. You can grant permission to a single account, all accounts in an organization,
 *       or all Amazon Web Services accounts.  </p>
 *          <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you
 *       specified when you added it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, AddLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new AddLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddLayerVersionPermissionCommandInput} for command's `input` shape.
 * @see {@link AddLayerVersionPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class AddLayerVersionPermissionCommand extends $Command<
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
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

  constructor(readonly input: AddLayerVersionPermissionCommandInput) {
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
  ): Handler<AddLayerVersionPermissionCommandInput, AddLayerVersionPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddLayerVersionPermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "AddLayerVersionPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddLayerVersionPermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddLayerVersionPermissionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddLayerVersionPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddLayerVersionPermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddLayerVersionPermissionCommandOutput> {
    return deserializeAws_restJson1AddLayerVersionPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
