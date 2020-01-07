import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectTorrentOutput, GetObjectTorrentRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetObjectTorrentCommandInput = GetObjectTorrentRequest;
export declare type GetObjectTorrentCommandOutput = GetObjectTorrentOutput & __MetadataBearer;
export declare class GetObjectTorrentCommand extends $Command<GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectTorrentCommandInput;
    constructor(input: GetObjectTorrentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput>;
    private serialize;
    private deserialize;
}
