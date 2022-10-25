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

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import {
  GetBulkPublishDetailsRequest,
  GetBulkPublishDetailsRequestFilterSensitiveLog,
  GetBulkPublishDetailsResponse,
  GetBulkPublishDetailsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBulkPublishDetailsCommand,
  serializeAws_restJson1GetBulkPublishDetailsCommand,
} from "../protocols/Aws_restJson1";

export interface GetBulkPublishDetailsCommandInput extends GetBulkPublishDetailsRequest {}
export interface GetBulkPublishDetailsCommandOutput extends GetBulkPublishDetailsResponse, __MetadataBearer {}

/**
 * <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetBulkPublishDetailsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetBulkPublishDetailsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new GetBulkPublishDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBulkPublishDetailsCommandInput} for command's `input` shape.
 * @see {@link GetBulkPublishDetailsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 */
export class GetBulkPublishDetailsCommand extends $Command<
  GetBulkPublishDetailsCommandInput,
  GetBulkPublishDetailsCommandOutput,
  CognitoSyncClientResolvedConfig
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

  constructor(readonly input: GetBulkPublishDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBulkPublishDetailsCommandInput, GetBulkPublishDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBulkPublishDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "GetBulkPublishDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBulkPublishDetailsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBulkPublishDetailsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBulkPublishDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBulkPublishDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBulkPublishDetailsCommandOutput> {
    return deserializeAws_restJson1GetBulkPublishDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
