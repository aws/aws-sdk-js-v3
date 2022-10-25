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
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  StartElasticsearchServiceSoftwareUpdateRequest,
  StartElasticsearchServiceSoftwareUpdateRequestFilterSensitiveLog,
  StartElasticsearchServiceSoftwareUpdateResponse,
  StartElasticsearchServiceSoftwareUpdateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand,
  serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand,
} from "../protocols/Aws_restJson1";

export interface StartElasticsearchServiceSoftwareUpdateCommandInput
  extends StartElasticsearchServiceSoftwareUpdateRequest {}
export interface StartElasticsearchServiceSoftwareUpdateCommandOutput
  extends StartElasticsearchServiceSoftwareUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Schedules a service software update for an Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, StartElasticsearchServiceSoftwareUpdateCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, StartElasticsearchServiceSoftwareUpdateCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new StartElasticsearchServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartElasticsearchServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link StartElasticsearchServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class StartElasticsearchServiceSoftwareUpdateCommand extends $Command<
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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

  constructor(readonly input: StartElasticsearchServiceSoftwareUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartElasticsearchServiceSoftwareUpdateCommandInput,
    StartElasticsearchServiceSoftwareUpdateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StartElasticsearchServiceSoftwareUpdateCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "StartElasticsearchServiceSoftwareUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartElasticsearchServiceSoftwareUpdateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartElasticsearchServiceSoftwareUpdateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartElasticsearchServiceSoftwareUpdateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> {
    return deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
