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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import {
  ListVirtualClustersRequest,
  ListVirtualClustersRequestFilterSensitiveLog,
  ListVirtualClustersResponse,
  ListVirtualClustersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListVirtualClustersCommand,
  serializeAws_restJson1ListVirtualClustersCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListVirtualClustersCommand}.
 */
export interface ListVirtualClustersCommandInput extends ListVirtualClustersRequest {}
/**
 * The output of {@link ListVirtualClustersCommand}.
 */
export interface ListVirtualClustersCommandOutput extends ListVirtualClustersResponse, __MetadataBearer {}

/**
 * <p>Lists information about the specified virtual cluster. Virtual cluster is a managed
 *          entity on Amazon EMR on EKS. You can create, describe, list and delete virtual
 *          clusters. They do not consume any additional resource in your system. A single virtual
 *          cluster maps to a single Kubernetes namespace. Given this relationship, you can model
 *          virtual clusters the same way you model Kubernetes namespaces to meet your
 *          requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListVirtualClustersCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListVirtualClustersCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new ListVirtualClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualClustersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualClustersCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 */
export class ListVirtualClustersCommand extends $Command<
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
  EMRContainersClientResolvedConfig
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

  constructor(readonly input: ListVirtualClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualClustersCommandInput, ListVirtualClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVirtualClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "ListVirtualClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVirtualClustersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualClustersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVirtualClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVirtualClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualClustersCommandOutput> {
    return deserializeAws_restJson1ListVirtualClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
