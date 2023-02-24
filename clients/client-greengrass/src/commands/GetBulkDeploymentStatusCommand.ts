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
  GetBulkDeploymentStatusRequest,
  GetBulkDeploymentStatusRequestFilterSensitiveLog,
  GetBulkDeploymentStatusResponse,
  GetBulkDeploymentStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBulkDeploymentStatusCommand,
  serializeAws_restJson1GetBulkDeploymentStatusCommand,
} from "../protocols/Aws_restJson1";

export interface GetBulkDeploymentStatusCommandInput extends GetBulkDeploymentStatusRequest {}
export interface GetBulkDeploymentStatusCommandOutput extends GetBulkDeploymentStatusResponse, __MetadataBearer {}

/**
 * Returns the status of a bulk deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetBulkDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetBulkDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetBulkDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBulkDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetBulkDeploymentStatusCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class GetBulkDeploymentStatusCommand extends $Command<
  GetBulkDeploymentStatusCommandInput,
  GetBulkDeploymentStatusCommandOutput,
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

  constructor(readonly input: GetBulkDeploymentStatusCommandInput) {
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
  ): Handler<GetBulkDeploymentStatusCommandInput, GetBulkDeploymentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBulkDeploymentStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetBulkDeploymentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBulkDeploymentStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBulkDeploymentStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBulkDeploymentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBulkDeploymentStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBulkDeploymentStatusCommandOutput> {
    return deserializeAws_restJson1GetBulkDeploymentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
