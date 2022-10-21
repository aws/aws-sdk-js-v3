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

import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import {
  ListFHIRExportJobsRequest,
  ListFHIRExportJobsRequestFilterSensitiveLog,
  ListFHIRExportJobsResponse,
  ListFHIRExportJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListFHIRExportJobsCommand,
  serializeAws_json1_0ListFHIRExportJobsCommand,
} from "../protocols/Aws_json1_0";

export interface ListFHIRExportJobsCommandInput extends ListFHIRExportJobsRequest {}
export interface ListFHIRExportJobsCommandOutput extends ListFHIRExportJobsResponse, __MetadataBearer {}

/**
 * <p>
 *             Lists all FHIR export jobs associated with an account and their statuses.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRExportJobsCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRExportJobsCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new ListFHIRExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFHIRExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListFHIRExportJobsCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 */
export class ListFHIRExportJobsCommand extends $Command<
  ListFHIRExportJobsCommandInput,
  ListFHIRExportJobsCommandOutput,
  HealthLakeClientResolvedConfig
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

  constructor(readonly input: ListFHIRExportJobsCommandInput) {
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
  ): Handler<ListFHIRExportJobsCommandInput, ListFHIRExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFHIRExportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "ListFHIRExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFHIRExportJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFHIRExportJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFHIRExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListFHIRExportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFHIRExportJobsCommandOutput> {
    return deserializeAws_json1_0ListFHIRExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
