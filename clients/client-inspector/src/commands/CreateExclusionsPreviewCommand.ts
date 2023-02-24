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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import {
  CreateExclusionsPreviewRequest,
  CreateExclusionsPreviewRequestFilterSensitiveLog,
  CreateExclusionsPreviewResponse,
  CreateExclusionsPreviewResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateExclusionsPreviewCommand,
  serializeAws_json1_1CreateExclusionsPreviewCommand,
} from "../protocols/Aws_json1_1";

export interface CreateExclusionsPreviewCommandInput extends CreateExclusionsPreviewRequest {}
export interface CreateExclusionsPreviewCommandOutput extends CreateExclusionsPreviewResponse, __MetadataBearer {}

/**
 * <p>Starts the generation of an exclusions preview for the specified assessment template.
 *          The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can
 *          detect before it runs the assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateExclusionsPreviewCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateExclusionsPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExclusionsPreviewCommandInput} for command's `input` shape.
 * @see {@link CreateExclusionsPreviewCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class CreateExclusionsPreviewCommand extends $Command<
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput,
  InspectorClientResolvedConfig
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

  constructor(readonly input: CreateExclusionsPreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExclusionsPreviewCommandInput, CreateExclusionsPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExclusionsPreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "CreateExclusionsPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExclusionsPreviewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateExclusionsPreviewResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateExclusionsPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateExclusionsPreviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExclusionsPreviewCommandOutput> {
    return deserializeAws_json1_1CreateExclusionsPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
