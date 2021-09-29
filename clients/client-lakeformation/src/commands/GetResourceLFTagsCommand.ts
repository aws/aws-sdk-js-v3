import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetResourceLFTagsRequest, GetResourceLFTagsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetResourceLFTagsCommand,
  serializeAws_json1_1GetResourceLFTagsCommand,
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

export interface GetResourceLFTagsCommandInput extends GetResourceLFTagsRequest {}
export interface GetResourceLFTagsCommandOutput extends GetResourceLFTagsResponse, __MetadataBearer {}

/**
 * <p>Returns the tags applied to a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetResourceLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetResourceLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetResourceLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceLFTagsCommandInput} for command's `input` shape.
 * @see {@link GetResourceLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetResourceLFTagsCommand extends $Command<
  GetResourceLFTagsCommandInput,
  GetResourceLFTagsCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceLFTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetResourceLFTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceLFTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResourceLFTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceLFTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourceLFTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceLFTagsCommandOutput> {
    return deserializeAws_json1_1GetResourceLFTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
