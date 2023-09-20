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

import { DescribeAvailablePatchesRequest, DescribeAvailablePatchesResult } from "../models/models_0";
import { de_DescribeAvailablePatchesCommand, se_DescribeAvailablePatchesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAvailablePatchesCommand}.
 */
export interface DescribeAvailablePatchesCommandInput extends DescribeAvailablePatchesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAvailablePatchesCommand}.
 */
export interface DescribeAvailablePatchesCommandOutput extends DescribeAvailablePatchesResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists all patches eligible to be included in a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAvailablePatchesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAvailablePatchesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeAvailablePatchesRequest
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAvailablePatchesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAvailablePatchesResult
 * //   Patches: [ // PatchList
 * //     { // Patch
 * //       Id: "STRING_VALUE",
 * //       ReleaseDate: new Date("TIMESTAMP"),
 * //       Title: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ContentUrl: "STRING_VALUE",
 * //       Vendor: "STRING_VALUE",
 * //       ProductFamily: "STRING_VALUE",
 * //       Product: "STRING_VALUE",
 * //       Classification: "STRING_VALUE",
 * //       MsrcSeverity: "STRING_VALUE",
 * //       KbNumber: "STRING_VALUE",
 * //       MsrcNumber: "STRING_VALUE",
 * //       Language: "STRING_VALUE",
 * //       AdvisoryIds: [ // PatchAdvisoryIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       BugzillaIds: [ // PatchBugzillaIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       CVEIds: [ // PatchCVEIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       Epoch: Number("int"),
 * //       Version: "STRING_VALUE",
 * //       Release: "STRING_VALUE",
 * //       Arch: "STRING_VALUE",
 * //       Severity: "STRING_VALUE",
 * //       Repository: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAvailablePatchesCommandInput - {@link DescribeAvailablePatchesCommandInput}
 * @returns {@link DescribeAvailablePatchesCommandOutput}
 * @see {@link DescribeAvailablePatchesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailablePatchesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeAvailablePatchesCommand extends $Command<
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DescribeAvailablePatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAvailablePatchesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAvailablePatchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DescribeAvailablePatches",
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
  private serialize(input: DescribeAvailablePatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAvailablePatchesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAvailablePatchesCommandOutput> {
    return de_DescribeAvailablePatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
