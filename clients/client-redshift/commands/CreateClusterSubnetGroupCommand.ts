import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterSubnetGroupMessage, CreateClusterSubnetGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateClusterSubnetGroupCommand,
  serializeAws_queryCreateClusterSubnetGroupCommand,
} from "../protocols/Aws_query";
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

export type CreateClusterSubnetGroupCommandInput = CreateClusterSubnetGroupMessage;
export type CreateClusterSubnetGroupCommandOutput = CreateClusterSubnetGroupResult & __MetadataBearer;

/**
 * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more
 *             subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating
 *             Amazon Redshift subnet group.</p>
 *         <p>
 * For information about subnet groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class CreateClusterSubnetGroupCommand extends $Command<
  CreateClusterSubnetGroupCommandInput,
  CreateClusterSubnetGroupCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateClusterSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClusterSubnetGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateClusterSubnetGroupResult.filterSensitiveLog,
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
