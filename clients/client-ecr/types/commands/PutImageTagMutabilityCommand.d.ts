import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutImageTagMutabilityRequest, PutImageTagMutabilityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutImageTagMutabilityCommandInput = PutImageTagMutabilityRequest;
export declare type PutImageTagMutabilityCommandOutput = PutImageTagMutabilityResponse & __MetadataBearer;
export declare class PutImageTagMutabilityCommand extends $Command<PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutImageTagMutabilityCommandInput;
    constructor(input: PutImageTagMutabilityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput>;
    private serialize;
    private deserialize;
}
