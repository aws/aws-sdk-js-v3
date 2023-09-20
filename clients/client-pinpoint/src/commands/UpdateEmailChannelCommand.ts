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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdateEmailChannelRequest, UpdateEmailChannelResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_UpdateEmailChannelCommand, se_UpdateEmailChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEmailChannelCommand}.
 */
export interface UpdateEmailChannelCommandInput extends UpdateEmailChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEmailChannelCommand}.
 */
export interface UpdateEmailChannelCommandOutput extends UpdateEmailChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables the email channel for an application or updates the status and settings of the email channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // UpdateEmailChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EmailChannelRequest: { // EmailChannelRequest
 *     ConfigurationSet: "STRING_VALUE",
 *     Enabled: true || false,
 *     FromAddress: "STRING_VALUE", // required
 *     Identity: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateEmailChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEmailChannelResponse
 * //   EmailChannelResponse: { // EmailChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     ConfigurationSet: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     FromAddress: "STRING_VALUE",
 * //     HasCredential: true || false,
 * //     Id: "STRING_VALUE",
 * //     Identity: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     MessagesPerSecond: Number("int"),
 * //     Platform: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE",
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEmailChannelCommandInput - {@link UpdateEmailChannelCommandInput}
 * @returns {@link UpdateEmailChannelCommandOutput}
 * @see {@link UpdateEmailChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailChannelCommandOutput} for command's `response` shape.
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
export class UpdateEmailChannelCommand extends $Command<
  UpdateEmailChannelCommandInput,
  UpdateEmailChannelCommandOutput,
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
  constructor(readonly input: UpdateEmailChannelCommandInput) {
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
  ): Handler<UpdateEmailChannelCommandInput, UpdateEmailChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEmailChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateEmailChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "UpdateEmailChannel",
      },
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
  private serialize(input: UpdateEmailChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEmailChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEmailChannelCommandOutput> {
    return de_UpdateEmailChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
