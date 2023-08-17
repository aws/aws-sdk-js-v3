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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { DeleteWebhookRequest, DeleteWebhookResult } from "../models/models_0";
import { de_DeleteWebhookCommand, se_DeleteWebhookCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteWebhookCommand}.
 */
export interface DeleteWebhookCommandInput extends DeleteWebhookRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebhookCommand}.
 */
export interface DeleteWebhookCommandOutput extends DeleteWebhookResult, __MetadataBearer {}

/**
 * @public
 * <p> Deletes a webhook. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // DeleteWebhookRequest
 *   webhookId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWebhookResult
 * //   webhook: { // Webhook
 * //     webhookArn: "STRING_VALUE", // required
 * //     webhookId: "STRING_VALUE", // required
 * //     webhookUrl: "STRING_VALUE", // required
 * //     branchName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteWebhookCommandInput - {@link DeleteWebhookCommandInput}
 * @returns {@link DeleteWebhookCommandOutput}
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p> The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p> A resource could not be created because service quotas were exceeded. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p> An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p> An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 */
export class DeleteWebhookCommand extends $Command<
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
  AmplifyClientResolvedConfig
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
  constructor(readonly input: DeleteWebhookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWebhookCommandInput, DeleteWebhookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteWebhookCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "DeleteWebhookCommand";
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
  private serialize(input: DeleteWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteWebhookCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWebhookCommandOutput> {
    return de_DeleteWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
