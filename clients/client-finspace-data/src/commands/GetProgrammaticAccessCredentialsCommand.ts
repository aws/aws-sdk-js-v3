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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { GetProgrammaticAccessCredentialsRequest, GetProgrammaticAccessCredentialsResponse } from "../models/models_0";
import {
  de_GetProgrammaticAccessCredentialsCommand,
  se_GetProgrammaticAccessCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProgrammaticAccessCredentialsCommand}.
 */
export interface GetProgrammaticAccessCredentialsCommandInput extends GetProgrammaticAccessCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetProgrammaticAccessCredentialsCommand}.
 */
export interface GetProgrammaticAccessCredentialsCommandOutput
  extends GetProgrammaticAccessCredentialsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Request programmatic credentials to use with FinSpace SDK.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // GetProgrammaticAccessCredentialsRequest
 *   durationInMinutes: Number("long"),
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new GetProgrammaticAccessCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetProgrammaticAccessCredentialsResponse
 * //   credentials: { // Credentials
 * //     accessKeyId: "STRING_VALUE",
 * //     secretAccessKey: "STRING_VALUE",
 * //     sessionToken: "STRING_VALUE",
 * //   },
 * //   durationInMinutes: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetProgrammaticAccessCredentialsCommandInput - {@link GetProgrammaticAccessCredentialsCommandInput}
 * @returns {@link GetProgrammaticAccessCredentialsCommandOutput}
 * @see {@link GetProgrammaticAccessCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetProgrammaticAccessCredentialsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 */
export class GetProgrammaticAccessCredentialsCommand extends $Command<
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
  FinspaceDataClientResolvedConfig
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
  constructor(readonly input: GetProgrammaticAccessCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProgrammaticAccessCredentialsCommandInput, GetProgrammaticAccessCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProgrammaticAccessCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetProgrammaticAccessCredentialsCommand";
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
  private serialize(
    input: GetProgrammaticAccessCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetProgrammaticAccessCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProgrammaticAccessCredentialsCommandOutput> {
    return de_GetProgrammaticAccessCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
