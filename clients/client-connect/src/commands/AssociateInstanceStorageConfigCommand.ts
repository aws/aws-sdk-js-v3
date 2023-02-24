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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  AssociateInstanceStorageConfigRequest,
  AssociateInstanceStorageConfigRequestFilterSensitiveLog,
  AssociateInstanceStorageConfigResponse,
  AssociateInstanceStorageConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateInstanceStorageConfigCommand,
  serializeAws_restJson1AssociateInstanceStorageConfigCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateInstanceStorageConfigCommandInput extends AssociateInstanceStorageConfigRequest {}
export interface AssociateInstanceStorageConfigCommandOutput
  extends AssociateInstanceStorageConfigResponse,
    __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a storage resource type for the first time. You can only associate one type of
 *    storage configuration in a single call. This means, for example, that you can't define an
 *    instance with multiple S3 buckets for storing chat transcripts.</p>
 *          <p>This API does not create a resource that doesn't exist. It only associates it to the
 *    instance. Ensure that the resource being specified in the storage configuration, like an S3
 *    bucket, exists when being used for association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class AssociateInstanceStorageConfigCommand extends $Command<
  AssociateInstanceStorageConfigCommandInput,
  AssociateInstanceStorageConfigCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: AssociateInstanceStorageConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateInstanceStorageConfigCommandInput, AssociateInstanceStorageConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateInstanceStorageConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociateInstanceStorageConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateInstanceStorageConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateInstanceStorageConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateInstanceStorageConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateInstanceStorageConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateInstanceStorageConfigCommandOutput> {
    return deserializeAws_restJson1AssociateInstanceStorageConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
