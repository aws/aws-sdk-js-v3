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
  TerminateTargetInstancesRequest,
  TerminateTargetInstancesRequestFilterSensitiveLog,
  TerminateTargetInstancesResponse,
  TerminateTargetInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1TerminateTargetInstancesCommand,
  serializeAws_restJson1TerminateTargetInstancesCommand,
} from "../protocols/Aws_restJson1";

export interface TerminateTargetInstancesCommandInput extends TerminateTargetInstancesRequest {}
export interface TerminateTargetInstancesCommandOutput extends TerminateTargetInstancesResponse, __MetadataBearer {}

/**
 * <p>Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, TerminateTargetInstancesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, TerminateTargetInstancesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new TerminateTargetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateTargetInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateTargetInstancesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class TerminateTargetInstancesCommand extends $Command<
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
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

  constructor(readonly input: TerminateTargetInstancesCommandInput) {
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
  ): Handler<TerminateTargetInstancesCommandInput, TerminateTargetInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateTargetInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "TerminateTargetInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateTargetInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TerminateTargetInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateTargetInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TerminateTargetInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateTargetInstancesCommandOutput> {
    return deserializeAws_restJson1TerminateTargetInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
