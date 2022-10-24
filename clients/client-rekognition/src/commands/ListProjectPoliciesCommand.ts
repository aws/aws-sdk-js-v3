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
  ListProjectPoliciesRequest,
  ListProjectPoliciesRequestFilterSensitiveLog,
  ListProjectPoliciesResponse,
  ListProjectPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListProjectPoliciesCommand,
  serializeAws_json1_1ListProjectPoliciesCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface ListProjectPoliciesCommandInput extends ListProjectPoliciesRequest {}
export interface ListProjectPoliciesCommandOutput extends ListProjectPoliciesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the project policies attached to a project.</p>
 *          <p>To attach a project policy to a project, call <a>PutProjectPolicy</a>. To remove a project policy from a project, call <a>DeleteProjectPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListProjectPoliciesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListProjectPoliciesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new ListProjectPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListProjectPoliciesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class ListProjectPoliciesCommand extends $Command<
  ListProjectPoliciesCommandInput,
  ListProjectPoliciesCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: ListProjectPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProjectPoliciesCommandInput, ListProjectPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProjectPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "ListProjectPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProjectPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListProjectPoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProjectPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProjectPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProjectPoliciesCommandOutput> {
    return deserializeAws_json1_1ListProjectPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
