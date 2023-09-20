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

import { DescribeRuntimeVersionsRequest, DescribeRuntimeVersionsResponse } from "../models/models_0";
import { de_DescribeRuntimeVersionsCommand, se_DescribeRuntimeVersionsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuntimeVersionsCommand}.
 */
export interface DescribeRuntimeVersionsCommandInput extends DescribeRuntimeVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuntimeVersionsCommand}.
 */
export interface DescribeRuntimeVersionsCommandOutput extends DescribeRuntimeVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of Synthetics canary runtime versions. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
 *             Canary Runtime Versions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeRuntimeVersionsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeRuntimeVersionsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // DescribeRuntimeVersionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRuntimeVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuntimeVersionsResponse
 * //   RuntimeVersions: [ // RuntimeVersionList
 * //     { // RuntimeVersion
 * //       VersionName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ReleaseDate: new Date("TIMESTAMP"),
 * //       DeprecationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRuntimeVersionsCommandInput - {@link DescribeRuntimeVersionsCommandInput}
 * @returns {@link DescribeRuntimeVersionsCommandOutput}
 * @see {@link DescribeRuntimeVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRuntimeVersionsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 */
export class DescribeRuntimeVersionsCommand extends $Command<
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
  SyntheticsClientResolvedConfig
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
  constructor(readonly input: DescribeRuntimeVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRuntimeVersionsCommandInput, DescribeRuntimeVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRuntimeVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "DescribeRuntimeVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Synthetics",
        operation: "DescribeRuntimeVersions",
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
  private serialize(input: DescribeRuntimeVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRuntimeVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRuntimeVersionsCommandOutput> {
    return de_DescribeRuntimeVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
