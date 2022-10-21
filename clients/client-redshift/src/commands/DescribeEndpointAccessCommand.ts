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
  DescribeEndpointAccessMessage,
  DescribeEndpointAccessMessageFilterSensitiveLog,
  EndpointAccessList,
  EndpointAccessListFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeEndpointAccessCommand,
  serializeAws_queryDescribeEndpointAccessCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DescribeEndpointAccessCommandInput extends DescribeEndpointAccessMessage {}
export interface DescribeEndpointAccessCommandOutput extends EndpointAccessList, __MetadataBearer {}

/**
 * <p>Describes a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeEndpointAccessCommand extends $Command<
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput,
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

  constructor(readonly input: DescribeEndpointAccessCommandInput) {
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
  ): Handler<DescribeEndpointAccessCommandInput, DescribeEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEndpointAccessMessageFilterSensitiveLog,
      outputFilterSensitiveLog: EndpointAccessListFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEndpointAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEndpointAccessCommandOutput> {
    return deserializeAws_queryDescribeEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
