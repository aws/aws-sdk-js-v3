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
  GetSnowballUsageRequest,
  GetSnowballUsageRequestFilterSensitiveLog,
  GetSnowballUsageResult,
  GetSnowballUsageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSnowballUsageCommand,
  serializeAws_json1_1GetSnowballUsageCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface GetSnowballUsageCommandInput extends GetSnowballUsageRequest {}
export interface GetSnowballUsageCommandOutput extends GetSnowballUsageResult, __MetadataBearer {}

/**
 * <p>Returns information about the Snow Family service limit for your account, and also the
 *       number of Snow devices your account has in use.</p>
 *
 *          <p>The default service limit for the number of Snow devices that you can have at one time
 *       is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSnowballUsageCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSnowballUsageCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetSnowballUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSnowballUsageCommandInput} for command's `input` shape.
 * @see {@link GetSnowballUsageCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class GetSnowballUsageCommand extends $Command<
  GetSnowballUsageCommandInput,
  GetSnowballUsageCommandOutput,
  SnowballClientResolvedConfig
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

  constructor(readonly input: GetSnowballUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSnowballUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetSnowballUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSnowballUsageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSnowballUsageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSnowballUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSnowballUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSnowballUsageCommandOutput> {
    return deserializeAws_json1_1GetSnowballUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
