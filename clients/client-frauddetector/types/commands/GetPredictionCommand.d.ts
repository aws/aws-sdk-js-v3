import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetPredictionRequest, GetPredictionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPredictionCommandInput = GetPredictionRequest;
export declare type GetPredictionCommandOutput = GetPredictionResult & __MetadataBearer;
export declare class GetPredictionCommand extends $Command<GetPredictionCommandInput, GetPredictionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetPredictionCommandInput;
    constructor(input: GetPredictionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPredictionCommandInput, GetPredictionCommandOutput>;
    private serialize;
    private deserialize;
}
