import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetAnalyzerRequest, GetAnalyzerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAnalyzerCommandInput = GetAnalyzerRequest;
export declare type GetAnalyzerCommandOutput = GetAnalyzerResponse & __MetadataBearer;
export declare class GetAnalyzerCommand extends $Command<GetAnalyzerCommandInput, GetAnalyzerCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: GetAnalyzerCommandInput;
    constructor(input: GetAnalyzerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAnalyzerCommandInput, GetAnalyzerCommandOutput>;
    private serialize;
    private deserialize;
}
