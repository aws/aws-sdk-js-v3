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

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { GetConfiguredAudienceModelPolicyRequest, GetConfiguredAudienceModelPolicyResponse } from "../models/models_0";
import {
  de_GetConfiguredAudienceModelPolicyCommand,
  se_GetConfiguredAudienceModelPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredAudienceModelPolicyCommand}.
 */
export interface GetConfiguredAudienceModelPolicyCommandInput extends GetConfiguredAudienceModelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetConfiguredAudienceModelPolicyCommand}.
 */
export interface GetConfiguredAudienceModelPolicyCommandOutput
  extends GetConfiguredAudienceModelPolicyResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a configured audience model policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetConfiguredAudienceModelPolicyCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetConfiguredAudienceModelPolicyCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetConfiguredAudienceModelPolicyRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredAudienceModelPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredAudienceModelPolicyResponse
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * //   configuredAudienceModelPolicy: "STRING_VALUE", // required
 * //   policyHash: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetConfiguredAudienceModelPolicyCommandInput - {@link GetConfiguredAudienceModelPolicyCommandInput}
 * @returns {@link GetConfiguredAudienceModelPolicyCommandOutput}
 * @see {@link GetConfiguredAudienceModelPolicyCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredAudienceModelPolicyCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class GetConfiguredAudienceModelPolicyCommand extends $Command<
  GetConfiguredAudienceModelPolicyCommandInput,
  GetConfiguredAudienceModelPolicyCommandOutput,
  CleanRoomsMLClientResolvedConfig
> {
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
  constructor(readonly input: GetConfiguredAudienceModelPolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfiguredAudienceModelPolicyCommandInput, GetConfiguredAudienceModelPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfiguredAudienceModelPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "GetConfiguredAudienceModelPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "GetConfiguredAudienceModelPolicy",
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
  private serialize(
    input: GetConfiguredAudienceModelPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetConfiguredAudienceModelPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConfiguredAudienceModelPolicyCommandOutput> {
    return de_GetConfiguredAudienceModelPolicyCommand(output, context);
  }
}
