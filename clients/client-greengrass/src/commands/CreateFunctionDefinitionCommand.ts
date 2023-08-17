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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionRequest, CreateFunctionDefinitionResponse } from "../models/models_0";
import { de_CreateFunctionDefinitionCommand, se_CreateFunctionDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFunctionDefinitionCommand}.
 */
export interface CreateFunctionDefinitionCommandInput extends CreateFunctionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFunctionDefinitionCommand}.
 */
export interface CreateFunctionDefinitionCommandOutput extends CreateFunctionDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateFunctionDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // FunctionDefinitionVersion
 *     DefaultConfig: { // FunctionDefaultConfig
 *       Execution: { // FunctionDefaultExecutionConfig
 *         IsolationMode: "GreengrassContainer" || "NoContainer",
 *         RunAs: { // FunctionRunAsConfig
 *           Gid: Number("int"),
 *           Uid: Number("int"),
 *         },
 *       },
 *     },
 *     Functions: [ // __listOfFunction
 *       { // Function
 *         FunctionArn: "STRING_VALUE",
 *         FunctionConfiguration: { // FunctionConfiguration
 *           EncodingType: "binary" || "json",
 *           Environment: { // FunctionConfigurationEnvironment
 *             AccessSysfs: true || false,
 *             Execution: { // FunctionExecutionConfig
 *               IsolationMode: "GreengrassContainer" || "NoContainer",
 *               RunAs: {
 *                 Gid: Number("int"),
 *                 Uid: Number("int"),
 *               },
 *             },
 *             ResourceAccessPolicies: [ // __listOfResourceAccessPolicy
 *               { // ResourceAccessPolicy
 *                 Permission: "ro" || "rw",
 *                 ResourceId: "STRING_VALUE", // required
 *               },
 *             ],
 *             Variables: { // __mapOf__string
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           ExecArgs: "STRING_VALUE",
 *           Executable: "STRING_VALUE",
 *           MemorySize: Number("int"),
 *           Pinned: true || false,
 *           Timeout: Number("int"),
 *           FunctionRuntimeOverride: "STRING_VALUE",
 *         },
 *         Id: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   Name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFunctionDefinitionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFunctionDefinitionCommandInput - {@link CreateFunctionDefinitionCommandInput}
 * @returns {@link CreateFunctionDefinitionCommandOutput}
 * @see {@link CreateFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class CreateFunctionDefinitionCommand extends $Command<
  CreateFunctionDefinitionCommandInput,
  CreateFunctionDefinitionCommandOutput,
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
  constructor(readonly input: CreateFunctionDefinitionCommandInput) {
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
  ): Handler<CreateFunctionDefinitionCommandInput, CreateFunctionDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFunctionDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateFunctionDefinitionCommand";
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
  private serialize(input: CreateFunctionDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFunctionDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFunctionDefinitionCommandOutput> {
    return de_CreateFunctionDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
