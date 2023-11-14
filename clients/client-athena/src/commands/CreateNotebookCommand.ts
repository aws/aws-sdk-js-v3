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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { CreateNotebookInput, CreateNotebookOutput } from "../models/models_0";
import { de_CreateNotebookCommand, se_CreateNotebookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNotebookCommand}.
 */
export interface CreateNotebookCommandInput extends CreateNotebookInput {}
/**
 * @public
 *
 * The output of {@link CreateNotebookCommand}.
 */
export interface CreateNotebookCommandOutput extends CreateNotebookOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled
 *             workgroup. Throws an error if a file in the workgroup with the same name already
 *             exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // CreateNotebookInput
 *   WorkGroup: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateNotebookCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotebookOutput
 * //   NotebookId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNotebookCommandInput - {@link CreateNotebookCommandInput}
 * @returns {@link CreateNotebookCommandOutput}
 * @see {@link CreateNotebookCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class CreateNotebookCommand extends $Command<
  CreateNotebookCommandInput,
  CreateNotebookCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: CreateNotebookCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNotebookCommandInput, CreateNotebookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNotebookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "CreateNotebookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "CreateNotebook",
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
  private serialize(input: CreateNotebookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNotebookCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNotebookCommandOutput> {
    return de_CreateNotebookCommand(output, context);
  }
}
