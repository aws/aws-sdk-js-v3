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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import {
  AssociateEncryptionConfigRequest,
  AssociateEncryptionConfigRequestFilterSensitiveLog,
  AssociateEncryptionConfigResponse,
  AssociateEncryptionConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateEncryptionConfigCommand,
  serializeAws_restJson1AssociateEncryptionConfigCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateEncryptionConfigCommandInput extends AssociateEncryptionConfigRequest {}
export interface AssociateEncryptionConfigCommandOutput extends AssociateEncryptionConfigResponse, __MetadataBearer {}

/**
 * <p>Associate encryption configuration to an existing cluster.</p>
 *          <p>You can use this API to enable encryption on existing clusters which do not have
 *             encryption already enabled. This allows you to implement a defense-in-depth security
 *             strategy without migrating applications to new Amazon EKS clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateEncryptionConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateEncryptionConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new AssociateEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class AssociateEncryptionConfigCommand extends $Command<
  AssociateEncryptionConfigCommandInput,
  AssociateEncryptionConfigCommandOutput,
  EKSClientResolvedConfig
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

  constructor(readonly input: AssociateEncryptionConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateEncryptionConfigCommandInput, AssociateEncryptionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateEncryptionConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "AssociateEncryptionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateEncryptionConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateEncryptionConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateEncryptionConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateEncryptionConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateEncryptionConfigCommandOutput> {
    return deserializeAws_restJson1AssociateEncryptionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
