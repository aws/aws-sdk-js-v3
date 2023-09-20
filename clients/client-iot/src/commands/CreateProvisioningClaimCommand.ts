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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CreateProvisioningClaimRequest,
  CreateProvisioningClaimResponse,
  CreateProvisioningClaimResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateProvisioningClaimCommand, se_CreateProvisioningClaimCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProvisioningClaimCommand}.
 */
export interface CreateProvisioningClaimCommandInput extends CreateProvisioningClaimRequest {}
/**
 * @public
 *
 * The output of {@link CreateProvisioningClaimCommand}.
 */
export interface CreateProvisioningClaimCommandOutput extends CreateProvisioningClaimResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a provisioning claim.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningClaimCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningClaimCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateProvisioningClaimRequest
 *   templateName: "STRING_VALUE", // required
 * };
 * const command = new CreateProvisioningClaimCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisioningClaimResponse
 * //   certificateId: "STRING_VALUE",
 * //   certificatePem: "STRING_VALUE",
 * //   keyPair: { // KeyPair
 * //     PublicKey: "STRING_VALUE",
 * //     PrivateKey: "STRING_VALUE",
 * //   },
 * //   expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateProvisioningClaimCommandInput - {@link CreateProvisioningClaimCommandInput}
 * @returns {@link CreateProvisioningClaimCommandOutput}
 * @see {@link CreateProvisioningClaimCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningClaimCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class CreateProvisioningClaimCommand extends $Command<
  CreateProvisioningClaimCommandInput,
  CreateProvisioningClaimCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: CreateProvisioningClaimCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProvisioningClaimCommandInput, CreateProvisioningClaimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProvisioningClaimCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateProvisioningClaimCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateProvisioningClaimResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "CreateProvisioningClaim",
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
  private serialize(input: CreateProvisioningClaimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProvisioningClaimCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProvisioningClaimCommandOutput> {
    return de_CreateProvisioningClaimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
