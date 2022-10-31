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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  ListVpcIngressConnectionsRequest,
  ListVpcIngressConnectionsRequestFilterSensitiveLog,
  ListVpcIngressConnectionsResponse,
  ListVpcIngressConnectionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListVpcIngressConnectionsCommand,
  serializeAws_json1_0ListVpcIngressConnectionsCommand,
} from "../protocols/Aws_json1_0";

export interface ListVpcIngressConnectionsCommandInput extends ListVpcIngressConnectionsRequest {}
export interface ListVpcIngressConnectionsCommandOutput extends ListVpcIngressConnectionsResponse, __MetadataBearer {}

/**
 * <p>Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListVpcIngressConnectionsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListVpcIngressConnectionsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListVpcIngressConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVpcIngressConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListVpcIngressConnectionsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 */
export class ListVpcIngressConnectionsCommand extends $Command<
  ListVpcIngressConnectionsCommandInput,
  ListVpcIngressConnectionsCommandOutput,
  AppRunnerClientResolvedConfig
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

  constructor(readonly input: ListVpcIngressConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVpcIngressConnectionsCommandInput, ListVpcIngressConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVpcIngressConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "ListVpcIngressConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVpcIngressConnectionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVpcIngressConnectionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVpcIngressConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListVpcIngressConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVpcIngressConnectionsCommandOutput> {
    return deserializeAws_json1_0ListVpcIngressConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
