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

import { GetCanaryRunsRequest, GetCanaryRunsResponse } from "../models/models_0";
import { de_GetCanaryRunsCommand, se_GetCanaryRunsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCanaryRunsCommand}.
 */
export interface GetCanaryRunsCommandInput extends GetCanaryRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetCanaryRunsCommand}.
 */
export interface GetCanaryRunsCommandOutput extends GetCanaryRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of runs for a specified canary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryRunsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryRunsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // GetCanaryRunsRequest
 *   Name: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetCanaryRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetCanaryRunsResponse
 * //   CanaryRuns: [ // CanaryRuns
 * //     { // CanaryRun
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: { // CanaryRunStatus
 * //         State: "STRING_VALUE",
 * //         StateReason: "STRING_VALUE",
 * //         StateReasonCode: "STRING_VALUE",
 * //       },
 * //       Timeline: { // CanaryRunTimeline
 * //         Started: new Date("TIMESTAMP"),
 * //         Completed: new Date("TIMESTAMP"),
 * //       },
 * //       ArtifactS3Location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCanaryRunsCommandInput - {@link GetCanaryRunsCommandInput}
 * @returns {@link GetCanaryRunsCommandOutput}
 * @see {@link GetCanaryRunsCommandInput} for command's `input` shape.
 * @see {@link GetCanaryRunsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 */
export class GetCanaryRunsCommand extends $Command<
  GetCanaryRunsCommandInput,
  GetCanaryRunsCommandOutput,
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
  constructor(readonly input: GetCanaryRunsCommandInput) {
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
  ): Handler<GetCanaryRunsCommandInput, GetCanaryRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetCanaryRunsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "GetCanaryRunsCommand";
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
  private serialize(input: GetCanaryRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCanaryRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCanaryRunsCommandOutput> {
    return de_GetCanaryRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
