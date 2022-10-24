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
  DescribeDimensionKeysRequest,
  DescribeDimensionKeysRequestFilterSensitiveLog,
  DescribeDimensionKeysResponse,
  DescribeDimensionKeysResponseFilterSensitiveLog,
} from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  deserializeAws_json1_1DescribeDimensionKeysCommand,
  serializeAws_json1_1DescribeDimensionKeysCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeDimensionKeysCommandInput extends DescribeDimensionKeysRequest {}
export interface DescribeDimensionKeysCommandOutput extends DescribeDimensionKeysResponse, __MetadataBearer {}

/**
 * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric.
 *       </p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *         only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, DescribeDimensionKeysCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, DescribeDimensionKeysCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new DescribeDimensionKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDimensionKeysCommandInput} for command's `input` shape.
 * @see {@link DescribeDimensionKeysCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 */
export class DescribeDimensionKeysCommand extends $Command<
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
  PIClientResolvedConfig
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

  constructor(readonly input: DescribeDimensionKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDimensionKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "DescribeDimensionKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDimensionKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDimensionKeysResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDimensionKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDimensionKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDimensionKeysCommandOutput> {
    return deserializeAws_json1_1DescribeDimensionKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
