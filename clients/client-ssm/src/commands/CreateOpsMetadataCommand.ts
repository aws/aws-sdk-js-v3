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

import { CreateOpsMetadataRequest, CreateOpsMetadataResult } from "../models/models_0";
import { de_CreateOpsMetadataCommand, se_CreateOpsMetadataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOpsMetadataCommand}.
 */
export interface CreateOpsMetadataCommandInput extends CreateOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link CreateOpsMetadataCommand}.
 */
export interface CreateOpsMetadataCommandOutput extends CreateOpsMetadataResult, __MetadataBearer {}

/**
 * @public
 * <p>If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify
 *    information about the new application, including the application type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CreateOpsMetadataRequest
 *   ResourceId: "STRING_VALUE", // required
 *   Metadata: { // MetadataMap
 *     "<keys>": { // MetadataValue
 *       Value: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // CreateOpsMetadataResult
 * //   OpsMetadataArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOpsMetadataCommandInput - {@link CreateOpsMetadataCommandInput}
 * @returns {@link CreateOpsMetadataCommandOutput}
 * @see {@link CreateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataAlreadyExistsException} (client fault)
 *  <p>An OpsMetadata object already exists for the selected resource.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link OpsMetadataLimitExceededException} (client fault)
 *  <p>Your account reached the maximum number of OpsMetadata objects allowed by Application Manager. The
 *    maximum is 200 OpsMetadata objects. Delete one or more OpsMetadata object and try again.</p>
 *
 * @throws {@link OpsMetadataTooManyUpdatesException} (client fault)
 *  <p>The system is processing too many concurrent updates. Wait a few moments and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class CreateOpsMetadataCommand extends $Command<
  CreateOpsMetadataCommandInput,
  CreateOpsMetadataCommandOutput,
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
  constructor(readonly input: CreateOpsMetadataCommandInput) {
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
  ): Handler<CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOpsMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateOpsMetadataCommand";
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
  private serialize(input: CreateOpsMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateOpsMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOpsMetadataCommandOutput> {
    return de_CreateOpsMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
