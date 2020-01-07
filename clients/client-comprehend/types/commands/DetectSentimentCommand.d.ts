import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectSentimentRequest, DetectSentimentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectSentimentCommandInput = DetectSentimentRequest;
export declare type DetectSentimentCommandOutput = DetectSentimentResponse & __MetadataBearer;
export declare class DetectSentimentCommand extends $Command<DetectSentimentCommandInput, DetectSentimentCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectSentimentCommandInput;
    constructor(input: DetectSentimentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectSentimentCommandInput, DetectSentimentCommandOutput>;
    private serialize;
    private deserialize;
}
