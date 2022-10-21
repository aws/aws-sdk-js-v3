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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  DescribeConditionalForwardersRequest,
  DescribeConditionalForwardersRequestFilterSensitiveLog,
  DescribeConditionalForwardersResult,
  DescribeConditionalForwardersResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConditionalForwardersCommand,
  serializeAws_json1_1DescribeConditionalForwardersCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeConditionalForwardersCommandInput extends DescribeConditionalForwardersRequest {}
export interface DescribeConditionalForwardersCommandOutput
  extends DescribeConditionalForwardersResult,
    __MetadataBearer {}

/**
 * <p>Obtains information about the conditional forwarders for this account.</p>
 *          <p>If no input parameters are provided for RemoteDomainNames, this request describes all
 *       conditional forwarders for the specified directory ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeConditionalForwardersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeConditionalForwardersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeConditionalForwardersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConditionalForwardersCommandInput} for command's `input` shape.
 * @see {@link DescribeConditionalForwardersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class DescribeConditionalForwardersCommand extends $Command<
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
  DirectoryServiceClientResolvedConfig
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

  constructor(readonly input: DescribeConditionalForwardersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConditionalForwardersCommandInput, DescribeConditionalForwardersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConditionalForwardersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeConditionalForwardersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConditionalForwardersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeConditionalForwardersResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConditionalForwardersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConditionalForwardersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConditionalForwardersCommandOutput> {
    return deserializeAws_json1_1DescribeConditionalForwardersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
