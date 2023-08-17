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

import { StartReadSetExportJobRequest, StartReadSetExportJobResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_StartReadSetExportJobCommand, se_StartReadSetExportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartReadSetExportJobCommand}.
 */
export interface StartReadSetExportJobCommandInput extends StartReadSetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartReadSetExportJobCommand}.
 */
export interface StartReadSetExportJobCommandOutput extends StartReadSetExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Exports a read set to Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartReadSetExportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartReadSetExportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // StartReadSetExportJobRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   destination: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sources: [ // ExportReadSetList // required
 *     { // ExportReadSet
 *       readSetId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartReadSetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartReadSetExportJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   destination: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartReadSetExportJobCommandInput - {@link StartReadSetExportJobCommandInput}
 * @returns {@link StartReadSetExportJobCommandOutput}
 * @see {@link StartReadSetExportJobCommandInput} for command's `input` shape.
 * @see {@link StartReadSetExportJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class StartReadSetExportJobCommand extends $Command<
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
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
  constructor(readonly input: StartReadSetExportJobCommandInput) {
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
  ): Handler<StartReadSetExportJobCommandInput, StartReadSetExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartReadSetExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "StartReadSetExportJobCommand";
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
  private serialize(input: StartReadSetExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartReadSetExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartReadSetExportJobCommandOutput> {
    return de_StartReadSetExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
