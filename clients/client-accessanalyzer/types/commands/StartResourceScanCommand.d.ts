import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { StartResourceScanRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartResourceScanCommandInput = StartResourceScanRequest;
export declare type StartResourceScanCommandOutput = __MetadataBearer;
export declare class StartResourceScanCommand extends $Command<StartResourceScanCommandInput, StartResourceScanCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: StartResourceScanCommandInput;
    constructor(input: StartResourceScanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartResourceScanCommandInput, StartResourceScanCommandOutput>;
    private serialize;
    private deserialize;
}
