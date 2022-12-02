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
  DeleteVpcEndpointRequest,
  DeleteVpcEndpointRequestFilterSensitiveLog,
  DeleteVpcEndpointResponse,
  DeleteVpcEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import {
  deserializeAws_json1_0DeleteVpcEndpointCommand,
  serializeAws_json1_0DeleteVpcEndpointCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteVpcEndpointCommandInput extends DeleteVpcEndpointRequest {}
export interface DeleteVpcEndpointCommandOutput extends DeleteVpcEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see
 *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, DeleteVpcEndpointCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, DeleteVpcEndpointCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const command = new DeleteVpcEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 */
export class DeleteVpcEndpointCommand extends $Command<
  DeleteVpcEndpointCommandInput,
  DeleteVpcEndpointCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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

  constructor(readonly input: DeleteVpcEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVpcEndpointCommandInput, DeleteVpcEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpcEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "DeleteVpcEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcEndpointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVpcEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteVpcEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVpcEndpointCommandOutput> {
    return deserializeAws_json1_0DeleteVpcEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
