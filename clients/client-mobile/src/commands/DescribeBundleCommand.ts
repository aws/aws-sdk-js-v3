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

import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import {
  DescribeBundleRequest,
  DescribeBundleRequestFilterSensitiveLog,
  DescribeBundleResult,
  DescribeBundleResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBundleCommand,
  serializeAws_restJson1DescribeBundleCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeBundleCommandInput extends DescribeBundleRequest {}
export interface DescribeBundleCommandOutput extends DescribeBundleResult, __MetadataBearer {}

/**
 * <p>
 *             Get the bundle details for the requested bundle id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DescribeBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DescribeBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new DescribeBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBundleCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for MobileClient's `config` shape.
 *
 */
export class DescribeBundleCommand extends $Command<
  DescribeBundleCommandInput,
  DescribeBundleCommandOutput,
  MobileClientResolvedConfig
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

  constructor(readonly input: DescribeBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBundleCommandInput, DescribeBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBundleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "DescribeBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBundleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeBundleResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBundleCommandOutput> {
    return deserializeAws_restJson1DescribeBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
