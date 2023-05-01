// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DescribeReplicationConfigurationTemplatesRequest,
  DescribeReplicationConfigurationTemplatesResponse,
  DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeReplicationConfigurationTemplatesCommand,
  se_DescribeReplicationConfigurationTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeReplicationConfigurationTemplatesCommand}.
 */
export interface DescribeReplicationConfigurationTemplatesCommandInput
  extends DescribeReplicationConfigurationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationConfigurationTemplatesCommand}.
 */
export interface DescribeReplicationConfigurationTemplatesCommandOutput
  extends DescribeReplicationConfigurationTemplatesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeReplicationConfigurationTemplatesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeReplicationConfigurationTemplatesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DescribeReplicationConfigurationTemplatesRequest
 *   replicationConfigurationTemplateIDs: [ // ReplicationConfigurationTemplateIDs
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeReplicationConfigurationTemplatesCommandInput - {@link DescribeReplicationConfigurationTemplatesCommandInput}
 * @returns {@link DescribeReplicationConfigurationTemplatesCommandOutput}
 * @see {@link DescribeReplicationConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 *
 */
export class DescribeReplicationConfigurationTemplatesCommand extends $Command<
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: DescribeReplicationConfigurationTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeReplicationConfigurationTemplatesCommandInput,
    DescribeReplicationConfigurationTemplatesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeReplicationConfigurationTemplatesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeReplicationConfigurationTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog,
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
  private serialize(
    input: DescribeReplicationConfigurationTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeReplicationConfigurationTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> {
    return de_DescribeReplicationConfigurationTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
