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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetContainerAPIMetadataRequest,
  GetContainerAPIMetadataRequestFilterSensitiveLog,
  GetContainerAPIMetadataResult,
  GetContainerAPIMetadataResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetContainerAPIMetadataCommand,
  serializeAws_json1_1GetContainerAPIMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface GetContainerAPIMetadataCommandInput extends GetContainerAPIMetadataRequest {}
export interface GetContainerAPIMetadataCommandOutput extends GetContainerAPIMetadataResult, __MetadataBearer {}

/**
 * <p>Returns information about Amazon Lightsail containers, such as the current version of the
 *       Lightsail Control (lightsailctl) plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerAPIMetadataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerAPIMetadataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerAPIMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerAPIMetadataCommandInput} for command's `input` shape.
 * @see {@link GetContainerAPIMetadataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetContainerAPIMetadataCommand extends $Command<
  GetContainerAPIMetadataCommandInput,
  GetContainerAPIMetadataCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: GetContainerAPIMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerAPIMetadataCommandInput, GetContainerAPIMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContainerAPIMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerAPIMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerAPIMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContainerAPIMetadataResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerAPIMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerAPIMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContainerAPIMetadataCommandOutput> {
    return deserializeAws_json1_1GetContainerAPIMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
