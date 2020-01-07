import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { EvaluateExpressionInput, EvaluateExpressionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EvaluateExpressionCommandInput = EvaluateExpressionInput;
export declare type EvaluateExpressionCommandOutput = EvaluateExpressionOutput & __MetadataBearer;
export declare class EvaluateExpressionCommand extends $Command<EvaluateExpressionCommandInput, EvaluateExpressionCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: EvaluateExpressionCommandInput;
    constructor(input: EvaluateExpressionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EvaluateExpressionCommandInput, EvaluateExpressionCommandOutput>;
    private serialize;
    private deserialize;
}
