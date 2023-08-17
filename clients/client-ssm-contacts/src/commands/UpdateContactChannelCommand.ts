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

import { UpdateContactChannelRequest, UpdateContactChannelResult } from "../models/models_0";
import { de_UpdateContactChannelCommand, se_UpdateContactChannelCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactChannelCommand}.
 */
export interface UpdateContactChannelCommandInput extends UpdateContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactChannelCommand}.
 */
export interface UpdateContactChannelCommandOutput extends UpdateContactChannelResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a contact's contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, UpdateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, UpdateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // UpdateContactChannelRequest
 *   ContactChannelId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   DeliveryAddress: { // ContactChannelAddress
 *     SimpleAddress: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateContactChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactChannelCommandInput - {@link UpdateContactChannelCommandInput}
 * @returns {@link UpdateContactChannelCommandOutput}
 * @see {@link UpdateContactChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 */
export class UpdateContactChannelCommand extends $Command<
  UpdateContactChannelCommandInput,
  UpdateContactChannelCommandOutput,
  SSMContactsClientResolvedConfig
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
  constructor(readonly input: UpdateContactChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContactChannelCommandInput, UpdateContactChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContactChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "UpdateContactChannelCommand";
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
  private serialize(input: UpdateContactChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateContactChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContactChannelCommandOutput> {
    return de_UpdateContactChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
