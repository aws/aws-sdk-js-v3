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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  DescribePlaceIndexRequest,
  DescribePlaceIndexRequestFilterSensitiveLog,
  DescribePlaceIndexResponse,
  DescribePlaceIndexResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribePlaceIndexCommand,
  serializeAws_restJson1DescribePlaceIndexCommand,
} from "../protocols/Aws_restJson1";

export interface DescribePlaceIndexCommandInput extends DescribePlaceIndexRequest {}
export interface DescribePlaceIndexCommandOutput extends DescribePlaceIndexResponse, __MetadataBearer {}

/**
 * <p>Retrieves the place index resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DescribePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class DescribePlaceIndexCommand extends $Command<
  DescribePlaceIndexCommandInput,
  DescribePlaceIndexCommandOutput,
  LocationClientResolvedConfig
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

  constructor(readonly input: DescribePlaceIndexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePlaceIndexCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "DescribePlaceIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePlaceIndexRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePlaceIndexResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePlaceIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribePlaceIndexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlaceIndexCommandOutput> {
    return deserializeAws_restJson1DescribePlaceIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
