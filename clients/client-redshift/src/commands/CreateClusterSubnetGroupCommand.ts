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
  CreateClusterSubnetGroupMessage,
  CreateClusterSubnetGroupMessageFilterSensitiveLog,
  CreateClusterSubnetGroupResult,
  CreateClusterSubnetGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateClusterSubnetGroupCommand,
  serializeAws_queryCreateClusterSubnetGroupCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface CreateClusterSubnetGroupCommandInput extends CreateClusterSubnetGroupMessage {}
export interface CreateClusterSubnetGroupCommandOutput extends CreateClusterSubnetGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more
 *             subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating
 *             Amazon Redshift subnet group.</p>
 *         <p>
 * For information about subnet groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class CreateClusterSubnetGroupCommand extends $Command<
  CreateClusterSubnetGroupCommandInput,
  CreateClusterSubnetGroupCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: CreateClusterSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClusterSubnetGroupCommandInput, CreateClusterSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateClusterSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateClusterSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClusterSubnetGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateClusterSubnetGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClusterSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateClusterSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClusterSubnetGroupCommandOutput> {
    return deserializeAws_queryCreateClusterSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
