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
  ListRobotApplicationsRequest,
  ListRobotApplicationsRequestFilterSensitiveLog,
  ListRobotApplicationsResponse,
  ListRobotApplicationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRobotApplicationsCommand,
  serializeAws_restJson1ListRobotApplicationsCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

export interface ListRobotApplicationsCommandInput extends ListRobotApplicationsRequest {}
export interface ListRobotApplicationsCommandOutput extends ListRobotApplicationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of robot application. You can optionally provide filters to retrieve
 *          specific robot applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListRobotApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListRobotApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListRobotApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRobotApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListRobotApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 */
export class ListRobotApplicationsCommand extends $Command<
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
  RoboMakerClientResolvedConfig
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

  constructor(readonly input: ListRobotApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRobotApplicationsCommandInput, ListRobotApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRobotApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListRobotApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRobotApplicationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRobotApplicationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRobotApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRobotApplicationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRobotApplicationsCommandOutput> {
    return deserializeAws_restJson1ListRobotApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
