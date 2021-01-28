import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetKeyGroupRequest, GetKeyGroupResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetKeyGroupCommand,
  serializeAws_restXmlGetKeyGroupCommand,
} from "../protocols/Aws_restXml";
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

export type GetKeyGroupCommandInput = GetKeyGroupRequest;
export type GetKeyGroupCommandOutput = GetKeyGroupResult & __MetadataBearer;

/**
 * <p>Gets a key group, including the date and time when the key group was last modified.</p>
 * 		       <p>To get a key group, you must provide the key group’s identifier. If the key group is
 * 			referenced in a distribution’s cache behavior, you can get the key group’s identifier
 * 			using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group
 * 			is not referenced in a cache behavior, you can get the identifier using
 * 			<code>ListKeyGroups</code>.</p>
 */
export class GetKeyGroupCommand extends $Command<
  GetKeyGroupCommandInput,
  GetKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetKeyGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKeyGroupCommandInput, GetKeyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetKeyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetKeyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetKeyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyGroupCommandOutput> {
    return deserializeAws_restXmlGetKeyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
