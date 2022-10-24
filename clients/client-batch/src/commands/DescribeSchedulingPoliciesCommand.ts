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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  DescribeSchedulingPoliciesRequest,
  DescribeSchedulingPoliciesRequestFilterSensitiveLog,
  DescribeSchedulingPoliciesResponse,
  DescribeSchedulingPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSchedulingPoliciesCommand,
  serializeAws_restJson1DescribeSchedulingPoliciesCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeSchedulingPoliciesCommandInput extends DescribeSchedulingPoliciesRequest {}
export interface DescribeSchedulingPoliciesCommandOutput extends DescribeSchedulingPoliciesResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your scheduling policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeSchedulingPoliciesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeSchedulingPoliciesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DescribeSchedulingPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSchedulingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeSchedulingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class DescribeSchedulingPoliciesCommand extends $Command<
  DescribeSchedulingPoliciesCommandInput,
  DescribeSchedulingPoliciesCommandOutput,
  BatchClientResolvedConfig
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

  constructor(readonly input: DescribeSchedulingPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSchedulingPoliciesCommandInput, DescribeSchedulingPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSchedulingPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeSchedulingPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSchedulingPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSchedulingPoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSchedulingPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSchedulingPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSchedulingPoliciesCommandOutput> {
    return deserializeAws_restJson1DescribeSchedulingPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
