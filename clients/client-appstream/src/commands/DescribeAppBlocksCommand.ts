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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeAppBlocksRequest, DescribeAppBlocksResult } from "../models/models_0";
import { de_DescribeAppBlocksCommand, se_DescribeAppBlocksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppBlocksCommand}.
 */
export interface DescribeAppBlocksCommandInput extends DescribeAppBlocksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppBlocksCommand}.
 */
export interface DescribeAppBlocksCommandOutput extends DescribeAppBlocksResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes one or more app blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeAppBlocksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeAppBlocksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeAppBlocksRequest
 *   Arns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeAppBlocksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppBlocksResult
 * //   AppBlocks: [ // AppBlocks
 * //     { // AppBlock
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       SourceS3Location: { // S3Location
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       SetupScriptDetails: { // ScriptDetails
 * //         ScriptS3Location: {
 * //           S3Bucket: "STRING_VALUE", // required
 * //           S3Key: "STRING_VALUE",
 * //         },
 * //         ExecutablePath: "STRING_VALUE", // required
 * //         ExecutableParameters: "STRING_VALUE",
 * //         TimeoutInSeconds: Number("int"), // required
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       PostSetupScriptDetails: {
 * //         ScriptS3Location: {
 * //           S3Bucket: "STRING_VALUE", // required
 * //           S3Key: "STRING_VALUE",
 * //         },
 * //         ExecutablePath: "STRING_VALUE", // required
 * //         ExecutableParameters: "STRING_VALUE",
 * //         TimeoutInSeconds: Number("int"), // required
 * //       },
 * //       PackagingType: "CUSTOM" || "APPSTREAM2",
 * //       State: "INACTIVE" || "ACTIVE",
 * //       AppBlockErrors: [ // ErrorDetailsList
 * //         { // ErrorDetails
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAppBlocksCommandInput - {@link DescribeAppBlocksCommandInput}
 * @returns {@link DescribeAppBlocksCommandOutput}
 * @see {@link DescribeAppBlocksCommandInput} for command's `input` shape.
 * @see {@link DescribeAppBlocksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class DescribeAppBlocksCommand extends $Command<
  DescribeAppBlocksCommandInput,
  DescribeAppBlocksCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: DescribeAppBlocksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppBlocksCommandInput, DescribeAppBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppBlocksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeAppBlocksCommand";
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
  private serialize(input: DescribeAppBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAppBlocksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppBlocksCommandOutput> {
    return de_DescribeAppBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
