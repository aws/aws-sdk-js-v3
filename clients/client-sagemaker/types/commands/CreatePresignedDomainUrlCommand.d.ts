import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreatePresignedDomainUrlRequest, CreatePresignedDomainUrlResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePresignedDomainUrlCommandInput = CreatePresignedDomainUrlRequest;
export declare type CreatePresignedDomainUrlCommandOutput = CreatePresignedDomainUrlResponse & __MetadataBearer;
export declare class CreatePresignedDomainUrlCommand extends $Command<CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreatePresignedDomainUrlCommandInput;
    constructor(input: CreatePresignedDomainUrlCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput>;
    private serialize;
    private deserialize;
}
