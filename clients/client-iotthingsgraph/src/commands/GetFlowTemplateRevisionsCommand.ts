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
  GetFlowTemplateRevisionsRequest,
  GetFlowTemplateRevisionsRequestFilterSensitiveLog,
  GetFlowTemplateRevisionsResponse,
  GetFlowTemplateRevisionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetFlowTemplateRevisionsCommand,
  serializeAws_json1_1GetFlowTemplateRevisionsCommand,
} from "../protocols/Aws_json1_1";

export interface GetFlowTemplateRevisionsCommandInput extends GetFlowTemplateRevisionsRequest {}
export interface GetFlowTemplateRevisionsCommandOutput extends GetFlowTemplateRevisionsResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated,
 *       this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetFlowTemplateRevisionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetFlowTemplateRevisionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetFlowTemplateRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFlowTemplateRevisionsCommandInput} for command's `input` shape.
 * @see {@link GetFlowTemplateRevisionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 */
export class GetFlowTemplateRevisionsCommand extends $Command<
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
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

  constructor(readonly input: GetFlowTemplateRevisionsCommandInput) {
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
  ): Handler<GetFlowTemplateRevisionsCommandInput, GetFlowTemplateRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFlowTemplateRevisionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetFlowTemplateRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFlowTemplateRevisionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetFlowTemplateRevisionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFlowTemplateRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFlowTemplateRevisionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFlowTemplateRevisionsCommandOutput> {
    return deserializeAws_json1_1GetFlowTemplateRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
