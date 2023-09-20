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
import { GetFunctionDefinitionVersionRequest, GetFunctionDefinitionVersionResponse } from "../models/models_0";
import {
  de_GetFunctionDefinitionVersionCommand,
  se_GetFunctionDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFunctionDefinitionVersionCommand}.
 */
export interface GetFunctionDefinitionVersionCommandInput extends GetFunctionDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionDefinitionVersionCommand}.
 */
export interface GetFunctionDefinitionVersionCommandOutput
  extends GetFunctionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetFunctionDefinitionVersionRequest
 *   FunctionDefinitionId: "STRING_VALUE", // required
 *   FunctionDefinitionVersionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // FunctionDefinitionVersion
 * //     DefaultConfig: { // FunctionDefaultConfig
 * //       Execution: { // FunctionDefaultExecutionConfig
 * //         IsolationMode: "GreengrassContainer" || "NoContainer",
 * //         RunAs: { // FunctionRunAsConfig
 * //           Gid: Number("int"),
 * //           Uid: Number("int"),
 * //         },
 * //       },
 * //     },
 * //     Functions: [ // __listOfFunction
 * //       { // Function
 * //         FunctionArn: "STRING_VALUE",
 * //         FunctionConfiguration: { // FunctionConfiguration
 * //           EncodingType: "binary" || "json",
 * //           Environment: { // FunctionConfigurationEnvironment
 * //             AccessSysfs: true || false,
 * //             Execution: { // FunctionExecutionConfig
 * //               IsolationMode: "GreengrassContainer" || "NoContainer",
 * //               RunAs: {
 * //                 Gid: Number("int"),
 * //                 Uid: Number("int"),
 * //               },
 * //             },
 * //             ResourceAccessPolicies: [ // __listOfResourceAccessPolicy
 * //               { // ResourceAccessPolicy
 * //                 Permission: "ro" || "rw",
 * //                 ResourceId: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             Variables: { // __mapOf__string
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           ExecArgs: "STRING_VALUE",
 * //           Executable: "STRING_VALUE",
 * //           MemorySize: Number("int"),
 * //           Pinned: true || false,
 * //           Timeout: Number("int"),
 * //           FunctionRuntimeOverride: "STRING_VALUE",
 * //         },
 * //         Id: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFunctionDefinitionVersionCommandInput - {@link GetFunctionDefinitionVersionCommandInput}
 * @returns {@link GetFunctionDefinitionVersionCommandOutput}
 * @see {@link GetFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetFunctionDefinitionVersionCommand extends $Command<
  GetFunctionDefinitionVersionCommandInput,
  GetFunctionDefinitionVersionCommandOutput,
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
  constructor(readonly input: GetFunctionDefinitionVersionCommandInput) {
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
  ): Handler<GetFunctionDefinitionVersionCommandInput, GetFunctionDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFunctionDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetFunctionDefinitionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "GetFunctionDefinitionVersion",
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
  private serialize(input: GetFunctionDefinitionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFunctionDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFunctionDefinitionVersionCommandOutput> {
    return de_GetFunctionDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
