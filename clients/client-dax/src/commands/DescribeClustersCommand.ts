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

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import {
  DescribeClustersRequest,
  DescribeClustersRequestFilterSensitiveLog,
  DescribeClustersResponse,
  DescribeClustersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeClustersCommand,
  serializeAws_json1_1DescribeClustersCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeClustersCommandInput extends DescribeClustersRequest {}
export interface DescribeClustersCommandOutput extends DescribeClustersResponse, __MetadataBearer {}

/**
 * <p>Returns information about all provisioned DAX clusters if no cluster identifier
 *             is specified, or about a specific DAX cluster if a cluster identifier is
 *             supplied.</p>
 *         <p>If the cluster is in the CREATING state, only cluster level information will be
 *             displayed until all of the nodes are successfully provisioned.</p>
 *         <p>If the cluster is in the DELETING state, only cluster level information will be
 *             displayed.</p>
 *         <p>If nodes are currently being added to the DAX cluster, node endpoint information
 *             and creation time for the additional nodes will not be displayed until they are
 *             completely provisioned. When the DAX cluster state is <i>available</i>,
 *             the cluster is ready for use.</p>
 *         <p>If nodes are currently being removed from the DAX cluster, no endpoint
 *             information for the removed nodes is displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeClustersCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeClustersCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 */
export class DescribeClustersCommand extends $Command<
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
  DAXClientResolvedConfig
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

  constructor(readonly input: DescribeClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "DescribeClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClustersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeClustersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClustersCommandOutput> {
    return deserializeAws_json1_1DescribeClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
