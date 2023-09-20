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

import { ListAppImageConfigsRequest, ListAppImageConfigsResponse } from "../models/models_3";
import { de_ListAppImageConfigsCommand, se_ListAppImageConfigsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppImageConfigsCommand}.
 */
export interface ListAppImageConfigsCommandInput extends ListAppImageConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppImageConfigsCommand}.
 */
export interface ListAppImageConfigsCommandOutput extends ListAppImageConfigsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the AppImageConfigs in your account and their properties. The list can be
 *         filtered by creation time or modified time, and whether the AppImageConfig name contains
 *         a specified string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAppImageConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAppImageConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListAppImageConfigsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   ModifiedTimeBefore: new Date("TIMESTAMP"),
 *   ModifiedTimeAfter: new Date("TIMESTAMP"),
 *   SortBy: "CreationTime" || "LastModifiedTime" || "Name",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListAppImageConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppImageConfigsResponse
 * //   NextToken: "STRING_VALUE",
 * //   AppImageConfigs: [ // AppImageConfigList
 * //     { // AppImageConfigDetails
 * //       AppImageConfigArn: "STRING_VALUE",
 * //       AppImageConfigName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       KernelGatewayImageConfig: { // KernelGatewayImageConfig
 * //         KernelSpecs: [ // KernelSpecs // required
 * //           { // KernelSpec
 * //             Name: "STRING_VALUE", // required
 * //             DisplayName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         FileSystemConfig: { // FileSystemConfig
 * //           MountPath: "STRING_VALUE",
 * //           DefaultUid: Number("int"),
 * //           DefaultGid: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAppImageConfigsCommandInput - {@link ListAppImageConfigsCommandInput}
 * @returns {@link ListAppImageConfigsCommandOutput}
 * @see {@link ListAppImageConfigsCommandInput} for command's `input` shape.
 * @see {@link ListAppImageConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListAppImageConfigsCommand extends $Command<
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListAppImageConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppImageConfigsCommandInput, ListAppImageConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppImageConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListAppImageConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListAppImageConfigs",
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
  private serialize(input: ListAppImageConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppImageConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppImageConfigsCommandOutput> {
    return de_ListAppImageConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
