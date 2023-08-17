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

import { GetOpsMetadataRequest, GetOpsMetadataResult } from "../models/models_1";
import { de_GetOpsMetadataCommand, se_GetOpsMetadataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOpsMetadataCommand}.
 */
export interface GetOpsMetadataCommandInput extends GetOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetOpsMetadataCommand}.
 */
export interface GetOpsMetadataCommandOutput extends GetOpsMetadataResult, __MetadataBearer {}

/**
 * @public
 * <p>View operational metadata related to an application in Application Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetOpsMetadataRequest
 *   OpsMetadataArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetOpsMetadataResult
 * //   ResourceId: "STRING_VALUE",
 * //   Metadata: { // MetadataMap
 * //     "<keys>": { // MetadataValue
 * //       Value: "STRING_VALUE",
 * //     },
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOpsMetadataCommandInput - {@link GetOpsMetadataCommandInput}
 * @returns {@link GetOpsMetadataCommandOutput}
 * @see {@link GetOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link GetOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link OpsMetadataNotFoundException} (client fault)
 *  <p>The OpsMetadata object doesn't exist. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetOpsMetadataCommand extends $Command<
  GetOpsMetadataCommandInput,
  GetOpsMetadataCommandOutput,
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
  constructor(readonly input: GetOpsMetadataCommandInput) {
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
  ): Handler<GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOpsMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetOpsMetadataCommand";
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
  private serialize(input: GetOpsMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOpsMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOpsMetadataCommandOutput> {
    return de_GetOpsMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
