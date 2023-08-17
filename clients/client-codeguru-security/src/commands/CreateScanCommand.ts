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

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { CreateScanRequest, CreateScanResponse } from "../models/models_0";
import { de_CreateScanCommand, se_CreateScanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateScanCommand}.
 */
export interface CreateScanCommandInput extends CreateScanRequest {}
/**
 * @public
 *
 * The output of {@link CreateScanCommand}.
 */
export interface CreateScanCommandOutput extends CreateScanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use to create a scan using code uploaded to an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, CreateScanCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, CreateScanCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // CreateScanRequest
 *   clientToken: "STRING_VALUE",
 *   resourceId: { // ResourceId Union: only one key present
 *     codeArtifactId: "STRING_VALUE",
 *   },
 *   scanName: "STRING_VALUE", // required
 *   scanType: "Standard" || "Express",
 *   analysisType: "Security" || "All",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScanCommand(input);
 * const response = await client.send(command);
 * // { // CreateScanResponse
 * //   scanName: "STRING_VALUE", // required
 * //   runId: "STRING_VALUE", // required
 * //   resourceId: { // ResourceId Union: only one key present
 * //     codeArtifactId: "STRING_VALUE",
 * //   },
 * //   scanState: "InProgress" || "Successful" || "Failed", // required
 * //   scanNameArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateScanCommandInput - {@link CreateScanCommandInput}
 * @returns {@link CreateScanCommandOutput}
 * @see {@link CreateScanCommandInput} for command's `input` shape.
 * @see {@link CreateScanCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *       resource associated with the request. Resolve the conflict before retrying this
 *       request.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 */
export class CreateScanCommand extends $Command<
  CreateScanCommandInput,
  CreateScanCommandOutput,
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
  constructor(readonly input: CreateScanCommandInput) {
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
  ): Handler<CreateScanCommandInput, CreateScanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateScanCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruSecurityClient";
    const commandName = "CreateScanCommand";
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
  private serialize(input: CreateScanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateScanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScanCommandOutput> {
    return de_CreateScanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
