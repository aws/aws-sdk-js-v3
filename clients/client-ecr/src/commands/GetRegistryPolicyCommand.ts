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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetRegistryPolicyRequest, GetRegistryPolicyResponse } from "../models/models_0";
import { de_GetRegistryPolicyCommand, se_GetRegistryPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRegistryPolicyCommand}.
 */
export interface GetRegistryPolicyCommandInput extends GetRegistryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetRegistryPolicyCommand}.
 */
export interface GetRegistryPolicyCommandOutput extends GetRegistryPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the permissions policy for a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new GetRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRegistryPolicyCommandInput - {@link GetRegistryPolicyCommandInput}
 * @returns {@link GetRegistryPolicyCommandOutput}
 * @see {@link GetRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RegistryPolicyNotFoundException} (client fault)
 *  <p>The registry doesn't have an associated registry policy.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class GetRegistryPolicyCommand extends $Command<
  GetRegistryPolicyCommandInput,
  GetRegistryPolicyCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: GetRegistryPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRegistryPolicyCommandInput, GetRegistryPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRegistryPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetRegistryPolicyCommand";
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
  private serialize(input: GetRegistryPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRegistryPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegistryPolicyCommandOutput> {
    return de_GetRegistryPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
