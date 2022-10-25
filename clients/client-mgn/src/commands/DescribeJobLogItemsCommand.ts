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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DescribeJobLogItemsRequest,
  DescribeJobLogItemsRequestFilterSensitiveLog,
  DescribeJobLogItemsResponse,
  DescribeJobLogItemsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobLogItemsCommand,
  serializeAws_restJson1DescribeJobLogItemsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeJobLogItemsCommandInput extends DescribeJobLogItemsRequest {}
export interface DescribeJobLogItemsCommandOutput extends DescribeJobLogItemsResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed job log items with paging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeJobLogItemsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeJobLogItemsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DescribeJobLogItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobLogItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobLogItemsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class DescribeJobLogItemsCommand extends $Command<
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
  MgnClientResolvedConfig
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

  constructor(readonly input: DescribeJobLogItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobLogItemsCommandInput, DescribeJobLogItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobLogItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeJobLogItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobLogItemsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobLogItemsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobLogItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobLogItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobLogItemsCommandOutput> {
    return deserializeAws_restJson1DescribeJobLogItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
