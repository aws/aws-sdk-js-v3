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

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import {
  GetClusterInput,
  GetClusterInputFilterSensitiveLog,
  GetClusterOutput,
  GetClusterOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetClusterCommand,
  serializeAws_restJson1GetClusterCommand,
} from "../protocols/Aws_restJson1";

export interface GetClusterCommandInput extends GetClusterInput {}
export interface GetClusterCommandOutput extends GetClusterOutput, __MetadataBearer {}

/**
 * <p>Returns information about a specific Elastic DocumentDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, GetClusterCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, GetClusterCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const command = new GetClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClusterCommandInput} for command's `input` shape.
 * @see {@link GetClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 */
export class GetClusterCommand extends $Command<
  GetClusterCommandInput,
  GetClusterCommandOutput,
  DocDBElasticClientResolvedConfig
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

  constructor(readonly input: GetClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBElasticClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClusterCommandInput, GetClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBElasticClient";
    const commandName = "GetClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClusterInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetClusterOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClusterCommandOutput> {
    return deserializeAws_restJson1GetClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
