import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListWorkforcesRequest, ListWorkforcesResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListWorkforcesCommand,
  serializeAws_json1_1ListWorkforcesCommand,
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

export interface ListWorkforcesCommandInput extends ListWorkforcesRequest {}
export interface ListWorkforcesCommandOutput extends ListWorkforcesResponse, __MetadataBearer {}

/**
 * <p>Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only
 *            have one private workforce per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListWorkforcesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListWorkforcesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListWorkforcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkforcesCommandInput} for command's `input` shape.
 * @see {@link ListWorkforcesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListWorkforcesCommand extends $Command<
  ListWorkforcesCommandInput,
  ListWorkforcesCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkforcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkforcesCommandInput, ListWorkforcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListWorkforcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkforcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkforcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkforcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListWorkforcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkforcesCommandOutput> {
    return deserializeAws_json1_1ListWorkforcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
