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

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { SendApiAssetRequest, SendApiAssetResponse } from "../models/models_0";
import { de_SendApiAssetCommand, se_SendApiAssetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendApiAssetCommand}.
 */
export interface SendApiAssetCommandInput extends SendApiAssetRequest {}
/**
 * @public
 *
 * The output of {@link SendApiAssetCommand}.
 */
export interface SendApiAssetCommandOutput extends SendApiAssetResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, SendApiAssetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, SendApiAssetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // SendApiAssetRequest
 *   Body: "STRING_VALUE",
 *   QueryStringParameters: { // MapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AssetId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   RequestHeaders: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Method: "STRING_VALUE",
 *   Path: "STRING_VALUE",
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new SendApiAssetCommand(input);
 * const response = await client.send(command);
 * // { // SendApiAssetResponse
 * //   Body: "STRING_VALUE",
 * //   ResponseHeaders: { // MapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param SendApiAssetCommandInput - {@link SendApiAssetCommandInput}
 * @returns {@link SendApiAssetCommandOutput}
 * @see {@link SendApiAssetCommandInput} for command's `input` shape.
 * @see {@link SendApiAssetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 */
export class SendApiAssetCommand extends $Command<
  SendApiAssetCommandInput,
  SendApiAssetCommandOutput,
  DataExchangeClientResolvedConfig
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
  constructor(readonly input: SendApiAssetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendApiAssetCommandInput, SendApiAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendApiAssetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "SendApiAssetCommand";
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
  private serialize(input: SendApiAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendApiAssetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendApiAssetCommandOutput> {
    return de_SendApiAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
