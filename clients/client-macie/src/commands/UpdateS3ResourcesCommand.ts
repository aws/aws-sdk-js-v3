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

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import {
  UpdateS3ResourcesRequest,
  UpdateS3ResourcesRequestFilterSensitiveLog,
  UpdateS3ResourcesResult,
  UpdateS3ResourcesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateS3ResourcesCommand,
  serializeAws_json1_1UpdateS3ResourcesCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateS3ResourcesCommandInput extends UpdateS3ResourcesRequest {}
export interface UpdateS3ResourcesCommandOutput extends UpdateS3ResourcesResult, __MetadataBearer {}

/**
 * <p>(Discontinued) Updates the classification types for the specified S3 resources. If
 *       <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3
 *       resources associated with Amazon Macie Classic for the current Macie Classic administrator
 *       account. If <code>memberAccountId</code> is specified, the action updates the classification types of the
 *       S3 resources associated with Macie Classic for the specified member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, UpdateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, UpdateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new UpdateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link UpdateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for MacieClient's `config` shape.
 *
 */
export class UpdateS3ResourcesCommand extends $Command<
  UpdateS3ResourcesCommandInput,
  UpdateS3ResourcesCommandOutput,
  MacieClientResolvedConfig
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

  constructor(readonly input: UpdateS3ResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateS3ResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "UpdateS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateS3ResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateS3ResourcesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateS3ResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateS3ResourcesCommandOutput> {
    return deserializeAws_json1_1UpdateS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
