import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetSlotTypeVersionsRequest, GetSlotTypeVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSlotTypeVersionsCommand,
  serializeAws_restJson1GetSlotTypeVersionsCommand,
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

export type GetSlotTypeVersionsCommandInput = GetSlotTypeVersionsRequest;
export type GetSlotTypeVersionsCommandOutput = GetSlotTypeVersionsResponse & __MetadataBearer;

/**
 * <p>Gets information about all versions of a slot type.</p>
 *          <p>The <code>GetSlotTypeVersions</code> operation returns a
 *         <code>SlotTypeMetadata</code> object for each version of a slot type.
 *       For example, if a slot type has three numbered versions, the
 *         <code>GetSlotTypeVersions</code> operation returns four
 *         <code>SlotTypeMetadata</code> objects in the response, one for each
 *       numbered version and one for the <code>$LATEST</code> version. </p>
 *          <p>The <code>GetSlotTypeVersions</code> operation always returns at
 *       least one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetSlotTypeVersions</code> action.</p>
 */
export class GetSlotTypeVersionsCommand extends $Command<
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSlotTypeVersionsCommandInput) {
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
  ): Handler<GetSlotTypeVersionsCommandInput, GetSlotTypeVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetSlotTypeVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSlotTypeVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSlotTypeVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSlotTypeVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSlotTypeVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSlotTypeVersionsCommandOutput> {
    return deserializeAws_restJson1GetSlotTypeVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
