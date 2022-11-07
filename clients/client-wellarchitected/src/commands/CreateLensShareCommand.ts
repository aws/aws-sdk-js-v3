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
  CreateLensShareInput,
  CreateLensShareInputFilterSensitiveLog,
  CreateLensShareOutput,
  CreateLensShareOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateLensShareCommand,
  serializeAws_restJson1CreateLensShareCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

export interface CreateLensShareCommandInput extends CreateLensShareInput {}
export interface CreateLensShareCommandOutput extends CreateLensShareOutput, __MetadataBearer {}

/**
 * <p>Create a lens share.</p>
 *         <p>The owner of a lens can share it with other Amazon Web Services accounts, IAM users, an organization,
 *             and organizational units (OUs) in the same Amazon Web Services Region.
 *             Shared access to a lens is not removed until the lens invitation is deleted.</p>
 *         <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>By sharing your custom lenses with other Amazon Web Services accounts,
 *                 you acknowledge that Amazon Web Services will make your custom lenses available to those
 *                 other accounts. Those other accounts may continue to access and use your
 *                 shared custom lenses even if you delete the custom lenses
 *                 from your own Amazon Web Services account or terminate
 *                 your Amazon Web Services account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateLensShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateLensShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateLensShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLensShareCommandInput} for command's `input` shape.
 * @see {@link CreateLensShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 */
export class CreateLensShareCommand extends $Command<
  CreateLensShareCommandInput,
  CreateLensShareCommandOutput,
  WellArchitectedClientResolvedConfig
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

  constructor(readonly input: CreateLensShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLensShareCommandInput, CreateLensShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLensShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "CreateLensShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLensShareInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLensShareOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLensShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLensShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLensShareCommandOutput> {
    return deserializeAws_restJson1CreateLensShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
