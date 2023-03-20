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

import { UpdateSiteInput, UpdateSiteOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  deserializeAws_restJson1UpdateSiteCommand,
  serializeAws_restJson1UpdateSiteCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateSiteCommand}.
 */
export interface UpdateSiteCommandInput extends UpdateSiteInput {}
/**
 * @public
 *
 * The output of {@link UpdateSiteCommand}.
 */
export interface UpdateSiteCommandOutput extends UpdateSiteOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, UpdateSiteCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, UpdateSiteCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new UpdateSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateSiteCommandInput - {@link UpdateSiteCommandInput}
 * @returns {@link UpdateSiteCommandOutput}
 * @see {@link UpdateSiteCommandInput} for command's `input` shape.
 * @see {@link UpdateSiteCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 *
 */
export class UpdateSiteCommand extends $Command<
  UpdateSiteCommandInput,
  UpdateSiteCommandOutput,
  OutpostsClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: UpdateSiteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSiteCommandInput, UpdateSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateSiteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "UpdateSiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSiteCommandOutput> {
    return deserializeAws_restJson1UpdateSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
