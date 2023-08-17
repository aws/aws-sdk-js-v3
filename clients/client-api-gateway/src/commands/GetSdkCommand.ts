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
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetSdkRequest, SdkResponse } from "../models/models_0";
import { de_GetSdkCommand, se_GetSdkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSdkCommand}.
 */
export interface GetSdkCommandInput extends GetSdkRequest {}
/**
 * @public
 */
export type GetSdkCommandOutputType = Omit<SdkResponse, "body"> & {
  body?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSdkCommand}.
 */
export interface GetSdkCommandOutput extends GetSdkCommandOutputType, __MetadataBearer {}

/**
 * @public
 * <p>Generates a client SDK for a RestApi and Stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetSdkCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetSdkCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetSdkRequest
 *   restApiId: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   sdkType: "STRING_VALUE", // required
 *   parameters: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetSdkCommand(input);
 * const response = await client.send(command);
 * // { // SdkResponse
 * //   contentType: "STRING_VALUE",
 * //   contentDisposition: "STRING_VALUE",
 * //   body: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSdkCommandInput - {@link GetSdkCommandInput}
 * @returns {@link GetSdkCommandOutput}
 * @see {@link GetSdkCommandInput} for command's `input` shape.
 * @see {@link GetSdkCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 */
export class GetSdkCommand extends $Command<GetSdkCommandInput, GetSdkCommandOutput, APIGatewayClientResolvedConfig> {
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
  constructor(readonly input: GetSdkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSdkCommandInput, GetSdkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSdkCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetSdkCommand";
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
  private serialize(input: GetSdkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSdkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSdkCommandOutput> {
    return de_GetSdkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
