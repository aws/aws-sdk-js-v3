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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  DeleteKeyPairRequest,
  DeleteKeyPairRequestFilterSensitiveLog,
  DeleteKeyPairResult,
  DeleteKeyPairResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteKeyPairCommand,
  serializeAws_json1_1DeleteKeyPairCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteKeyPairCommandInput extends DeleteKeyPairRequest {}
export interface DeleteKeyPairCommandOutput extends DeleteKeyPairResult, __MetadataBearer {}

/**
 * <p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p>
 *          <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and
 *         <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default
 *       key pair will not be created unless you launch an instance without specifying a custom key
 *       pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p>
 *          <p>The <code>delete key pair</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>key pair name</code>. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKeyPairCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class DeleteKeyPairCommand extends $Command<
  DeleteKeyPairCommandInput,
  DeleteKeyPairCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: DeleteKeyPairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteKeyPairCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteKeyPairRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteKeyPairResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteKeyPairCommandOutput> {
    return deserializeAws_json1_1DeleteKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
