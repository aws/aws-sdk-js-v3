import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutConformancePackRequest, PutConformancePackResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutConformancePackCommandInput = PutConformancePackRequest;
export declare type PutConformancePackCommandOutput = PutConformancePackResponse & __MetadataBearer;
export declare class PutConformancePackCommand extends $Command<PutConformancePackCommandInput, PutConformancePackCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutConformancePackCommandInput;
    constructor(input: PutConformancePackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConformancePackCommandInput, PutConformancePackCommandOutput>;
    private serialize;
    private deserialize;
}
