import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListAccessPointsRequest, ListAccessPointsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAccessPointsCommandInput = ListAccessPointsRequest;
export declare type ListAccessPointsCommandOutput = ListAccessPointsResult & __MetadataBearer;
export declare class ListAccessPointsCommand extends $Command<ListAccessPointsCommandInput, ListAccessPointsCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: ListAccessPointsCommandInput;
    constructor(input: ListAccessPointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccessPointsCommandInput, ListAccessPointsCommandOutput>;
    private serialize;
    private deserialize;
}
