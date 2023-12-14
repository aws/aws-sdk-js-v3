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

import { CreatePrivateGraphEndpointInput, CreatePrivateGraphEndpointOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_CreatePrivateGraphEndpointCommand, se_CreatePrivateGraphEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePrivateGraphEndpointCommand}.
 */
export interface CreatePrivateGraphEndpointCommandInput extends CreatePrivateGraphEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreatePrivateGraphEndpointCommand}.
 */
export interface CreatePrivateGraphEndpointCommandOutput extends CreatePrivateGraphEndpointOutput, __MetadataBearer {}

/**
 * @public
 * <p>Create a private graph endpoint to allow private access from to the graph from within
 *     a VPC. You can attach security groups to the private graph endpoint. VPC endpoint charges apply.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CreatePrivateGraphEndpointCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CreatePrivateGraphEndpointCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // CreatePrivateGraphEndpointInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   vpcId: "STRING_VALUE",
 *   subnetIds: [ // SubnetIds
 *     "STRING_VALUE",
 *   ],
 *   vpcSecurityGroupIds: [ // SecurityGroupIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreatePrivateGraphEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivateGraphEndpointOutput
 * //   vpcId: "STRING_VALUE", // required
 * //   subnetIds: [ // SubnetIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED", // required
 * //   vpcEndpointId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePrivateGraphEndpointCommandInput - {@link CreatePrivateGraphEndpointCommandInput}
 * @returns {@link CreatePrivateGraphEndpointCommandOutput}
 * @see {@link CreatePrivateGraphEndpointCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateGraphEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Raised when a conflict is encountered.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 */
export class CreatePrivateGraphEndpointCommand extends $Command<
  CreatePrivateGraphEndpointCommandInput,
  CreatePrivateGraphEndpointCommandOutput,
  NeptuneGraphClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      ApiType: { type: "staticContextParams", value: `ControlPlane` },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreatePrivateGraphEndpointCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePrivateGraphEndpointCommandInput, CreatePrivateGraphEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePrivateGraphEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneGraphClient";
    const commandName = "CreatePrivateGraphEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneGraph",
        operation: "CreatePrivateGraphEndpoint",
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
  private serialize(input: CreatePrivateGraphEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePrivateGraphEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePrivateGraphEndpointCommandOutput> {
    return de_CreatePrivateGraphEndpointCommand(output, context);
  }
}
