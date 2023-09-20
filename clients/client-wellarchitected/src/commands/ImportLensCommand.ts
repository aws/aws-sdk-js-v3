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

import { ImportLensInput, ImportLensOutput } from "../models/models_0";
import { de_ImportLensCommand, se_ImportLensCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportLensCommand}.
 */
export interface ImportLensCommandInput extends ImportLensInput {}
/**
 * @public
 *
 * The output of {@link ImportLensCommand}.
 */
export interface ImportLensCommandOutput extends ImportLensOutput, __MetadataBearer {}

/**
 * @public
 * <p>Import a new custom lens or update an existing custom lens.</p>
 *          <p>To update an existing custom lens, specify its ARN as the  <code>LensAlias</code>. If
 *             no ARN is specified, a new custom lens is created.</p>
 *          <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be
 *             applied to workloads or shared with other Amazon Web Services accounts until it's
 *             published with <a>CreateLensVersion</a>.</p>
 *          <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a>
 *             in the <i>Well-Architected Tool User Guide</i>.</p>
 *          <p>A custom lens cannot exceed 500 KB in size.</p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>Do not include or gather personal identifiable information (PII) of end users or
 *                 other identifiable individuals in or via your custom lenses. If your custom
 *                 lens or those shared with you and used in your account do include or collect
 *                 PII you are responsible for: ensuring that the included PII is processed in accordance
 *                 with applicable law, providing adequate privacy notices, and obtaining necessary
 *                 consents for processing such data.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ImportLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ImportLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ImportLensInput
 *   LensAlias: "STRING_VALUE",
 *   JSONString: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ImportLensCommand(input);
 * const response = await client.send(command);
 * // { // ImportLensOutput
 * //   LensArn: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "COMPLETE" || "ERROR",
 * // };
 *
 * ```
 *
 * @param ImportLensCommandInput - {@link ImportLensCommandInput}
 * @returns {@link ImportLensCommandOutput}
 * @see {@link ImportLensCommandInput} for command's `input` shape.
 * @see {@link ImportLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class ImportLensCommand extends $Command<
  ImportLensCommandInput,
  ImportLensCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: ImportLensCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportLensCommandInput, ImportLensCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportLensCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ImportLensCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "ImportLens",
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
  private serialize(input: ImportLensCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportLensCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportLensCommandOutput> {
    return de_ImportLensCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
