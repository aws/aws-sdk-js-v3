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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import {
  GetSystemTemplateRevisionsRequest,
  GetSystemTemplateRevisionsRequestFilterSensitiveLog,
  GetSystemTemplateRevisionsResponse,
  GetSystemTemplateRevisionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSystemTemplateRevisionsCommand,
  serializeAws_json1_1GetSystemTemplateRevisionsCommand,
} from "../protocols/Aws_json1_1";

export interface GetSystemTemplateRevisionsCommandInput extends GetSystemTemplateRevisionsRequest {}
export interface GetSystemTemplateRevisionsCommandOutput extends GetSystemTemplateRevisionsResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return
 *       the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemTemplateRevisionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemTemplateRevisionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetSystemTemplateRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSystemTemplateRevisionsCommandInput} for command's `input` shape.
 * @see {@link GetSystemTemplateRevisionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 */
export class GetSystemTemplateRevisionsCommand extends $Command<
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
  IoTThingsGraphClientResolvedConfig
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

  constructor(readonly input: GetSystemTemplateRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSystemTemplateRevisionsCommandInput, GetSystemTemplateRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSystemTemplateRevisionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetSystemTemplateRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSystemTemplateRevisionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSystemTemplateRevisionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSystemTemplateRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSystemTemplateRevisionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSystemTemplateRevisionsCommandOutput> {
    return deserializeAws_json1_1GetSystemTemplateRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
