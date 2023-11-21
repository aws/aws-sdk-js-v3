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

import { InspectorScanClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorScanClient";
import { ScanSbomRequest, ScanSbomResponse } from "../models/models_0";
import { de_ScanSbomCommand, se_ScanSbomCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ScanSbomCommand}.
 */
export interface ScanSbomCommandInput extends ScanSbomRequest {}
/**
 * @public
 *
 * The output of {@link ScanSbomCommand}.
 */
export interface ScanSbomCommandOutput extends ScanSbomResponse, __MetadataBearer {}

/**
 * @public
 * <p>Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the <a href="">Amazon Inspector SBOM generator</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorScanClient, ScanSbomCommand } from "@aws-sdk/client-inspector-scan"; // ES Modules import
 * // const { InspectorScanClient, ScanSbomCommand } = require("@aws-sdk/client-inspector-scan"); // CommonJS import
 * const client = new InspectorScanClient(config);
 * const input = { // ScanSbomRequest
 *   sbom: "DOCUMENT_VALUE", // required
 *   outputFormat: "CYCLONE_DX_1_5" || "INSPECTOR",
 * };
 * const command = new ScanSbomCommand(input);
 * const response = await client.send(command);
 * // { // ScanSbomResponse
 * //   sbom: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param ScanSbomCommandInput - {@link ScanSbomCommandInput}
 * @returns {@link ScanSbomCommandOutput}
 * @see {@link ScanSbomCommandInput} for command's `input` shape.
 * @see {@link ScanSbomCommandOutput} for command's `response` shape.
 * @see {@link InspectorScanClientResolvedConfig | config} for InspectorScanClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *   </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.
 *
 *   </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *
 *   </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid inputs.</p>
 *
 * @throws {@link InspectorScanServiceException}
 * <p>Base exception class for all service exceptions from InspectorScan service.</p>
 *
 */
export class ScanSbomCommand extends $Command<
  ScanSbomCommandInput,
  ScanSbomCommandOutput,
  InspectorScanClientResolvedConfig
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
  constructor(readonly input: ScanSbomCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorScanClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ScanSbomCommandInput, ScanSbomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ScanSbomCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorScanClient";
    const commandName = "ScanSbomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorScan",
        operation: "ScanSbom",
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
  private serialize(input: ScanSbomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ScanSbomCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScanSbomCommandOutput> {
    return de_ScanSbomCommand(output, context);
  }
}
