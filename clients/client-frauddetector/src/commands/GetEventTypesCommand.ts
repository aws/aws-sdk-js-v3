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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import {
  GetEventTypesRequest,
  GetEventTypesRequestFilterSensitiveLog,
  GetEventTypesResult,
  GetEventTypesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetEventTypesCommand,
  serializeAws_json1_1GetEventTypesCommand,
} from "../protocols/Aws_json1_1";

export interface GetEventTypesCommandInput extends GetEventTypesRequest {}
export interface GetEventTypesCommandOutput extends GetEventTypesResult, __MetadataBearer {}

/**
 * <p>Gets all event types or a specific event type if name is provided. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
 *          To get the next page results, provide the pagination token from the
 *             <code>GetEventTypesResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventTypesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventTypesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetEventTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventTypesCommandInput} for command's `input` shape.
 * @see {@link GetEventTypesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 */
export class GetEventTypesCommand extends $Command<
  GetEventTypesCommandInput,
  GetEventTypesCommandOutput,
  FraudDetectorClientResolvedConfig
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

  constructor(readonly input: GetEventTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEventTypesCommandInput, GetEventTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetEventTypesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetEventTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEventTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetEventTypesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEventTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEventTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventTypesCommandOutput> {
    return deserializeAws_json1_1GetEventTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
