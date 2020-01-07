import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectKeyPhrasesRequest, DetectKeyPhrasesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectKeyPhrasesCommandInput = DetectKeyPhrasesRequest;
export declare type DetectKeyPhrasesCommandOutput = DetectKeyPhrasesResponse & __MetadataBearer;
export declare class DetectKeyPhrasesCommand extends $Command<DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectKeyPhrasesCommandInput;
    constructor(input: DetectKeyPhrasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput>;
    private serialize;
    private deserialize;
}
