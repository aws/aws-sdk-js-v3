import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connections, DescribeConnectionsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConnectionsCommandInput = DescribeConnectionsRequest;
export declare type DescribeConnectionsCommandOutput = Connections & __MetadataBearer;
export declare class DescribeConnectionsCommand extends $Command<DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeConnectionsCommandInput;
    constructor(input: DescribeConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
