import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { DescribeTableRequest, DescribeTableResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTableCommand,
  serializeAws_json1_1DescribeTableCommand,
} from "../protocols/Aws_json1_1";
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

export type DescribeTableCommandInput = DescribeTableRequest;
export type DescribeTableCommandOutput = DescribeTableResponse & __MetadataBearer;

/**
 * <p>Describes the detailed information about a table from metadata in the cluster. The
 *       information includes its columns.
 *       A token is returned to page through the column list.
 *       Depending on the authorization method, use one of the
 *       following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the
 *          cluster identifier that matches the cluster in the secret. </p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - specify the cluster identifier, the database name, and the database
 *           user name. Permission to call the <code>redshift:GetClusterCredentials</code> operation is
 *           required to use this method. </p>
 *             </li>
 *          </ul>
 */
export class DescribeTableCommand extends $Command<
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
  RedshiftDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTableCommandInput, DescribeTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "DescribeTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTableResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTableCommandOutput> {
    return deserializeAws_json1_1DescribeTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
