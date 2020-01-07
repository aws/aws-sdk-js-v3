import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectLegalHoldOutput, PutObjectLegalHoldRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutObjectLegalHoldCommandInput = PutObjectLegalHoldRequest;
export declare type PutObjectLegalHoldCommandOutput = PutObjectLegalHoldOutput & __MetadataBearer;
export declare class PutObjectLegalHoldCommand extends $Command<PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectLegalHoldCommandInput;
    constructor(input: PutObjectLegalHoldCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput>;
    private serialize;
    private deserialize;
}
