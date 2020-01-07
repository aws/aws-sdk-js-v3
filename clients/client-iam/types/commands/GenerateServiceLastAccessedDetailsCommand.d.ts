import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GenerateServiceLastAccessedDetailsRequest, GenerateServiceLastAccessedDetailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateServiceLastAccessedDetailsCommandInput = GenerateServiceLastAccessedDetailsRequest;
export declare type GenerateServiceLastAccessedDetailsCommandOutput = GenerateServiceLastAccessedDetailsResponse & __MetadataBearer;
export declare class GenerateServiceLastAccessedDetailsCommand extends $Command<GenerateServiceLastAccessedDetailsCommandInput, GenerateServiceLastAccessedDetailsCommandOutput, IAMClientResolvedConfig> {
    readonly input: GenerateServiceLastAccessedDetailsCommandInput;
    constructor(input: GenerateServiceLastAccessedDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateServiceLastAccessedDetailsCommandInput, GenerateServiceLastAccessedDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
