import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListPartsOutput, ListPartsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPartsCommandInput = ListPartsRequest;
export declare type ListPartsCommandOutput = ListPartsOutput & __MetadataBearer;
export declare class ListPartsCommand extends $Command<ListPartsCommandInput, ListPartsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListPartsCommandInput;
    constructor(input: ListPartsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPartsCommandInput, ListPartsCommandOutput>;
    private serialize;
    private deserialize;
}
