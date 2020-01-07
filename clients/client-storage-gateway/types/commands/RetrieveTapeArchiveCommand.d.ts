import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { RetrieveTapeArchiveInput, RetrieveTapeArchiveOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RetrieveTapeArchiveCommandInput = RetrieveTapeArchiveInput;
export declare type RetrieveTapeArchiveCommandOutput = RetrieveTapeArchiveOutput & __MetadataBearer;
export declare class RetrieveTapeArchiveCommand extends $Command<RetrieveTapeArchiveCommandInput, RetrieveTapeArchiveCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: RetrieveTapeArchiveCommandInput;
    constructor(input: RetrieveTapeArchiveCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetrieveTapeArchiveCommandInput, RetrieveTapeArchiveCommandOutput>;
    private serialize;
    private deserialize;
}
