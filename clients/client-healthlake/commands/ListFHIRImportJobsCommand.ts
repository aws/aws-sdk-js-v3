import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { ListFHIRImportJobsRequest, ListFHIRImportJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ListFHIRImportJobsCommand,
  serializeAws_json1_0ListFHIRImportJobsCommand,
} from "../protocols/Aws_json1_0";
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

export interface ListFHIRImportJobsCommandInput extends ListFHIRImportJobsRequest {}
export interface ListFHIRImportJobsCommandOutput extends ListFHIRImportJobsResponse, __MetadataBearer {}

/**
 * <p>
 *             Lists all FHIR import jobs associated with an account and their statuses.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRImportJobsCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRImportJobsCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new ListFHIRImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFHIRImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListFHIRImportJobsCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFHIRImportJobsCommand extends $Command<
  ListFHIRImportJobsCommandInput,
  ListFHIRImportJobsCommandOutput,
  HealthLakeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFHIRImportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFHIRImportJobsCommandInput, ListFHIRImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "ListFHIRImportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFHIRImportJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFHIRImportJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFHIRImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListFHIRImportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFHIRImportJobsCommandOutput> {
    return deserializeAws_json1_0ListFHIRImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
