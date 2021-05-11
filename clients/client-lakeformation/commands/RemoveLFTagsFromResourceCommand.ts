import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RemoveLFTagsFromResourceRequest, RemoveLFTagsFromResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RemoveLFTagsFromResourceCommand,
  serializeAws_json1_1RemoveLFTagsFromResourceCommand,
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

export interface RemoveLFTagsFromResourceCommandInput extends RemoveLFTagsFromResourceRequest {}
export interface RemoveLFTagsFromResourceCommandOutput extends RemoveLFTagsFromResourceResponse, __MetadataBearer {}

/**
 * <p>Removes a tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RemoveLFTagsFromResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RemoveLFTagsFromResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new RemoveLFTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveLFTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveLFTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveLFTagsFromResourceCommand extends $Command<
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveLFTagsFromResourceCommandInput) {
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
  ): Handler<RemoveLFTagsFromResourceCommandInput, RemoveLFTagsFromResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "RemoveLFTagsFromResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveLFTagsFromResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveLFTagsFromResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveLFTagsFromResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveLFTagsFromResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveLFTagsFromResourceCommandOutput> {
    return deserializeAws_json1_1RemoveLFTagsFromResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
