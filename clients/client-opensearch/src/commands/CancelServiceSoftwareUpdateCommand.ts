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
  CancelServiceSoftwareUpdateRequest,
  CancelServiceSoftwareUpdateRequestFilterSensitiveLog,
  CancelServiceSoftwareUpdateResponse,
  CancelServiceSoftwareUpdateResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1CancelServiceSoftwareUpdateCommand,
  serializeAws_restJson1CancelServiceSoftwareUpdateCommand,
} from "../protocols/Aws_restJson1";

export interface CancelServiceSoftwareUpdateCommandInput extends CancelServiceSoftwareUpdateRequest {}
export interface CancelServiceSoftwareUpdateCommandOutput
  extends CancelServiceSoftwareUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a scheduled service software update for an Amazon OpenSearch Service domain. You can
 *    only perform this operation before the <code>AutomatedUpdateDate</code> and when the domain's
 *     <code>UpdateStatus</code> is <code>PENDING_UPDATE</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CancelServiceSoftwareUpdateCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CancelServiceSoftwareUpdateCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new CancelServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link CancelServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class CancelServiceSoftwareUpdateCommand extends $Command<
  CancelServiceSoftwareUpdateCommandInput,
  CancelServiceSoftwareUpdateCommandOutput,
  OpenSearchClientResolvedConfig
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

  constructor(readonly input: CancelServiceSoftwareUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelServiceSoftwareUpdateCommandInput, CancelServiceSoftwareUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelServiceSoftwareUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "CancelServiceSoftwareUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelServiceSoftwareUpdateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelServiceSoftwareUpdateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelServiceSoftwareUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelServiceSoftwareUpdateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelServiceSoftwareUpdateCommandOutput> {
    return deserializeAws_restJson1CancelServiceSoftwareUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
