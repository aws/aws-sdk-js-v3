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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetAutoTerminationPolicyInput, GetAutoTerminationPolicyOutput } from "../models/models_0";
import { de_GetAutoTerminationPolicyCommand, se_GetAutoTerminationPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAutoTerminationPolicyCommand}.
 */
export interface GetAutoTerminationPolicyCommandInput extends GetAutoTerminationPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetAutoTerminationPolicyCommand}.
 */
export interface GetAutoTerminationPolicyCommandOutput extends GetAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the auto-termination policy for an Amazon EMR cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetAutoTerminationPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // GetAutoTerminationPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAutoTerminationPolicyOutput
 * //   AutoTerminationPolicy: { // AutoTerminationPolicy
 * //     IdleTimeout: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutoTerminationPolicyCommandInput - {@link GetAutoTerminationPolicyCommandInput}
 * @returns {@link GetAutoTerminationPolicyCommandOutput}
 * @see {@link GetAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class GetAutoTerminationPolicyCommand extends $Command<
  GetAutoTerminationPolicyCommandInput,
  GetAutoTerminationPolicyCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: GetAutoTerminationPolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAutoTerminationPolicyCommandInput, GetAutoTerminationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAutoTerminationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetAutoTerminationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "GetAutoTerminationPolicy",
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
  private serialize(input: GetAutoTerminationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAutoTerminationPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAutoTerminationPolicyCommandOutput> {
    return de_GetAutoTerminationPolicyCommand(output, context);
  }
}
