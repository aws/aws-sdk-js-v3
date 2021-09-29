import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { ListEntitiesDetectionV2JobsRequest, ListEntitiesDetectionV2JobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand,
  serializeAws_json1_1ListEntitiesDetectionV2JobsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListEntitiesDetectionV2JobsCommandInput extends ListEntitiesDetectionV2JobsRequest {}
export interface ListEntitiesDetectionV2JobsCommandOutput
  extends ListEntitiesDetectionV2JobsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of medical entity detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListEntitiesDetectionV2JobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListEntitiesDetectionV2JobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new ListEntitiesDetectionV2JobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitiesDetectionV2JobsCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesDetectionV2JobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEntitiesDetectionV2JobsCommand extends $Command<
  ListEntitiesDetectionV2JobsCommandInput,
  ListEntitiesDetectionV2JobsCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEntitiesDetectionV2JobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEntitiesDetectionV2JobsCommandInput, ListEntitiesDetectionV2JobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "ListEntitiesDetectionV2JobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEntitiesDetectionV2JobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEntitiesDetectionV2JobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEntitiesDetectionV2JobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEntitiesDetectionV2JobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEntitiesDetectionV2JobsCommandOutput> {
    return deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
