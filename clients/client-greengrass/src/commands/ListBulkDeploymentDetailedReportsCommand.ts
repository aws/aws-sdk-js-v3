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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  ListBulkDeploymentDetailedReportsRequest,
  ListBulkDeploymentDetailedReportsRequestFilterSensitiveLog,
  ListBulkDeploymentDetailedReportsResponse,
  ListBulkDeploymentDetailedReportsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand,
  serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBulkDeploymentDetailedReportsCommandInput extends ListBulkDeploymentDetailedReportsRequest {}
export interface ListBulkDeploymentDetailedReportsCommandOutput
  extends ListBulkDeploymentDetailedReportsResponse,
    __MetadataBearer {}

/**
 * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListBulkDeploymentDetailedReportsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListBulkDeploymentDetailedReportsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListBulkDeploymentDetailedReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBulkDeploymentDetailedReportsCommandInput} for command's `input` shape.
 * @see {@link ListBulkDeploymentDetailedReportsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class ListBulkDeploymentDetailedReportsCommand extends $Command<
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
  GreengrassClientResolvedConfig
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

  constructor(readonly input: ListBulkDeploymentDetailedReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBulkDeploymentDetailedReportsCommandInput, ListBulkDeploymentDetailedReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBulkDeploymentDetailedReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListBulkDeploymentDetailedReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBulkDeploymentDetailedReportsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListBulkDeploymentDetailedReportsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListBulkDeploymentDetailedReportsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBulkDeploymentDetailedReportsCommandOutput> {
    return deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
