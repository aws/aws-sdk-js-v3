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

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { GetScanRequest, GetScanResponse } from "../models/models_0";
import { de_GetScanCommand, se_GetScanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetScanCommand}.
 */
export interface GetScanCommandInput extends GetScanRequest {}
/**
 * @public
 *
 * The output of {@link GetScanCommand}.
 */
export interface GetScanCommandOutput extends GetScanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about a scan, including whether or not a scan has completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, GetScanCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, GetScanCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // GetScanRequest
 *   scanName: "STRING_VALUE", // required
 *   runId: "STRING_VALUE",
 * };
 * const command = new GetScanCommand(input);
 * const response = await client.send(command);
 * // { // GetScanResponse
 * //   scanName: "STRING_VALUE", // required
 * //   runId: "STRING_VALUE", // required
 * //   scanState: "InProgress" || "Successful" || "Failed", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   analysisType: "Security" || "All", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   numberOfRevisions: Number("long"),
 * //   scanNameArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetScanCommandInput - {@link GetScanCommandInput}
 * @returns {@link GetScanCommandOutput}
 * @see {@link GetScanCommandInput} for command's `input` shape.
 * @see {@link GetScanCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 */
export class GetScanCommand extends $Command<
  GetScanCommandInput,
  GetScanCommandOutput,
  CodeGuruSecurityClientResolvedConfig
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
  constructor(readonly input: GetScanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruSecurityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetScanCommandInput, GetScanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetScanCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruSecurityClient";
    const commandName = "GetScanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsCodeGuruSecurity",
        operation: "GetScan",
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
  private serialize(input: GetScanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetScanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetScanCommandOutput> {
    return de_GetScanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
