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
  ListCollectionsRequest,
  ListCollectionsRequestFilterSensitiveLog,
  ListCollectionsResponse,
  ListCollectionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCollectionsCommand,
  serializeAws_json1_1ListCollectionsCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface ListCollectionsCommandInput extends ListCollectionsRequest {}
export interface ListCollectionsCommandOutput extends ListCollectionsResponse, __MetadataBearer {}

/**
 * <p>Returns list of collection IDs in your account. If the result is truncated, the
 *       response also provides a <code>NextToken</code> that you can use in the subsequent request to
 *       fetch the next set of collection IDs.</p>
 *          <p>For an example, see Listing collections in the Amazon Rekognition Developer
 *       Guide.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:ListCollections</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListCollectionsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListCollectionsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new ListCollectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListCollectionsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class ListCollectionsCommand extends $Command<
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: ListCollectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCollectionsCommandInput, ListCollectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCollectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "ListCollectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCollectionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCollectionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCollectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCollectionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCollectionsCommandOutput> {
    return deserializeAws_json1_1ListCollectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
