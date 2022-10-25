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
  GetIntentVersionsRequest,
  GetIntentVersionsRequestFilterSensitiveLog,
  GetIntentVersionsResponse,
  GetIntentVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetIntentVersionsCommand,
  serializeAws_restJson1GetIntentVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface GetIntentVersionsCommandInput extends GetIntentVersionsRequest {}
export interface GetIntentVersionsCommandOutput extends GetIntentVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all of the versions of an intent.</p>
 *          <p>The <code>GetIntentVersions</code> operation returns an
 *         <code>IntentMetadata</code> object for each version of an intent. For
 *       example, if an intent has three numbered versions, the
 *         <code>GetIntentVersions</code> operation returns four
 *         <code>IntentMetadata</code> objects in the response, one for each
 *       numbered version and one for the <code>$LATEST</code> version. </p>
 *          <p>The <code>GetIntentVersions</code> operation always returns at
 *       least one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetIntentVersions</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetIntentVersionsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetIntentVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetIntentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntentVersionsCommandInput} for command's `input` shape.
 * @see {@link GetIntentVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class GetIntentVersionsCommand extends $Command<
  GetIntentVersionsCommandInput,
  GetIntentVersionsCommandOutput,
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

  constructor(readonly input: GetIntentVersionsCommandInput) {
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
  ): Handler<GetIntentVersionsCommandInput, GetIntentVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIntentVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetIntentVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIntentVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetIntentVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIntentVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIntentVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntentVersionsCommandOutput> {
    return deserializeAws_restJson1GetIntentVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
