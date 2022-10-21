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
  DescribeParametersRequest,
  DescribeParametersRequestFilterSensitiveLog,
  DescribeParametersResult,
  DescribeParametersResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1DescribeParametersCommand,
  serializeAws_json1_1DescribeParametersCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DescribeParametersCommandInput extends DescribeParametersRequest {}
export interface DescribeParametersCommandOutput extends DescribeParametersResult, __MetadataBearer {}

/**
 * <p>Get information about a parameter.</p>
 *          <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *    in the request, the response includes information up to the limit specified. The number of items
 *    returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *    reaches an internal limit while processing the results, it stops the operation and returns the
 *    matching values up to that point and a <code>NextToken</code>. You can specify the
 *     <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 *          <important>
 *             <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must
 *     also update the key alias the parameter uses to reference KMS. Otherwise,
 *      <code>DescribeParameters</code> retrieves whatever the original key alias was
 *     referencing.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DescribeParametersCommand extends $Command<
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
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

  constructor(readonly input: DescribeParametersCommandInput) {
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
  ): Handler<DescribeParametersCommandInput, DescribeParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeParametersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeParametersResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeParametersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeParametersCommandOutput> {
    return deserializeAws_json1_1DescribeParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
