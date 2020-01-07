import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { CreateAnalyzerRequest, CreateAnalyzerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAnalyzerCommandInput = CreateAnalyzerRequest;
export declare type CreateAnalyzerCommandOutput = CreateAnalyzerResponse & __MetadataBearer;
export declare class CreateAnalyzerCommand extends $Command<CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: CreateAnalyzerCommandInput;
    constructor(input: CreateAnalyzerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput>;
    private serialize;
    private deserialize;
}
