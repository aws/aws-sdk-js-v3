import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { SelectObjectContentOutput, SelectObjectContentRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SelectObjectContentCommandInput = SelectObjectContentRequest;
export declare type SelectObjectContentCommandOutput = SelectObjectContentOutput & __MetadataBearer;
export declare class SelectObjectContentCommand extends $Command<SelectObjectContentCommandInput, SelectObjectContentCommandOutput, S3ClientResolvedConfig> {
    readonly input: SelectObjectContentCommandInput;
    constructor(input: SelectObjectContentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SelectObjectContentCommandInput, SelectObjectContentCommandOutput>;
    private serialize;
    private deserialize;
}
