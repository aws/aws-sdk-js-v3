import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutImageRequest, PutImageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutImageCommandInput = PutImageRequest;
export declare type PutImageCommandOutput = PutImageResponse & __MetadataBearer;
export declare class PutImageCommand extends $Command<PutImageCommandInput, PutImageCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutImageCommandInput;
    constructor(input: PutImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutImageCommandInput, PutImageCommandOutput>;
    private serialize;
    private deserialize;
}
