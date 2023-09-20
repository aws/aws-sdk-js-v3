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

import { ListNodeFromTemplateJobsRequest, ListNodeFromTemplateJobsResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_ListNodeFromTemplateJobsCommand, se_ListNodeFromTemplateJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListNodeFromTemplateJobsCommand}.
 */
export interface ListNodeFromTemplateJobsCommandInput extends ListNodeFromTemplateJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListNodeFromTemplateJobsCommand}.
 */
export interface ListNodeFromTemplateJobsCommandOutput extends ListNodeFromTemplateJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of camera stream node jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListNodeFromTemplateJobsCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListNodeFromTemplateJobsCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // ListNodeFromTemplateJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNodeFromTemplateJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListNodeFromTemplateJobsResponse
 * //   NodeFromTemplateJobs: [ // NodeFromTemplateJobList // required
 * //     { // NodeFromTemplateJob
 * //       JobId: "STRING_VALUE",
 * //       TemplateType: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       NodeName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNodeFromTemplateJobsCommandInput - {@link ListNodeFromTemplateJobsCommandInput}
 * @returns {@link ListNodeFromTemplateJobsCommandOutput}
 * @see {@link ListNodeFromTemplateJobsCommandInput} for command's `input` shape.
 * @see {@link ListNodeFromTemplateJobsCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class ListNodeFromTemplateJobsCommand extends $Command<
  ListNodeFromTemplateJobsCommandInput,
  ListNodeFromTemplateJobsCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: ListNodeFromTemplateJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNodeFromTemplateJobsCommandInput, ListNodeFromTemplateJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNodeFromTemplateJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "ListNodeFromTemplateJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "ListNodeFromTemplateJobs",
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
  private serialize(input: ListNodeFromTemplateJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListNodeFromTemplateJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNodeFromTemplateJobsCommandOutput> {
    return de_ListNodeFromTemplateJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
