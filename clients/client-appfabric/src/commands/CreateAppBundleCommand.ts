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

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { CreateAppBundleRequest, CreateAppBundleResponse } from "../models/models_0";
import { de_CreateAppBundleCommand, se_CreateAppBundleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppBundleCommand}.
 */
export interface CreateAppBundleCommandInput extends CreateAppBundleRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppBundleCommand}.
 */
export interface CreateAppBundleCommandOutput extends CreateAppBundleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an app bundle to collect data from an application using AppFabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, CreateAppBundleCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, CreateAppBundleCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // CreateAppBundleRequest
 *   clientToken: "STRING_VALUE",
 *   customerManagedKeyIdentifier: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAppBundleCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppBundleResponse
 * //   appBundle: { // AppBundle
 * //     arn: "STRING_VALUE", // required
 * //     customerManagedKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAppBundleCommandInput - {@link CreateAppBundleCommandInput}
 * @returns {@link CreateAppBundleCommandOutput}
 * @see {@link CreateAppBundleCommandInput} for command's `input` shape.
 * @see {@link CreateAppBundleCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has created a conflict. Check the request parameters and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 */
export class CreateAppBundleCommand extends $Command<
  CreateAppBundleCommandInput,
  CreateAppBundleCommandOutput,
  AppFabricClientResolvedConfig
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
  constructor(readonly input: CreateAppBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppFabricClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppBundleCommandInput, CreateAppBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppBundleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppFabricClient";
    const commandName = "CreateAppBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FabricFrontEndService",
        operation: "CreateAppBundle",
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
  private serialize(input: CreateAppBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppBundleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppBundleCommandOutput> {
    return de_CreateAppBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
