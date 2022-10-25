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
  ListPackageImportJobsRequest,
  ListPackageImportJobsRequestFilterSensitiveLog,
  ListPackageImportJobsResponse,
  ListPackageImportJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1ListPackageImportJobsCommand,
  serializeAws_restJson1ListPackageImportJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListPackageImportJobsCommandInput extends ListPackageImportJobsRequest {}
export interface ListPackageImportJobsCommandOutput extends ListPackageImportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of package import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListPackageImportJobsCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListPackageImportJobsCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const command = new ListPackageImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackageImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListPackageImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 */
export class ListPackageImportJobsCommand extends $Command<
  ListPackageImportJobsCommandInput,
  ListPackageImportJobsCommandOutput,
  PanoramaClientResolvedConfig
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

  constructor(readonly input: ListPackageImportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPackageImportJobsCommandInput, ListPackageImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPackageImportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "ListPackageImportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackageImportJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPackageImportJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPackageImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackageImportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackageImportJobsCommandOutput> {
    return deserializeAws_restJson1ListPackageImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
