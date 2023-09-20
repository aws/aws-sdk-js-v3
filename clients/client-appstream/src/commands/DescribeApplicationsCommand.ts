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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeApplicationsRequest, DescribeApplicationsResult } from "../models/models_0";
import { de_DescribeApplicationsCommand, se_DescribeApplicationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandInput extends DescribeApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandOutput extends DescribeApplicationsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes one or more applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeApplicationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeApplicationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeApplicationsRequest
 *   Arns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationsResult
 * //   Applications: [ // Applications
 * //     { // Application
 * //       Name: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       IconURL: "STRING_VALUE",
 * //       LaunchPath: "STRING_VALUE",
 * //       LaunchParameters: "STRING_VALUE",
 * //       Enabled: true || false,
 * //       Metadata: { // Metadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       WorkingDirectory: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       AppBlockArn: "STRING_VALUE",
 * //       IconS3Location: { // S3Location
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       Platforms: [ // Platforms
 * //         "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "AMAZON_LINUX2",
 * //       ],
 * //       InstanceFamilies: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationsCommandInput - {@link DescribeApplicationsCommandInput}
 * @returns {@link DescribeApplicationsCommandOutput}
 * @see {@link DescribeApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationsCommandOutput} for command's `response` shape.
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
export class DescribeApplicationsCommand extends $Command<
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
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
  constructor(readonly input: DescribeApplicationsCommandInput) {
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
  ): Handler<DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "DescribeApplications",
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
  private serialize(input: DescribeApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeApplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApplicationsCommandOutput> {
    return de_DescribeApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
