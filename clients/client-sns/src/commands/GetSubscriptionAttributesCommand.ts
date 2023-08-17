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

import { GetSubscriptionAttributesInput, GetSubscriptionAttributesResponse } from "../models/models_0";
import { de_GetSubscriptionAttributesCommand, se_GetSubscriptionAttributesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionAttributesCommand}.
 */
export interface GetSubscriptionAttributesCommandInput extends GetSubscriptionAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionAttributesCommand}.
 */
export interface GetSubscriptionAttributesCommandOutput extends GetSubscriptionAttributesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns all of the properties of a subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // GetSubscriptionAttributesInput
 *   SubscriptionArn: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionAttributesResponse
 * //   Attributes: { // SubscriptionAttributesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSubscriptionAttributesCommandInput - {@link GetSubscriptionAttributesCommandInput}
 * @returns {@link GetSubscriptionAttributesCommandOutput}
 * @see {@link GetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class GetSubscriptionAttributesCommand extends $Command<
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput,
  SNSClientResolvedConfig
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
  constructor(readonly input: GetSubscriptionAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSubscriptionAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "GetSubscriptionAttributesCommand";
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
  private serialize(input: GetSubscriptionAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSubscriptionAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSubscriptionAttributesCommandOutput> {
    return de_GetSubscriptionAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
