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
  ListDeploymentJobsRequest,
  ListDeploymentJobsRequestFilterSensitiveLog,
  ListDeploymentJobsResponse,
  ListDeploymentJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDeploymentJobsCommand,
  serializeAws_restJson1ListDeploymentJobsCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

export interface ListDeploymentJobsCommandInput extends ListDeploymentJobsRequest {}
export interface ListDeploymentJobsCommandOutput extends ListDeploymentJobsResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p>
 *          <important>
 *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListDeploymentJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListDeploymentJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListDeploymentJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentJobsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 */
export class ListDeploymentJobsCommand extends $Command<
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput,
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

  constructor(readonly input: ListDeploymentJobsCommandInput) {
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
  ): Handler<ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeploymentJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListDeploymentJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDeploymentJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeploymentJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentJobsCommandOutput> {
    return deserializeAws_restJson1ListDeploymentJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
