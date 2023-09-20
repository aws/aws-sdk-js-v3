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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import {
  GetManagedEndpointSessionCredentialsRequest,
  GetManagedEndpointSessionCredentialsResponse,
  GetManagedEndpointSessionCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetManagedEndpointSessionCredentialsCommand,
  se_GetManagedEndpointSessionCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetManagedEndpointSessionCredentialsCommand}.
 */
export interface GetManagedEndpointSessionCredentialsCommandInput extends GetManagedEndpointSessionCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedEndpointSessionCredentialsCommand}.
 */
export interface GetManagedEndpointSessionCredentialsCommandOutput
  extends GetManagedEndpointSessionCredentialsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Generate a session token to connect to a managed endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, GetManagedEndpointSessionCredentialsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, GetManagedEndpointSessionCredentialsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // GetManagedEndpointSessionCredentialsRequest
 *   endpointIdentifier: "STRING_VALUE", // required
 *   virtualClusterIdentifier: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE", // required
 *   credentialType: "STRING_VALUE", // required
 *   durationInSeconds: Number("int"),
 *   logContext: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new GetManagedEndpointSessionCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedEndpointSessionCredentialsResponse
 * //   id: "STRING_VALUE",
 * //   credentials: { // Credentials Union: only one key present
 * //     token: "STRING_VALUE",
 * //   },
 * //   expiresAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetManagedEndpointSessionCredentialsCommandInput - {@link GetManagedEndpointSessionCredentialsCommandInput}
 * @returns {@link GetManagedEndpointSessionCredentialsCommandOutput}
 * @see {@link GetManagedEndpointSessionCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetManagedEndpointSessionCredentialsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link RequestThrottledException} (client fault)
 *  <p>The request throttled.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 */
export class GetManagedEndpointSessionCredentialsCommand extends $Command<
  GetManagedEndpointSessionCredentialsCommandInput,
  GetManagedEndpointSessionCredentialsCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: GetManagedEndpointSessionCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetManagedEndpointSessionCredentialsCommandInput, GetManagedEndpointSessionCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetManagedEndpointSessionCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "GetManagedEndpointSessionCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetManagedEndpointSessionCredentialsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsChicagoWebService",
        operation: "GetManagedEndpointSessionCredentials",
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
    input: GetManagedEndpointSessionCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetManagedEndpointSessionCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetManagedEndpointSessionCredentialsCommandOutput> {
    return de_GetManagedEndpointSessionCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
