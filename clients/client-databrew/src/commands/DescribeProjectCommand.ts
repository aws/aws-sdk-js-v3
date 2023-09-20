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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DescribeProjectRequest, DescribeProjectResponse } from "../models/models_0";
import { de_DescribeProjectCommand, se_DescribeProjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandInput extends DescribeProjectRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandOutput extends DescribeProjectResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the definition of a specific DataBrew project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeProjectCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeProjectCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // DescribeProjectRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProjectResponse
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   CreatedBy: "STRING_VALUE",
 * //   DatasetName: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   LastModifiedBy: "STRING_VALUE",
 * //   Name: "STRING_VALUE", // required
 * //   RecipeName: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   Sample: { // Sample
 * //     Size: Number("int"),
 * //     Type: "FIRST_N" || "LAST_N" || "RANDOM", // required
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   SessionStatus: "ASSIGNED" || "FAILED" || "INITIALIZING" || "PROVISIONING" || "READY" || "RECYCLING" || "ROTATING" || "TERMINATED" || "TERMINATING" || "UPDATING",
 * //   OpenedBy: "STRING_VALUE",
 * //   OpenDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeProjectCommandInput - {@link DescribeProjectCommandInput}
 * @returns {@link DescribeProjectCommandOutput}
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 */
export class DescribeProjectCommand extends $Command<
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
  DataBrewClientResolvedConfig
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
  constructor(readonly input: DescribeProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProjectCommandInput, DescribeProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "DescribeProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlueDataBrew",
        operation: "DescribeProject",
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
  private serialize(input: DescribeProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProjectCommandOutput> {
    return de_DescribeProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
