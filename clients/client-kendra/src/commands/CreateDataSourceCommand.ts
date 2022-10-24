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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  CreateDataSourceRequest,
  CreateDataSourceRequestFilterSensitiveLog,
  CreateDataSourceResponse,
  CreateDataSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataSourceCommand,
  serializeAws_json1_1CreateDataSourceCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDataSourceCommandInput extends CreateDataSourceRequest {}
export interface CreateDataSourceCommandOutput extends CreateDataSourceResponse, __MetadataBearer {}

/**
 * <p>Creates a data source connector that you want to use with an Amazon Kendra
 *       index.</p>
 *          <p>You specify a name, data source connector type and description for your data source. You
 *       also specify configuration information for the data source connector.</p>
 *          <p>
 *             <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the
 *       data source was successfully created. Otherwise, an exception is raised.</p>
 *          <p>Amazon S3 and <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-custom.html">custom</a> data sources are the only
 *       supported data sources in the Amazon Web Services GovCloud (US-West) region.</p>
 *          <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python
 *         SDK</a>. For an example of creating an index and data source using the Java SDK, see
 *         <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java
 *         SDK</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateDataSourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateDataSourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class CreateDataSourceCommand extends $Command<
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
  KendraClientResolvedConfig
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

  constructor(readonly input: CreateDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSourceCommandInput, CreateDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "CreateDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataSourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceCommandOutput> {
    return deserializeAws_json1_1CreateDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
