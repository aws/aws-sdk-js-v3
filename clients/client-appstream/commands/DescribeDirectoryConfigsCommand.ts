import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeDirectoryConfigsRequest, DescribeDirectoryConfigsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDirectoryConfigsCommand,
  serializeAws_json1_1DescribeDirectoryConfigsCommand,
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

export type DescribeDirectoryConfigsCommandInput = DescribeDirectoryConfigsRequest;
export type DescribeDirectoryConfigsCommandOutput = DescribeDirectoryConfigsResult & __MetadataBearer;

/**
 * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 *         </p>
 *         <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
 */
export class DescribeDirectoryConfigsCommand extends $Command<
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDirectoryConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDirectoryConfigsCommandInput, DescribeDirectoryConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeDirectoryConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDirectoryConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectoryConfigsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDirectoryConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectoryConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDirectoryConfigsCommandOutput> {
    return deserializeAws_json1_1DescribeDirectoryConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
