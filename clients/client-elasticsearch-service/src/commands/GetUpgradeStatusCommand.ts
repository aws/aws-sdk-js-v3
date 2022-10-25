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
  GetUpgradeStatusRequest,
  GetUpgradeStatusRequestFilterSensitiveLog,
  GetUpgradeStatusResponse,
  GetUpgradeStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetUpgradeStatusCommand,
  serializeAws_restJson1GetUpgradeStatusCommand,
} from "../protocols/Aws_restJson1";

export interface GetUpgradeStatusCommandInput extends GetUpgradeStatusRequest {}
export interface GetUpgradeStatusCommandOutput extends GetUpgradeStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetUpgradeStatusCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetUpgradeStatusCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new GetUpgradeStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUpgradeStatusCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class GetUpgradeStatusCommand extends $Command<
  GetUpgradeStatusCommandInput,
  GetUpgradeStatusCommandOutput,
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

  constructor(readonly input: GetUpgradeStatusCommandInput) {
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
  ): Handler<GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUpgradeStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "GetUpgradeStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUpgradeStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUpgradeStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUpgradeStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUpgradeStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUpgradeStatusCommandOutput> {
    return deserializeAws_restJson1GetUpgradeStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
