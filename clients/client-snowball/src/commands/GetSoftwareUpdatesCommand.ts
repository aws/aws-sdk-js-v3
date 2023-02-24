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
  GetSoftwareUpdatesRequest,
  GetSoftwareUpdatesRequestFilterSensitiveLog,
  GetSoftwareUpdatesResult,
  GetSoftwareUpdatesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSoftwareUpdatesCommand,
  serializeAws_json1_1GetSoftwareUpdatesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface GetSoftwareUpdatesCommandInput extends GetSoftwareUpdatesRequest {}
export interface GetSoftwareUpdatesCommandOutput extends GetSoftwareUpdatesResult, __MetadataBearer {}

/**
 * <p>Returns an Amazon S3 presigned URL for an update file associated with a specified
 *         <code>JobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSoftwareUpdatesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSoftwareUpdatesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetSoftwareUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSoftwareUpdatesCommandInput} for command's `input` shape.
 * @see {@link GetSoftwareUpdatesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class GetSoftwareUpdatesCommand extends $Command<
  GetSoftwareUpdatesCommandInput,
  GetSoftwareUpdatesCommandOutput,
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

  constructor(readonly input: GetSoftwareUpdatesCommandInput) {
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
  ): Handler<GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSoftwareUpdatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetSoftwareUpdatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSoftwareUpdatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSoftwareUpdatesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSoftwareUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSoftwareUpdatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSoftwareUpdatesCommandOutput> {
    return deserializeAws_json1_1GetSoftwareUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
