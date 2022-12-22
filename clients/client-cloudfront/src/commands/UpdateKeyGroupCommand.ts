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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  UpdateKeyGroupRequest,
  UpdateKeyGroupRequestFilterSensitiveLog,
  UpdateKeyGroupResult,
  UpdateKeyGroupResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateKeyGroupCommand,
  serializeAws_restXmlUpdateKeyGroupCommand,
} from "../protocols/Aws_restXml";

export interface UpdateKeyGroupCommandInput extends UpdateKeyGroupRequest {}
export interface UpdateKeyGroupCommandOutput extends UpdateKeyGroupResult, __MetadataBearer {}

/**
 * <p>Updates a key group.</p>
 *          <p>When you update a key group, all the fields are updated with the values provided in
 * 			the request. You cannot update some fields independent of others. To update a key
 * 			group:</p>
 *          <ol>
 *             <li>
 *                <p>Get the current key group with <code>GetKeyGroup</code> or
 * 						<code>GetKeyGroupConfig</code>.</p>
 *             </li>
 *             <li>
 *                <p>Locally modify the fields in the key group that you want to update. For
 * 					example, add or remove public key IDs.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including
 * 					the fields that you modified and those that you didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateKeyGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class UpdateKeyGroupCommand extends $Command<
  UpdateKeyGroupCommandInput,
  UpdateKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: UpdateKeyGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKeyGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateKeyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateKeyGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateKeyGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateKeyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateKeyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKeyGroupCommandOutput> {
    return deserializeAws_restXmlUpdateKeyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
