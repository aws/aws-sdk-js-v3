import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListFargateProfilesRequest, ListFargateProfilesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFargateProfilesCommand,
  serializeAws_restJson1ListFargateProfilesCommand,
} from "../protocols/Aws_restJson1";
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

export interface ListFargateProfilesCommandInput extends ListFargateProfilesRequest {}
export interface ListFargateProfilesCommandOutput extends ListFargateProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists the AWS Fargate profiles associated with the specified cluster in your AWS
 *             account in the specified Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListFargateProfilesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListFargateProfilesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListFargateProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFargateProfilesCommandInput} for command's `input` shape.
 * @see {@link ListFargateProfilesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFargateProfilesCommand extends $Command<
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFargateProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFargateProfilesCommandInput, ListFargateProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListFargateProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFargateProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFargateProfilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFargateProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFargateProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFargateProfilesCommandOutput> {
    return deserializeAws_restJson1ListFargateProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
