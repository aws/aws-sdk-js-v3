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

import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import {
  GetCorsPolicyInput,
  GetCorsPolicyInputFilterSensitiveLog,
  GetCorsPolicyOutput,
  GetCorsPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCorsPolicyCommand,
  serializeAws_json1_1GetCorsPolicyCommand,
} from "../protocols/Aws_json1_1";

export interface GetCorsPolicyCommandInput extends GetCorsPolicyInput {}
export interface GetCorsPolicyCommandOutput extends GetCorsPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the cross-origin resource sharing (CORS) configuration information that is
 *          set for the container.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this
 *          permission and can grant it to others.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new GetCorsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 */
export class GetCorsPolicyCommand extends $Command<
  GetCorsPolicyCommandInput,
  GetCorsPolicyCommandOutput,
  MediaStoreClientResolvedConfig
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

  constructor(readonly input: GetCorsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCorsPolicyCommandInput, GetCorsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetCorsPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "GetCorsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCorsPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetCorsPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCorsPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCorsPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCorsPolicyCommandOutput> {
    return deserializeAws_json1_1GetCorsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
