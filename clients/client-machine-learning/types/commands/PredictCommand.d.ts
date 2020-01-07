import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { PredictInput, PredictOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PredictCommandInput = PredictInput;
export declare type PredictCommandOutput = PredictOutput & __MetadataBearer;
export declare class PredictCommand extends $Command<PredictCommandInput, PredictCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: PredictCommandInput;
    constructor(input: PredictCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PredictCommandInput, PredictCommandOutput>;
    private serialize;
    private deserialize;
}
