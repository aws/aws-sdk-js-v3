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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionVersionRequest, CreateFunctionDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateFunctionDefinitionVersionCommand,
  se_CreateFunctionDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFunctionDefinitionVersionCommand}.
 */
export interface CreateFunctionDefinitionVersionCommandInput extends CreateFunctionDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFunctionDefinitionVersionCommand}.
 */
export interface CreateFunctionDefinitionVersionCommandOutput
  extends CreateFunctionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * Creates a version of a Lambda function definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateFunctionDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   DefaultConfig: { // FunctionDefaultConfig
 *     Execution: { // FunctionDefaultExecutionConfig
 *       IsolationMode: "GreengrassContainer" || "NoContainer",
 *       RunAs: { // FunctionRunAsConfig
 *         Gid: Number("int"),
 *         Uid: Number("int"),
 *       },
 *     },
 *   },
 *   FunctionDefinitionId: "STRING_VALUE", // required
 *   Functions: [ // __listOfFunction
 *     { // Function
 *       FunctionArn: "STRING_VALUE",
 *       FunctionConfiguration: { // FunctionConfiguration
 *         EncodingType: "binary" || "json",
 *         Environment: { // FunctionConfigurationEnvironment
 *           AccessSysfs: true || false,
 *           Execution: { // FunctionExecutionConfig
 *             IsolationMode: "GreengrassContainer" || "NoContainer",
 *             RunAs: {
 *               Gid: Number("int"),
 *               Uid: Number("int"),
 *             },
 *           },
 *           ResourceAccessPolicies: [ // __listOfResourceAccessPolicy
 *             { // ResourceAccessPolicy
 *               Permission: "ro" || "rw",
 *               ResourceId: "STRING_VALUE", // required
 *             },
 *           ],
 *           Variables: { // __mapOf__string
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         ExecArgs: "STRING_VALUE",
 *         Executable: "STRING_VALUE",
 *         MemorySize: Number("int"),
 *         Pinned: true || false,
 *         Timeout: Number("int"),
 *         FunctionRuntimeOverride: "STRING_VALUE",
 *       },
 *       Id: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFunctionDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFunctionDefinitionVersionCommandInput - {@link CreateFunctionDefinitionVersionCommandInput}
 * @returns {@link CreateFunctionDefinitionVersionCommandOutput}
 * @see {@link CreateFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class CreateFunctionDefinitionVersionCommand extends $Command<
  CreateFunctionDefinitionVersionCommandInput,
  CreateFunctionDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: CreateFunctionDefinitionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFunctionDefinitionVersionCommandInput, CreateFunctionDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFunctionDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateFunctionDefinitionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "CreateFunctionDefinitionVersion",
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
    input: CreateFunctionDefinitionVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateFunctionDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFunctionDefinitionVersionCommandOutput> {
    return de_CreateFunctionDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
