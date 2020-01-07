import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { RetireGrantRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RetireGrantCommandInput = RetireGrantRequest;
export declare type RetireGrantCommandOutput = __MetadataBearer;
export declare class RetireGrantCommand extends $Command<RetireGrantCommandInput, RetireGrantCommandOutput, KMSClientResolvedConfig> {
    readonly input: RetireGrantCommandInput;
    constructor(input: RetireGrantCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetireGrantCommandInput, RetireGrantCommandOutput>;
    private serialize;
    private deserialize;
}
