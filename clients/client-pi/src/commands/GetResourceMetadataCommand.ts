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
  GetResourceMetadataRequest,
  GetResourceMetadataRequestFilterSensitiveLog,
  GetResourceMetadataResponse,
  GetResourceMetadataResponseFilterSensitiveLog,
} from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  deserializeAws_json1_1GetResourceMetadataCommand,
  serializeAws_json1_1GetResourceMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface GetResourceMetadataCommandInput extends GetResourceMetadataRequest {}
export interface GetResourceMetadataCommandOutput extends GetResourceMetadataResponse, __MetadataBearer {}

/**
 * <p>Retrieve the metadata for different features. For example, the metadata might indicate
 *             that a feature is turned on or off on a specific DB instance.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetResourceMetadataCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetResourceMetadataCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new GetResourceMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceMetadataCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetadataCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 */
export class GetResourceMetadataCommand extends $Command<
  GetResourceMetadataCommandInput,
  GetResourceMetadataCommandOutput,
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

  constructor(readonly input: GetResourceMetadataCommandInput) {
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
  ): Handler<GetResourceMetadataCommandInput, GetResourceMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "GetResourceMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourceMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourceMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceMetadataCommandOutput> {
    return deserializeAws_json1_1GetResourceMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
