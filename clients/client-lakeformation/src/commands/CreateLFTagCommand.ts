import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { CreateLFTagRequest, CreateLFTagResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLFTagCommand,
  serializeAws_json1_1CreateLFTagCommand,
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

export interface CreateLFTagCommandInput extends CreateLFTagRequest {}
export interface CreateLFTagCommandOutput extends CreateLFTagResponse, __MetadataBearer {}

/**
 * <p>Creates a tag with the specified name and values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new CreateLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLFTagCommandInput} for command's `input` shape.
 * @see {@link CreateLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLFTagCommand extends $Command<
  CreateLFTagCommandInput,
  CreateLFTagCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLFTagCommandInput) {
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
  ): Handler<CreateLFTagCommandInput, CreateLFTagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "CreateLFTagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLFTagRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLFTagResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLFTagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLFTagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLFTagCommandOutput> {
    return deserializeAws_json1_1CreateLFTagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
