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
  DescribeEndpointAuthorizationMessage,
  DescribeEndpointAuthorizationMessageFilterSensitiveLog,
  EndpointAuthorizationList,
  EndpointAuthorizationListFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeEndpointAuthorizationCommand,
  serializeAws_queryDescribeEndpointAuthorizationCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DescribeEndpointAuthorizationCommandInput extends DescribeEndpointAuthorizationMessage {}
export interface DescribeEndpointAuthorizationCommandOutput extends EndpointAuthorizationList, __MetadataBearer {}

/**
 * <p>Describes an endpoint authorization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEndpointAuthorizationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEndpointAuthorizationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeEndpointAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeEndpointAuthorizationCommand extends $Command<
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: DescribeEndpointAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEndpointAuthorizationCommandInput, DescribeEndpointAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEndpointAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeEndpointAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEndpointAuthorizationMessageFilterSensitiveLog,
      outputFilterSensitiveLog: EndpointAuthorizationListFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEndpointAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEndpointAuthorizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEndpointAuthorizationCommandOutput> {
    return deserializeAws_queryDescribeEndpointAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
