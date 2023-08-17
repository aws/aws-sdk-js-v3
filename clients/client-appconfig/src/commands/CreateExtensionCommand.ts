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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { CreateExtensionRequest, Extension } from "../models/models_0";
import { de_CreateExtensionCommand, se_CreateExtensionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateExtensionCommand}.
 */
export interface CreateExtensionCommandInput extends CreateExtensionRequest {}
/**
 * @public
 *
 * The output of {@link CreateExtensionCommand}.
 */
export interface CreateExtensionCommandOutput extends Extension, __MetadataBearer {}

/**
 * @public
 * <p>Creates an AppConfig extension. An extension augments your ability to inject
 *          logic or behavior at different points during the AppConfig workflow of creating
 *          or deploying a configuration.</p>
 *          <p>You can create your own extensions or use the Amazon Web Services authored extensions provided by
 *             AppConfig. For most use cases, to create your own extension, you must create
 *          an Lambda function to perform any computation and processing defined in the
 *          extension. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
 *                AppConfig extensions</a> in the
 *          <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateExtensionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateExtensionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // CreateExtensionRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Actions: { // ActionsMap // required
 *     "<keys>": [ // ActionList
 *       { // Action
 *         Name: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         Uri: "STRING_VALUE",
 *         RoleArn: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Parameters: { // ParameterMap
 *     "<keys>": { // Parameter
 *       Description: "STRING_VALUE",
 *       Required: true || false,
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   LatestVersionNumber: Number("int"),
 * };
 * const command = new CreateExtensionCommand(input);
 * const response = await client.send(command);
 * // { // Extension
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionNumber: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Actions: { // ActionsMap
 * //     "<keys>": [ // ActionList
 * //       { // Action
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Uri: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Parameters: { // ParameterMap
 * //     "<keys>": { // Parameter
 * //       Description: "STRING_VALUE",
 * //       Required: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateExtensionCommandInput - {@link CreateExtensionCommandInput}
 * @returns {@link CreateExtensionCommandOutput}
 * @see {@link CreateExtensionCommandInput} for command's `input` shape.
 * @see {@link CreateExtensionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of hosted configuration versions exceeds the limit for the AppConfig hosted configuration store. Delete one or more versions and try again.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 */
export class CreateExtensionCommand extends $Command<
  CreateExtensionCommandInput,
  CreateExtensionCommandOutput,
  AppConfigClientResolvedConfig
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
  constructor(readonly input: CreateExtensionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExtensionCommandInput, CreateExtensionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExtensionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "CreateExtensionCommand";
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
  private serialize(input: CreateExtensionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateExtensionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExtensionCommandOutput> {
    return de_CreateExtensionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
