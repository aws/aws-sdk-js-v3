import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CancelJobRequest, CancelJobResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelJobCommandInput = CancelJobRequest;
export declare type CancelJobCommandOutput = CancelJobResult & __MetadataBearer;
export declare class CancelJobCommand extends $Command<CancelJobCommandInput, CancelJobCommandOutput, SnowballClientResolvedConfig> {
    readonly input: CancelJobCommandInput;
    constructor(input: CancelJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelJobCommandInput, CancelJobCommandOutput>;
    private serialize;
    private deserialize;
}
