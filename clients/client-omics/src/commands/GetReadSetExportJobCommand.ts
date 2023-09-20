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

import { GetReadSetExportJobRequest, GetReadSetExportJobResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetReadSetExportJobCommand, se_GetReadSetExportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReadSetExportJobCommand}.
 */
export interface GetReadSetExportJobCommandInput extends GetReadSetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetReadSetExportJobCommand}.
 */
export interface GetReadSetExportJobCommandOutput extends GetReadSetExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a read set export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetExportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetExportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetReadSetExportJobRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetReadSetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetReadSetExportJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   destination: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusMessage: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   completionTime: new Date("TIMESTAMP"),
 * //   readSets: [ // ExportReadSetDetailList
 * //     { // ExportReadSetDetail
 * //       id: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReadSetExportJobCommandInput - {@link GetReadSetExportJobCommandInput}
 * @returns {@link GetReadSetExportJobCommandOutput}
 * @see {@link GetReadSetExportJobCommandInput} for command's `input` shape.
 * @see {@link GetReadSetExportJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 */
export class GetReadSetExportJobCommand extends $Command<
  GetReadSetExportJobCommandInput,
  GetReadSetExportJobCommandOutput,
  OmicsClientResolvedConfig
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
  constructor(readonly input: GetReadSetExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReadSetExportJobCommandInput, GetReadSetExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReadSetExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetReadSetExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "GetReadSetExportJob",
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
  private serialize(input: GetReadSetExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetReadSetExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReadSetExportJobCommandOutput> {
    return de_GetReadSetExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
