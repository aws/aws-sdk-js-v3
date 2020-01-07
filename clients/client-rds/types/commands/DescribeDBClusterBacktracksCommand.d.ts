import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterBacktrackMessage, DescribeDBClusterBacktracksMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBClusterBacktracksCommandInput = DescribeDBClusterBacktracksMessage;
export declare type DescribeDBClusterBacktracksCommandOutput = DBClusterBacktrackMessage & __MetadataBearer;
export declare class DescribeDBClusterBacktracksCommand extends $Command<DescribeDBClusterBacktracksCommandInput, DescribeDBClusterBacktracksCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBClusterBacktracksCommandInput;
    constructor(input: DescribeDBClusterBacktracksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterBacktracksCommandInput, DescribeDBClusterBacktracksCommandOutput>;
    private serialize;
    private deserialize;
}
