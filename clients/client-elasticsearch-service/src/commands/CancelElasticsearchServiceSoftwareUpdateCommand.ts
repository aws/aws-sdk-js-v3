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
  CancelElasticsearchServiceSoftwareUpdateRequest,
  CancelElasticsearchServiceSoftwareUpdateRequestFilterSensitiveLog,
  CancelElasticsearchServiceSoftwareUpdateResponse,
  CancelElasticsearchServiceSoftwareUpdateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand,
  serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand,
} from "../protocols/Aws_restJson1";

export interface CancelElasticsearchServiceSoftwareUpdateCommandInput
  extends CancelElasticsearchServiceSoftwareUpdateRequest {}
export interface CancelElasticsearchServiceSoftwareUpdateCommandOutput
  extends CancelElasticsearchServiceSoftwareUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CancelElasticsearchServiceSoftwareUpdateCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CancelElasticsearchServiceSoftwareUpdateCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new CancelElasticsearchServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelElasticsearchServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link CancelElasticsearchServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class CancelElasticsearchServiceSoftwareUpdateCommand extends $Command<
  CancelElasticsearchServiceSoftwareUpdateCommandInput,
  CancelElasticsearchServiceSoftwareUpdateCommandOutput,
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

  constructor(readonly input: CancelElasticsearchServiceSoftwareUpdateCommandInput) {
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
    CancelElasticsearchServiceSoftwareUpdateCommandInput,
    CancelElasticsearchServiceSoftwareUpdateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CancelElasticsearchServiceSoftwareUpdateCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "CancelElasticsearchServiceSoftwareUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelElasticsearchServiceSoftwareUpdateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelElasticsearchServiceSoftwareUpdateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> {
    return deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
