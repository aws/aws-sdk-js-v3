import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectLegalHoldOutput, GetObjectLegalHoldRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetObjectLegalHoldCommandInput = GetObjectLegalHoldRequest;
export declare type GetObjectLegalHoldCommandOutput = GetObjectLegalHoldOutput & __MetadataBearer;
export declare class GetObjectLegalHoldCommand extends $Command<GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectLegalHoldCommandInput;
    constructor(input: GetObjectLegalHoldCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput>;
    private serialize;
    private deserialize;
}
