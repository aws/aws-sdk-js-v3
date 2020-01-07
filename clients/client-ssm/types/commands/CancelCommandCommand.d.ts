import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CancelCommandRequest, CancelCommandResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelCommandCommandInput = CancelCommandRequest;
export declare type CancelCommandCommandOutput = CancelCommandResult & __MetadataBearer;
export declare class CancelCommandCommand extends $Command<CancelCommandCommandInput, CancelCommandCommandOutput, SSMClientResolvedConfig> {
    readonly input: CancelCommandCommandInput;
    constructor(input: CancelCommandCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelCommandCommandInput, CancelCommandCommandOutput>;
    private serialize;
    private deserialize;
}
