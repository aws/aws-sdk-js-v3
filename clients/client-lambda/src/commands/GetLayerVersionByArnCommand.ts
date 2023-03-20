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
import { GetLayerVersionByArnRequest, GetLayerVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetLayerVersionByArnCommand,
  serializeAws_restJson1GetLayerVersionByArnCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetLayerVersionByArnCommand}.
 */
export interface GetLayerVersionByArnCommandInput extends GetLayerVersionByArnRequest {}
/**
 * @public
 *
 * The output of {@link GetLayerVersionByArnCommand}.
 */
export interface GetLayerVersionByArnCommandOutput extends GetLayerVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>, with a link to download the layer archive
 *         that's valid for 10 minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionByArnCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionByArnCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetLayerVersionByArnCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetLayerVersionByArnCommandInput - {@link GetLayerVersionByArnCommandInput}
 * @returns {@link GetLayerVersionByArnCommandOutput}
 * @see {@link GetLayerVersionByArnCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionByArnCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 *
 */
export class GetLayerVersionByArnCommand extends $Command<
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetLayerVersionByArnCommandInput) {
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
  ): Handler<GetLayerVersionByArnCommandInput, GetLayerVersionByArnCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLayerVersionByArnCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetLayerVersionByArnCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetLayerVersionByArnCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLayerVersionByArnCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLayerVersionByArnCommandOutput> {
    return deserializeAws_restJson1GetLayerVersionByArnCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
