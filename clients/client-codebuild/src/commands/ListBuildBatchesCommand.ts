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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListBuildBatchesInput, ListBuildBatchesOutput } from "../models/models_0";
import { de_ListBuildBatchesCommand, se_ListBuildBatchesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBuildBatchesCommand}.
 */
export interface ListBuildBatchesCommandInput extends ListBuildBatchesInput {}
/**
 * @public
 *
 * The output of {@link ListBuildBatchesCommand}.
 */
export interface ListBuildBatchesCommandOutput extends ListBuildBatchesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the identifiers of your build batches in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildBatchesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildBatchesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // ListBuildBatchesInput
 *   filter: { // BuildBatchFilter
 *     status: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 *   },
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBuildBatchesCommand(input);
 * const response = await client.send(command);
 * // { // ListBuildBatchesOutput
 * //   ids: [ // BuildBatchIds
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBuildBatchesCommandInput - {@link ListBuildBatchesCommandInput}
 * @returns {@link ListBuildBatchesCommandOutput}
 * @see {@link ListBuildBatchesCommandInput} for command's `input` shape.
 * @see {@link ListBuildBatchesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class ListBuildBatchesCommand extends $Command<
  ListBuildBatchesCommandInput,
  ListBuildBatchesCommandOutput,
  CodeBuildClientResolvedConfig
> {
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
  constructor(readonly input: ListBuildBatchesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBuildBatchesCommandInput, ListBuildBatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBuildBatchesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListBuildBatchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "ListBuildBatches",
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
  private serialize(input: ListBuildBatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBuildBatchesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBuildBatchesCommandOutput> {
    return de_ListBuildBatchesCommand(output, context);
  }
}
