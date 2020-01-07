import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeClusterTracksMessage, TrackListMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterTracksCommandInput = DescribeClusterTracksMessage;
export declare type DescribeClusterTracksCommandOutput = TrackListMessage & __MetadataBearer;
export declare class DescribeClusterTracksCommand extends $Command<DescribeClusterTracksCommandInput, DescribeClusterTracksCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterTracksCommandInput;
    constructor(input: DescribeClusterTracksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterTracksCommandInput, DescribeClusterTracksCommandOutput>;
    private serialize;
    private deserialize;
}
