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
  CreateStudioRequest,
  CreateStudioRequestFilterSensitiveLog,
  CreateStudioResponse,
  CreateStudioResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1CreateStudioCommand,
  serializeAws_restJson1CreateStudioCommand,
} from "../protocols/Aws_restJson1";

export interface CreateStudioCommandInput extends CreateStudioRequest {}
export interface CreateStudioCommandOutput extends CreateStudioResponse, __MetadataBearer {}

/**
 * <p>Create a new studio.</p>
 *         <p>When creating a studio, two IAM roles must be provided: the admin role
 *             and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p>
 *         <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy
 *             attached for the portal to function properly.</p>
 *         <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed
 *             policy attached for the portal to function properly.</p>
 *         <p>You may optionally specify a KMS key in the
 *             <code>StudioEncryptionConfiguration</code>.</p>
 *         <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other
 *             data you provide are always encrypted at rest using an KMS key. By default, this key is
 *             owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key
 *             when calling <code>CreateStudio</code> to encrypt this data using a key you own and
 *             manage.</p>
 *         <p>When providing an KMS key during studio creation, Nimble Studio creates KMS
 *             grants in your account to provide your studio user and admin roles access to these KMS
 *             keys.</p>
 *         <p>If you delete this grant, the studio will no longer be accessible to your portal
 *             users.</p>
 *         <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStudioCommandInput} for command's `input` shape.
 * @see {@link CreateStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class CreateStudioCommand extends $Command<
  CreateStudioCommandInput,
  CreateStudioCommandOutput,
  NimbleClientResolvedConfig
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

  constructor(readonly input: CreateStudioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStudioCommandInput, CreateStudioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateStudioCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateStudioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStudioRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStudioResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStudioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateStudioCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStudioCommandOutput> {
    return deserializeAws_restJson1CreateStudioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
