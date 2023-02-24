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
  GetParametersByPathRequest,
  GetParametersByPathRequestFilterSensitiveLog,
  GetParametersByPathResult,
  GetParametersByPathResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetParametersByPathCommand,
  serializeAws_json1_1GetParametersByPathCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface GetParametersByPathCommandInput extends GetParametersByPathRequest {}
export interface GetParametersByPathCommandOutput extends GetParametersByPathResult, __MetadataBearer {}

/**
 * <p>Retrieve information about one or more parameters in a specific hierarchy. </p>
 *          <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *    in the request, the response includes information up to the limit specified. The number of items
 *    returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *    reaches an internal limit while processing the results, it stops the operation and returns the
 *    matching values up to that point and a <code>NextToken</code>. You can specify the
 *     <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersByPathCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersByPathCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParametersByPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParametersByPathCommandInput} for command's `input` shape.
 * @see {@link GetParametersByPathCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class GetParametersByPathCommand extends $Command<
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: GetParametersByPathCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParametersByPathCommandInput, GetParametersByPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetParametersByPathCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetParametersByPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetParametersByPathRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetParametersByPathResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetParametersByPathCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetParametersByPathCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParametersByPathCommandOutput> {
    return deserializeAws_json1_1GetParametersByPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
