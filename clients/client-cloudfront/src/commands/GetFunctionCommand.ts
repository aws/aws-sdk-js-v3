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
import { GetFunctionRequest, GetFunctionResult, GetFunctionResultFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_restXmlGetFunctionCommand,
  serializeAws_restXmlGetFunctionCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandInput extends GetFunctionRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandOutput extends GetFunctionResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the code of a CloudFront function. To get configuration information and metadata about
 * 			a function, use <code>DescribeFunction</code>.</p>
 *          <p>To get a function's code, you must provide the function's name and stage. To get these
 * 			values, you can use <code>ListFunctions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = {
 *   Name: "STRING_VALUE", // required
 *   Stage: "DEVELOPMENT" || "LIVE",
 * };
 * const command = new GetFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetFunctionCommandInput - {@link GetFunctionCommandInput}
 * @returns {@link GetFunctionCommandOutput}
 * @see {@link GetFunctionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link NoSuchFunctionExists} (client fault)
 *  <p>The function does not exist.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 *
 */
export class GetFunctionCommand extends $Command<
  GetFunctionCommandInput,
  GetFunctionCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetFunctionCommandInput) {
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
  ): Handler<GetFunctionCommandInput, GetFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFunctionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetFunctionResultFilterSensitiveLog,
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
  private serialize(input: GetFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetFunctionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFunctionCommandOutput> {
    return deserializeAws_restXmlGetFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
