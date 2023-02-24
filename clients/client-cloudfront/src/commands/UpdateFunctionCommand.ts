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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  UpdateFunctionRequest,
  UpdateFunctionRequestFilterSensitiveLog,
  UpdateFunctionResult,
  UpdateFunctionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateFunctionCommand,
  serializeAws_restXmlUpdateFunctionCommand,
} from "../protocols/Aws_restXml";

export interface UpdateFunctionCommandInput extends UpdateFunctionRequest {}
export interface UpdateFunctionCommandOutput extends UpdateFunctionResult, __MetadataBearer {}

/**
 * <p>Updates a CloudFront function.</p>
 *          <p>You can update a function's code or the comment that describes the function. You
 * 			cannot update a function's name.</p>
 *          <p>To update a function, you provide the function's name and version (<code>ETag</code>
 * 			value) along with the updated function code. To get the name and version, you can use
 * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class UpdateFunctionCommand extends $Command<
  UpdateFunctionCommandInput,
  UpdateFunctionCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: UpdateFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFunctionCommandInput, UpdateFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFunctionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFunctionCommandOutput> {
    return deserializeAws_restXmlUpdateFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
