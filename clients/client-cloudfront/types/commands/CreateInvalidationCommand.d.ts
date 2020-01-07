import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateInvalidationRequest, CreateInvalidationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInvalidationCommandInput = CreateInvalidationRequest;
export declare type CreateInvalidationCommandOutput = CreateInvalidationResult & __MetadataBearer;
export declare class CreateInvalidationCommand extends $Command<CreateInvalidationCommandInput, CreateInvalidationCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateInvalidationCommandInput;
    constructor(input: CreateInvalidationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInvalidationCommandInput, CreateInvalidationCommandOutput>;
    private serialize;
    private deserialize;
}
