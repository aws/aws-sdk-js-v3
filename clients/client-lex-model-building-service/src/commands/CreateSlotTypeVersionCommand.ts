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
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  CreateSlotTypeVersionRequest,
  CreateSlotTypeVersionRequestFilterSensitiveLog,
  CreateSlotTypeVersionResponse,
  CreateSlotTypeVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSlotTypeVersionCommand,
  serializeAws_restJson1CreateSlotTypeVersionCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSlotTypeVersionCommandInput extends CreateSlotTypeVersionRequest {}
export interface CreateSlotTypeVersionCommandOutput extends CreateSlotTypeVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of a slot type based on the
 *         <code>$LATEST</code> version of the specified slot type. If the
 *         <code>$LATEST</code> version of this resource has not changed since the
 *       last version that you created, Amazon Lex doesn't create a new version. It
 *       returns the last version that you created. </p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of a slot
 *         type. You can't update the numbered versions that you create with the
 *           <code>CreateSlotTypeVersion</code> operation.</p>
 *          </note>
 *
 *          <p>When you create a version of a slot type, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *
 *          <p>This operation requires permissions for the
 *         <code>lex:CreateSlotTypeVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new CreateSlotTypeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSlotTypeVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSlotTypeVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class CreateSlotTypeVersionCommand extends $Command<
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: CreateSlotTypeVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSlotTypeVersionCommandInput, CreateSlotTypeVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSlotTypeVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "CreateSlotTypeVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSlotTypeVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSlotTypeVersionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSlotTypeVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSlotTypeVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSlotTypeVersionCommandOutput> {
    return deserializeAws_restJson1CreateSlotTypeVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
