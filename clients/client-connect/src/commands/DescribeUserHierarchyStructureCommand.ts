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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  DescribeUserHierarchyStructureRequest,
  DescribeUserHierarchyStructureRequestFilterSensitiveLog,
  DescribeUserHierarchyStructureResponse,
  DescribeUserHierarchyStructureResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeUserHierarchyStructureCommand,
  serializeAws_restJson1DescribeUserHierarchyStructureCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeUserHierarchyStructureCommandInput extends DescribeUserHierarchyStructureRequest {}
export interface DescribeUserHierarchyStructureCommandOutput
  extends DescribeUserHierarchyStructureResponse,
    __MetadataBearer {}

/**
 * <p>Describes the hierarchy structure of the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserHierarchyStructureCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserHierarchyStructureCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeUserHierarchyStructureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserHierarchyStructureCommandInput} for command's `input` shape.
 * @see {@link DescribeUserHierarchyStructureCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class DescribeUserHierarchyStructureCommand extends $Command<
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: DescribeUserHierarchyStructureCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUserHierarchyStructureCommandInput, DescribeUserHierarchyStructureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUserHierarchyStructureCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeUserHierarchyStructureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUserHierarchyStructureRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeUserHierarchyStructureResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeUserHierarchyStructureCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeUserHierarchyStructureCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeUserHierarchyStructureCommandOutput> {
    return deserializeAws_restJson1DescribeUserHierarchyStructureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
