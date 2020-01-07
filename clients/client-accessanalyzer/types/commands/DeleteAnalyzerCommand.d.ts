import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { DeleteAnalyzerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAnalyzerCommandInput = DeleteAnalyzerRequest;
export declare type DeleteAnalyzerCommandOutput = __MetadataBearer;
export declare class DeleteAnalyzerCommand extends $Command<DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: DeleteAnalyzerCommandInput;
    constructor(input: DeleteAnalyzerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput>;
    private serialize;
    private deserialize;
}
