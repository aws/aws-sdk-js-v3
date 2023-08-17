// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteGcmChannelRequest, DeleteGcmChannelResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_DeleteGcmChannelCommand, se_DeleteGcmChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteGcmChannelCommand}.
 */
export interface DeleteGcmChannelCommandInput extends DeleteGcmChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGcmChannelCommand}.
 */
export interface DeleteGcmChannelCommandOutput extends DeleteGcmChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disables the GCM channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // DeleteGcmChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteGcmChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGcmChannelResponse
 * //   GCMChannelResponse: { // GCMChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Credential: "STRING_VALUE",
 * //     DefaultAuthenticationMethod: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     HasFcmServiceCredentials: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteGcmChannelCommandInput - {@link DeleteGcmChannelCommandInput}
 * @returns {@link DeleteGcmChannelCommandOutput}
 * @see {@link DeleteGcmChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteGcmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class DeleteGcmChannelCommand extends $Command<
  DeleteGcmChannelCommandInput,
  DeleteGcmChannelCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: DeleteGcmChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGcmChannelCommandInput, DeleteGcmChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGcmChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "DeleteGcmChannelCommand";
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
  private serialize(input: DeleteGcmChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteGcmChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGcmChannelCommandOutput> {
    return de_DeleteGcmChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
