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

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResponse } from "../models/models_0";
import { de_GetAuthorizationTokenCommand, se_GetAuthorizationTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAuthorizationTokenCommand}.
 */
export interface GetAuthorizationTokenCommandInput extends GetAuthorizationTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthorizationTokenCommand}.
 */
export interface GetAuthorizationTokenCommandOutput extends GetAuthorizationTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves an authorization token. An authorization token represents your IAM
 *          authentication credentials. You can use it to access any Amazon ECR registry that your IAM
 *          principal has access to. The authorization token is valid for 12 hours. This API requires
 *          the <code>ecr-public:GetAuthorizationToken</code> and
 *             <code>sts:GetServiceBearerToken</code> permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetAuthorizationTokenCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetAuthorizationTokenCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const input = {};
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetAuthorizationTokenResponse
 * //   authorizationData: { // AuthorizationData
 * //     authorizationToken: "STRING_VALUE",
 * //     expiresAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAuthorizationTokenCommandInput - {@link GetAuthorizationTokenCommandInput}
 * @returns {@link GetAuthorizationTokenCommandOutput}
 * @see {@link GetAuthorizationTokenCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizationTokenCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 */
export class GetAuthorizationTokenCommand extends $Command<
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
  ECRPUBLICClientResolvedConfig
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
  constructor(readonly input: GetAuthorizationTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAuthorizationTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "GetAuthorizationTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SpencerFrontendService",
        operation: "GetAuthorizationToken",
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
  private serialize(input: GetAuthorizationTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAuthorizationTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAuthorizationTokenCommandOutput> {
    return de_GetAuthorizationTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
