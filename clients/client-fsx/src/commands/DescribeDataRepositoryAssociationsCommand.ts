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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  DescribeDataRepositoryAssociationsRequest,
  DescribeDataRepositoryAssociationsRequestFilterSensitiveLog,
  DescribeDataRepositoryAssociationsResponse,
  DescribeDataRepositoryAssociationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDataRepositoryAssociationsCommand,
  serializeAws_json1_1DescribeDataRepositoryAssociationsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeDataRepositoryAssociationsCommandInput extends DescribeDataRepositoryAssociationsRequest {}
export interface DescribeDataRepositoryAssociationsCommandOutput
  extends DescribeDataRepositoryAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache
 *             data repository associations, if one or more <code>AssociationIds</code> values
 *             are provided in the request, or if filters are used in the request. Data repository
 *             associations are supported only for Amazon FSx for Lustre file systems with the
 *             <code>Persistent_2</code> deployment type and for Amazon File Cache resources.</p>
 *          <p>You can use filters to narrow the response to include just data repository
 *             associations for specific file systems (use the <code>file-system-id</code> filter with
 *             the ID of the file system) or caches (use the <code>file-cache-id</code> filter with
 *             the ID of the cache), or data repository associations for a specific repository type
 *             (use the <code>data-repository-type</code> filter with a value of <code>S3</code>
 *             or <code>NFS</code>). If you don't use filters, the response returns all data
 *             repository associations owned by your Amazon Web Services account in the Amazon Web Services Region
 *             of the endpoint that you're calling.</p>
 *          <p>When retrieving all data repository associations, you can paginate the response by using
 *             the optional <code>MaxResults</code> parameter to limit the number of data repository associations
 *             returned in a response. If more data repository associations remain, a
 *             <code>NextToken</code> value is returned in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeDataRepositoryAssociationsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeDataRepositoryAssociationsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeDataRepositoryAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataRepositoryAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDataRepositoryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class DescribeDataRepositoryAssociationsCommand extends $Command<
  DescribeDataRepositoryAssociationsCommandInput,
  DescribeDataRepositoryAssociationsCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: DescribeDataRepositoryAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataRepositoryAssociationsCommandInput, DescribeDataRepositoryAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataRepositoryAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeDataRepositoryAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDataRepositoryAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDataRepositoryAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDataRepositoryAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDataRepositoryAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataRepositoryAssociationsCommandOutput> {
    return deserializeAws_json1_1DescribeDataRepositoryAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
