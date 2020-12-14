import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeRegistryRequest, DescribeRegistryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRegistryCommand,
  serializeAws_json1_1DescribeRegistryCommand,
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

export type DescribeRegistryCommandInput = DescribeRegistryRequest;
export type DescribeRegistryCommandOutput = DescribeRegistryResponse & __MetadataBearer;

/**
 * <p>Describes the settings for a registry. The replication configuration for a repository
 *             can be created or updated with the <a>PutReplicationConfiguration</a> API
 *             action.</p>
 */
export class DescribeRegistryCommand extends $Command<
  DescribeRegistryCommandInput,
  DescribeRegistryCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRegistryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRegistryCommandInput, DescribeRegistryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribeRegistryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRegistryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRegistryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRegistryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRegistryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRegistryCommandOutput> {
    return deserializeAws_json1_1DescribeRegistryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
