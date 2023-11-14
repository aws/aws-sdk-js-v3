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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import {
  StartDevEnvironmentSessionRequest,
  StartDevEnvironmentSessionResponse,
  StartDevEnvironmentSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartDevEnvironmentSessionCommand, se_StartDevEnvironmentSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDevEnvironmentSessionCommand}.
 */
export interface StartDevEnvironmentSessionCommandInput extends StartDevEnvironmentSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartDevEnvironmentSessionCommand}.
 */
export interface StartDevEnvironmentSessionCommandOutput extends StartDevEnvironmentSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a session for a specified Dev Environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, StartDevEnvironmentSessionCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, StartDevEnvironmentSessionCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // StartDevEnvironmentSessionRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   sessionConfiguration: { // DevEnvironmentSessionConfiguration
 *     sessionType: "STRING_VALUE", // required
 *     executeCommandSessionConfiguration: { // ExecuteCommandSessionConfiguration
 *       command: "STRING_VALUE", // required
 *       arguments: [ // ExecuteCommandSessionConfigurationArguments
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new StartDevEnvironmentSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartDevEnvironmentSessionResponse
 * //   accessDetails: { // DevEnvironmentAccessDetails
 * //     streamUrl: "STRING_VALUE", // required
 * //     tokenValue: "STRING_VALUE", // required
 * //   },
 * //   sessionId: "STRING_VALUE",
 * //   spaceName: "STRING_VALUE", // required
 * //   projectName: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartDevEnvironmentSessionCommandInput - {@link StartDevEnvironmentSessionCommandInput}
 * @returns {@link StartDevEnvironmentSessionCommandOutput}
 * @see {@link StartDevEnvironmentSessionCommandInput} for command's `input` shape.
 * @see {@link StartDevEnvironmentSessionCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 */
export class StartDevEnvironmentSessionCommand extends $Command<
  StartDevEnvironmentSessionCommandInput,
  StartDevEnvironmentSessionCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartDevEnvironmentSessionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDevEnvironmentSessionCommandInput, StartDevEnvironmentSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDevEnvironmentSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "StartDevEnvironmentSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: StartDevEnvironmentSessionResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCatalyst",
        operation: "StartDevEnvironmentSession",
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
  private serialize(input: StartDevEnvironmentSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartDevEnvironmentSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDevEnvironmentSessionCommandOutput> {
    return de_StartDevEnvironmentSessionCommand(output, context);
  }
}
