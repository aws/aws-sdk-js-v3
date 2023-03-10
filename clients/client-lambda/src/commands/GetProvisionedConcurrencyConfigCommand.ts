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
  GetProvisionedConcurrencyConfigRequest,
  GetProvisionedConcurrencyConfigRequestFilterSensitiveLog,
  GetProvisionedConcurrencyConfigResponse,
  GetProvisionedConcurrencyConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand,
  serializeAws_restJson1GetProvisionedConcurrencyConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetProvisionedConcurrencyConfigCommand}.
 */
export interface GetProvisionedConcurrencyConfigCommandInput extends GetProvisionedConcurrencyConfigRequest {}
/**
 * The output of {@link GetProvisionedConcurrencyConfigCommand}.
 */
export interface GetProvisionedConcurrencyConfigCommandOutput
  extends GetProvisionedConcurrencyConfigResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the provisioned concurrency configuration for a function's alias or version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ProvisionedConcurrencyConfigNotFoundException} (client fault)
 *  <p>The specified configuration does not exist.</p>
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
export class GetProvisionedConcurrencyConfigCommand extends $Command<
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
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

  constructor(readonly input: GetProvisionedConcurrencyConfigCommandInput) {
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
  ): Handler<GetProvisionedConcurrencyConfigCommandInput, GetProvisionedConcurrencyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProvisionedConcurrencyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetProvisionedConcurrencyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProvisionedConcurrencyConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetProvisionedConcurrencyConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetProvisionedConcurrencyConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProvisionedConcurrencyConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProvisionedConcurrencyConfigCommandOutput> {
    return deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
